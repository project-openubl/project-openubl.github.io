// Moves the website to an xhandler release: the playground core (xhandler.json) and the
// versions shown in the docs (install commands for Maven, crates.io, PyPI and Go).
//
//   node scripts/set-xhandler-version.mjs v6.0.0-alpha.2
//
// It downloads the release's SHA256SUMS to pin the new xhandler.wasm, never moves the site
// to an older version (e.g. a 6.0.x patch released after 7.0.0-alpha.1) and prints, as
// "warning:" lines, what a text replacement can't do. Used by release-tools' release-xhandler
// workflow, which opens a pull request with the result.
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const configPath = join(root, "xhandler.json");
const SCAN = ["docs", "src", "README.md"];
const EXTENSIONS = /\.(md|mdx|ts|tsx|js|jsx)$/;

const SEMVER = /^v?(\d+)\.(\d+)\.(\d+)(?:-(alpha|beta|rc)\.(\d+))?$/;

function parse(version) {
  const m = SEMVER.exec(version);
  if (!m) {
    console.error(`"${version}" is not vX.Y.Z or vX.Y.Z-alpha|beta|rc.N`);
    process.exit(1);
  }
  const [, major, minor, patch, pre, preNumber] = m;
  const semver = `${major}.${minor}.${patch}${pre ? `-${pre}.${preNumber}` : ""}`;
  // PEP 440 spelling used by PyPI: 6.0.0-alpha.1 -> 6.0.0a1
  const pep440 = `${major}.${minor}.${patch}${pre ? `${{ alpha: "a", beta: "b", rc: "rc" }[pre]}${preNumber}` : ""}`;
  return { major: +major, minor: +minor, patch: +patch, pre, preNumber: +preNumber || 0, semver, pep440 };
}

function compare(a, b) {
  for (const k of ["major", "minor", "patch"]) if (a[k] !== b[k]) return a[k] - b[k];
  if (!a.pre || !b.pre) return (a.pre ? -1 : 0) - (b.pre ? -1 : 0); // a stable release is newer
  const order = ["alpha", "beta", "rc"];
  return order.indexOf(a.pre) - order.indexOf(b.pre) || a.preNumber - b.preNumber;
}

function files(path) {
  const full = join(root, path);
  if (statSync(full).isFile()) return [full];
  return readdirSync(full).flatMap((name) => files(join(path, name)));
}

const arg = process.argv[2];
if (!arg) {
  console.error("usage: set-xhandler-version.mjs vX.Y.Z[-alpha|beta|rc.N]");
  process.exit(1);
}

const config = JSON.parse(readFileSync(configPath, "utf8"));
const from = parse(config.version);
const to = parse(arg);

if (compare(to, from) <= 0) {
  console.log(`The website already uses xhandler ${from.semver} (>= ${to.semver}): nothing to do`);
  process.exit(0);
}

// Pin the core of the new release
const sumsUrl = `https://github.com/project-openubl/xhandler-rust/releases/download/v${to.semver}/SHA256SUMS`;
const response = await fetch(sumsUrl);
if (!response.ok) {
  console.error(`Could not download ${sumsUrl}: HTTP ${response.status}`);
  process.exit(1);
}
const line = (await response.text()).split("\n").find((l) => /\sxhandler\.wasm$/.test(l.trim()));
const sha256 = line?.trim().split(/\s+/)[0];
if (!/^[0-9a-f]{64}$/.test(sha256 ?? "")) {
  console.error(`${sumsUrl} has no checksum for xhandler.wasm`);
  process.exit(1);
}
writeFileSync(configPath, `${JSON.stringify({ version: to.semver, sha256 }, null, 2)}\n`);
console.log(`xhandler.json: ${from.semver} -> ${to.semver}`);

// Versions shown in the docs and pages (v-prefixed tags contain the semver spelling)
const replacements = [[from.semver, to.semver]];
if (from.pep440 !== from.semver) replacements.push([from.pep440, to.pep440]);

for (const file of SCAN.flatMap((p) => {
  try {
    return files(p);
  } catch {
    return [];
  }
})) {
  if (!EXTENSIONS.test(file)) continue;
  const before = readFileSync(file, "utf8");
  let after = before;
  for (const [old, next] of replacements) after = after.split(old).join(next);
  if (after !== before) {
    writeFileSync(file, after);
    console.log(`updated ${relative(root, file)}`);
  }
}

// What a replacement can't decide
if (to.major !== from.major) {
  console.log(
    `warning: major version ${from.major} -> ${to.major}: update the Go module path ` +
      `(github.com/project-openubl/xhandler-go/v${from.major}) and review the docs for API changes`,
  );
}
if (!to.pre && from.pre) {
  console.log("warning: first stable release: review the alpha notice in docs/01-introduction.md and the --pre flag in the Python install docs");
}
