import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Highlight } from "prism-react-renderer";
import { dump, load } from "js-yaml";

import { patternflyDark } from "../../prism/patternfly";
import { CORE_VERSION, invoke } from "./core";
import { EXAMPLES } from "./examples";
import YamlEditor from "./YamlEditor";

type Spec = Record<string, unknown> & {
  serie_numero?: string;
  documento_id?: string;
  moneda?: string;
  fecha_emision?: string;
  igv_tasa?: string;
  total_importe?: { importe: string; importe_sin_impuestos: string };
  total_impuestos?: { total: string };
};

type Status =
  | { state: "loading" }
  | { state: "ok"; ms: number }
  | { state: "error"; title: string; message: string };

interface Output {
  xml: string;
  spec: Spec;
}

/** Drops nulls and empty collections so the enriched document stays readable. */
function compact(value: unknown): unknown {
  if (Array.isArray(value)) {
    const items = value.map(compact).filter((v) => v !== undefined);
    return items.length ? items : undefined;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, compact(v)] as const)
      .filter(([, v]) => v !== undefined);
    return entries.length ? Object.fromEntries(entries) : undefined;
  }
  return value === null ? undefined : value;
}

function money(amount: string | undefined, currency = "PEN") {
  if (amount === undefined) return "-";
  try {
    return new Intl.NumberFormat("es-PE", { style: "currency", currency }).format(Number(amount));
  } catch {
    return `${currency} ${Number(amount).toFixed(2)}`;
  }
}

function Code({ code, language }: { code: string; language: string }) {
  return (
    <Highlight theme={patternflyDark} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className="m-0 rounded-none bg-transparent p-0 py-4 font-mono text-[12.5px] leading-[1.65]">
          <code className="block min-w-max">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="flex px-4">
                <span className="mr-4 w-6 shrink-0 text-right text-pf-gray-50 select-none">{i + 1}</span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}

function Calculated({ spec }: { spec: Spec }) {
  const totals = spec.total_importe;
  const currency = spec.moneda ?? "PEN";
  const yaml = useMemo(() => dump(compact(spec), { lineWidth: 100, noRefs: true }), [spec]);
  return (
    <div>
      {totals && (
        <div className="grid grid-cols-3 gap-px border-b border-solid border-x-0 border-t-0 border-white/10 bg-white/10">
          {[
            ["Subtotal", totals.importe_sin_impuestos],
            ["Impuestos", spec.total_impuestos?.total],
            ["Total", totals.importe],
          ].map(([label, amount], i) => (
            <div key={label} className="bg-code px-4 py-3">
              <p className="m-0 text-[11px] font-semibold tracking-wide text-pf-gray-40 uppercase">{label}</p>
              <p
                className={clsx(
                  "m-0 font-mono text-base font-semibold tabular-nums",
                  i === 2 ? "text-pf-green-30" : "text-white",
                )}
              >
                {money(amount, currency)}
              </p>
            </div>
          ))}
        </div>
      )}
      <Code code={yaml} language="yaml" />
    </div>
  );
}

const TABS = [
  { id: "xml", label: "XML" },
  { id: "calc", label: "Calculado" },
] as const;

export default function Playground() {
  const wasmUrl = useBaseUrl(`/wasm/xhandler-${CORE_VERSION}.wasm`);
  const [exampleId, setExampleId] = useState(EXAMPLES[0].id);
  const [source, setSource] = useState(EXAMPLES[0].yaml);
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("xml");
  const [output, setOutput] = useState<Output | null>(null);
  const [status, setStatus] = useState<Status>({ state: "loading" });
  const [copied, setCopied] = useState(false);
  const run = useRef(0);

  useEffect(() => {
    const id = ++run.current;
    const timer = setTimeout(
      async () => {
        let document: unknown;
        try {
          document = load(source);
        } catch (error) {
          setStatus({ state: "error", title: "YAML inválido", message: (error as Error).message.split("\n")[0] });
          return;
        }
        try {
          const started = performance.now();
          const [built, enriched] = await Promise.all([
            invoke<string>(wasmUrl, "build", { document }),
            invoke<Spec>(wasmUrl, "enrich", { document }),
          ]);
          if (id !== run.current) return;
          if (built.error || enriched.error) {
            const error = (built.error ?? enriched.error)!;
            setStatus({ state: "error", title: error.kind, message: error.message });
            return;
          }
          setOutput({ xml: built.ok!, spec: enriched.ok! });
          setStatus({ state: "ok", ms: performance.now() - started });
        } catch (error) {
          if (id !== run.current) return;
          setStatus({
            state: "error",
            title: "No se pudo cargar xhandler",
            message: String((error as Error).message ?? error),
          });
        }
      },
      output ? 250 : 0,
    );
    return () => clearTimeout(timer);
    // `output` only decides the first-run delay.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, wasmUrl]);

  const selectExample = (id: string) => {
    const example = EXAMPLES.find((e) => e.id === id)!;
    setExampleId(id);
    setSource(example.yaml);
  };

  const fileName = `${output?.spec.serie_numero ?? output?.spec.documento_id ?? "comprobante"}.xml`;

  const copy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output.xml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const download = () => {
    if (!output) return;
    const url = URL.createObjectURL(new Blob([output.xml], { type: "application/xml" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: fileName });
    a.click();
    URL.revokeObjectURL(url);
  };

  const stale = status.state === "error";

  return (
    <div>
      {/* Document selector */}
      <div role="radiogroup" aria-label="Tipo de comprobante" className="mb-5 flex flex-wrap gap-2">
        {EXAMPLES.map((example) => {
          const selected = example.id === exampleId;
          return (
            <button
              key={example.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => selectExample(example.id)}
              className={clsx(
                "cursor-pointer rounded-full border border-solid px-4 py-1.5 font-sans text-sm font-medium transition-colors",
                selected
                  ? "border-brand bg-brand text-on-brand"
                  : "border-line bg-card text-fg hover:border-brand hover:text-brand",
              )}
            >
              {example.label}
            </button>
          );
        })}
      </div>

      {/* Workbench */}
      <div className="overflow-hidden rounded-2xl bg-code text-left shadow-[0_16px_32px_-12px_rgb(21_21_21/0.35)] ring-1 ring-black/5 dark:shadow-none dark:ring-white/10">
        <div className="grid lg:grid-cols-2">
          {/* Input */}
          <div className="flex min-w-0 flex-col border-b border-solid border-x-0 border-t-0 border-white/10 lg:border-r lg:border-b-0">
            <div className="flex h-12 items-center justify-between border-b border-solid border-x-0 border-t-0 border-white/10 px-4">
              <span className="font-mono text-xs text-pf-gray-40">documento.yaml</span>
              <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-pf-gray-40">editable</span>
            </div>
            <div className="h-[380px] lg:h-[480px]">
              <YamlEditor value={source} onChange={setSource} ariaLabel="Documento en YAML" />
            </div>
          </div>

          {/* Output */}
          <div className="flex min-w-0 flex-col">
            <div className="flex h-12 items-end justify-between border-b border-solid border-x-0 border-t-0 border-white/10 pr-2 pl-2">
              <div role="tablist" aria-label="Resultado" className="flex">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className={clsx(
                      "relative cursor-pointer border-0 bg-transparent px-3 pb-3 font-sans text-sm font-semibold transition-colors",
                      tab === t.id ? "text-white" : "text-pf-gray-40 hover:text-pf-gray-10",
                    )}
                  >
                    {t.label}
                    {tab === t.id && (
                      <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-pf-blue-30" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex gap-1 pb-2">
                <button
                  type="button"
                  onClick={copy}
                  disabled={!output}
                  className="cursor-pointer rounded-md border-0 bg-white/5 px-2.5 py-1 font-sans text-xs font-medium text-pf-gray-30 hover:bg-white/10 hover:text-white disabled:opacity-40"
                >
                  {copied ? "¡Copiado!" : "Copiar"}
                </button>
                <button
                  type="button"
                  onClick={download}
                  disabled={!output}
                  className="cursor-pointer rounded-md border-0 bg-white/5 px-2.5 py-1 font-sans text-xs font-medium text-pf-gray-30 hover:bg-white/10 hover:text-white disabled:opacity-40"
                >
                  Descargar
                </button>
              </div>
            </div>
            <div
              className={clsx(
                "h-[380px] overflow-auto transition-opacity lg:h-[480px]",
                stale && "opacity-40",
              )}
            >
              {output ? (
                tab === "xml" ? (
                  <Code code={output.xml} language="markup" />
                ) : (
                  <Calculated spec={output.spec} />
                )
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center font-mono text-xs text-pf-gray-50">
                  {status.state === "error" ? "" : "Cargando el núcleo de xhandler…"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div
          aria-live="polite"
          className={clsx(
            "flex min-h-11 items-center gap-2.5 border-t border-solid border-x-0 border-b-0 border-white/10 bg-black/20 px-4 py-2.5 font-mono text-[12.5px]",
            status.state === "error" ? "text-pf-red-orange-30" : "text-pf-green-30",
          )}
        >
          <span
            className={clsx(
              "size-2 shrink-0 rounded-full",
              status.state === "loading" && "animate-pulse bg-pf-gray-40",
              status.state === "ok" && "bg-pf-green-30",
              status.state === "error" && "bg-pf-red-orange-30",
            )}
          />
          <span className="min-w-0 flex-1 truncate">
            {status.state === "loading" && <span className="text-pf-gray-40">Cargando el núcleo de xhandler…</span>}
            {status.state === "ok" && <>XML generado en {Math.max(1, Math.round(status.ms))} ms · {fileName}</>}
            {status.state === "error" && (
              <>
                <strong>{status.title}</strong> · {status.message}
              </>
            )}
          </span>
          <span className="hidden shrink-0 text-pf-gray-50 sm:block">xhandler {CORE_VERSION} · WebAssembly</span>
        </div>
      </div>

      <p className="mt-5 mb-0 text-center text-sm text-fg-subtle">
        Genera lo mismo desde tu terminal con{" "}
        <code className="rounded-md border border-solid border-line bg-card px-1.5 py-0.5 text-[13px] text-fg">
          xhandler create -f documento.yaml
        </code>{" "}
        · <Link to="/docs/use-cases/cli">Línea de comandos</Link>
      </p>
    </div>
  );
}
