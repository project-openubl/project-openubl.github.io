/**
 * Swizzled from @docusaurus/theme-classic (safe to swizzle).
 *
 * Why: docusaurus-theme-redoc >= 2.5.1 (redocusaurus 2.5.2) registers
 * `new ProvidePlugin({ Prism: ['prismjs'] })`. That rewrites the global
 * `Prism` referenced inside `prismjs/components/prism-*` to the standalone
 * `prismjs` package, which causes two problems:
 *
 * 1. `additionalLanguages` get registered on the standalone instance instead
 *    of prism-react-renderer's, so code blocks lose syntax highlighting.
 * 2. In the browser, standalone `prismjs` auto-highlights the server-rendered
 *    DOM on load (unless `Prism.manual` is set), which breaks React hydration.
 *    redoc sets `Prism.manual` itself, but only after this module has run.
 */
import siteConfig from "@generated/docusaurus.config";

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;

  // Must be set before `prismjs` is evaluated for the first time.
  if (typeof window !== "undefined") {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
  }
  const StandalonePrism = require("prismjs");

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang) => {
    if (lang === "php") {
      require("prismjs/components/prism-markup-templating.js");
    }
    require(`prismjs/components/prism-${lang}`);
  });
  delete globalThis.Prism;
  if (typeof PrismBefore !== "undefined") {
    globalThis.Prism = PrismBefore;
  }

  // Copy grammars that landed on the standalone instance (see 1. above).
  additionalLanguages.forEach((lang) => {
    if (!PrismObject.languages[lang] && StandalonePrism.languages[lang]) {
      PrismObject.languages[lang] = StandalonePrism.languages[lang];
    }
  });
}
