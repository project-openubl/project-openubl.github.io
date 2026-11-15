// Prism themes built from the PatternFly 6 color palette (--pf-t--color--*).
// Used by docusaurus.config.js (docs code blocks), the homepage demo and the playground.

/** @type {import('prism-react-renderer').PrismTheme} */
const patternflyDark = {
  plain: {
    color: "#f2f2f2", // gray-10
    backgroundColor: "#1f1f1f", // gray-90
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#a3a3a3", fontStyle: "italic" }, // gray-40
    },
    { types: ["punctuation", "operator"], style: { color: "#c7c7c7" } }, // gray-30
    {
      types: ["keyword", "builtin", "important", "atrule"],
      style: { color: "#b6a6e9" }, // purple-30
    },
    {
      types: ["string", "char", "inserted", "attr-value", "regex"],
      style: { color: "#afdc8f" }, // green-30
    },
    { types: ["function", "selector"], style: { color: "#92c5f9" } }, // blue-30
    { types: ["class-name", "maybe-class-name"], style: { color: "#ffcc17" } }, // yellow-30
    {
      types: ["number", "boolean", "constant", "symbol"],
      style: { color: "#9ad8d8" }, // teal-30
    },
    { types: ["tag", "deleted"], style: { color: "#f89b78" } }, // red-orange-30
    { types: ["attr-name", "property"], style: { color: "#92c5f9" } }, // blue-30
    { types: ["variable", "namespace"], style: { color: "#f2f2f2" } },
  ],
};

/** @type {import('prism-react-renderer').PrismTheme} */
const patternflyLight = {
  plain: {
    color: "#151515", // gray-95
    backgroundColor: "#f2f2f2", // gray-10
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#707070", fontStyle: "italic" }, // gray-50
    },
    { types: ["punctuation", "operator"], style: { color: "#4d4d4d" } }, // gray-60
    {
      types: ["keyword", "builtin", "important", "atrule"],
      style: { color: "#5e40be" }, // purple-50
    },
    {
      types: ["string", "char", "inserted", "attr-value", "regex"],
      style: { color: "#3d7317" }, // green-60
    },
    { types: ["function", "selector"], style: { color: "#0066cc" } }, // blue-50
    { types: ["class-name", "maybe-class-name"], style: { color: "#96640f" } }, // yellow-60
    {
      types: ["number", "boolean", "constant", "symbol"],
      style: { color: "#147878" }, // teal-60
    },
    { types: ["tag", "deleted"], style: { color: "#b1380b" } }, // red-orange-60
    { types: ["attr-name", "property"], style: { color: "#004d99" } }, // blue-60
  ],
};

module.exports = { patternflyDark, patternflyLight };
