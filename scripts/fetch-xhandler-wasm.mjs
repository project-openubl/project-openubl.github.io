// Downloads the xhandler core (WebAssembly) used by the homepage playground.
// The module is the official release asset of xhandler-rust, pinned in xhandler.json and verified
// by SHA-256, so the binary is not committed to this repository. Runs before `npm start` and
// `npm run build`. To move to a new release: npm run xhandler:set-version -- vX.Y.Z
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { version: VERSION, sha256: SHA256 } = JSON.parse(readFileSync(join(root, "xhandler.json"), "utf8"));
const URL = `https://github.com/project-openubl/xhandler-rust/releases/download/v${VERSION}/xhandler.wasm`;
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
