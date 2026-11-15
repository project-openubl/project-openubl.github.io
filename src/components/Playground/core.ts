// Runs the xhandler core (xhandler-rust compiled to wasm32-wasip1, the same module the
// Java, Python and Go libraries embed) in the browser. The core imports only six WASI
// functions, implemented below, and exposes one JSON entry point:
// https://github.com/project-openubl/xhandler-rust/tree/main/xhandler-wasm

export const CORE_VERSION = "6.0.0-alpha.1";

export type CoreResult<T> =
  | { ok: T; error?: undefined }
  | { ok?: undefined; error: { kind: string; message: string } };

interface CoreExports {
  memory: WebAssembly.Memory;
  _initialize: () => void;
  xh_alloc: (len: number) => number;
  xh_free: (ptr: number, len: number) => void;
  xh_invoke: (ptr: number, len: number) => bigint;
}

class ExitError extends Error {}

function wasiImports(memory: () => WebAssembly.Memory) {
  const view = () => new DataView(memory().buffer);
  return {
    random_get(ptr: number, len: number) {
      crypto.getRandomValues(new Uint8Array(memory().buffer, ptr, len));
      return 0;
    },
    environ_sizes_get(countPtr: number, sizePtr: number) {
      view().setUint32(countPtr, 0, true);
      view().setUint32(sizePtr, 0, true);
      return 0;
    },
    environ_get() {
      return 0;
    },
    clock_time_get(_id: number, _precision: bigint, outPtr: number) {
      view().setBigUint64(outPtr, BigInt(Date.now()) * 1_000_000n, true);
      return 0;
    },
    // Only used by the Rust runtime to print panics.
    fd_write(_fd: number, iovs: number, iovsLen: number, writtenPtr: number) {
      const dv = view();
      let written = 0;
      let text = "";
      for (let i = 0; i < iovsLen; i++) {
        const ptr = dv.getUint32(iovs + i * 8, true);
        const len = dv.getUint32(iovs + i * 8 + 4, true);
        text += new TextDecoder().decode(new Uint8Array(memory().buffer, ptr, len));
        written += len;
      }
      if (text.trim()) console.error("[xhandler]", text);
      dv.setUint32(writtenPtr, written, true);
      return 0;
    },
    proc_exit(code: number) {
      throw new ExitError(`xhandler exited with code ${code}`);
    },
  };
}

let modulePromise: Promise<WebAssembly.Module> | null = null;
let instance: CoreExports | null = null;

function compile(url: string): Promise<WebAssembly.Module> {
  if (!modulePromise) {
    modulePromise = (async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      try {
        return await WebAssembly.compileStreaming(response.clone());
      } catch {
        // Servers that don't send `application/wasm`
        return WebAssembly.compile(await response.arrayBuffer());
      }
    })();
    modulePromise.catch(() => {
      modulePromise = null;
    });
  }
  return modulePromise;
}

async function getInstance(url: string): Promise<CoreExports> {
  if (instance) return instance;
  const module = await compile(url);
  let exports: CoreExports | null = null;
  const wasm = await WebAssembly.instantiate(module, {
    wasi_snapshot_preview1: wasiImports(() => exports!.memory),
  });
  exports = wasm.exports as unknown as CoreExports;
  exports._initialize();
  instance = exports;
  return exports;
}

/** Loads the core in advance (e.g. when the playground scrolls into view). */
export function preload(url: string): Promise<unknown> {
  return getInstance(url);
}

/** Runs one core operation (`build`, `enrich`, `version`...). */
export async function invoke<T>(url: string, op: string, input?: unknown): Promise<CoreResult<T>> {
  const core = await getInstance(url);
  const request = new TextEncoder().encode(JSON.stringify(input === undefined ? { op } : { op, input }));
  const requestPtr = core.xh_alloc(request.length);
  new Uint8Array(core.memory.buffer, requestPtr, request.length).set(request);
  try {
    const packed = core.xh_invoke(requestPtr, request.length);
    const responsePtr = Number(packed >> 32n);
    const responseLen = Number(packed & 0xffffffffn);
    const response = new TextDecoder().decode(new Uint8Array(core.memory.buffer, responsePtr, responseLen));
    core.xh_free(requestPtr, request.length);
    core.xh_free(responsePtr, responseLen);
    return JSON.parse(response) as CoreResult<T>;
  } catch (error) {
    // A trap (panic) leaves the instance unusable: start over with a new one.
    instance = null;
    return { error: { kind: "panic", message: String((error as Error).message ?? error) } };
  }
}
