// Downloads the xhandler core (WebAssembly) used by the homepage playground.
// The module is the official release asset of xhandler-rust, pinned and verified by SHA-256,
// so the binary is not committed to this repository. Runs before `npm start` and `npm run build`.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const VERSION = "6.0.0-alpha.1";
const SHA256 = "0d28805d5d2658479bc53d69bd5eb1cc525291fceae83b0e4576f887bd4ef245";
const URL = `https://github.com/project-openubl/xhandler-rust/releases/download/v${VERSION}/xhandler.wasm`;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "static", "wasm", `xhandler-${VERSION}.wasm`);

const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

if (existsSync(target) && sha256(readFileSync(target)) === SHA256) {
  process.exit(0);
}

console.log(`Downloading xhandler core ${VERSION}...`);
const response = await fetch(URL);
if (!response.ok) {
  console.error(`Could not download ${URL}: HTTP ${response.status}`);
  process.exit(1);
}
const bytes = Buffer.from(await response.arrayBuffer());
const actual = sha256(bytes);
if (actual !== SHA256) {
  console.error(`Checksum mismatch for ${URL}: expected ${SHA256}, got ${actual}`);
  process.exit(1);
}
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, bytes);
console.log(`Saved ${target}`);
