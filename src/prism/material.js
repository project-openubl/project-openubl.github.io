// Prism themes built from the Material Design color palette.
// Used by docusaurus.config.js (docs code blocks) and by the homepage demo.

/** @type {import('prism-react-renderer').PrismTheme} */
const materialDark = {
  plain: {
    color: "#ECEFF1", // Blue Grey 50
    backgroundColor: "#263238", // Blue Grey 900
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#78909C", fontStyle: "italic" }, // Blue Grey 400
    },
    { types: ["punctuation"], style: { color: "#90A4AE" } }, // Blue Grey 300
    { types: ["operator"], style: { color: "#B0BEC5" } }, // Blue Grey 200
    {
      types: ["keyword", "builtin", "important", "atrule"],
      style: { color: "#CE93D8" }, // Purple 200
    },
    {
      types: ["string", "char", "inserted", "attr-value", "regex"],
      style: { color: "#C5E1A5" }, // Light Green 200
    },
    { types: ["function", "selector"], style: { color: "#81D4FA" } }, // Light Blue 200
    { types: ["class-name", "maybe-class-name"], style: { color: "#FFCC80" } }, // Orange 200
    {
      types: ["number", "boolean", "constant", "symbol"],
      style: { color: "#80CBC4" }, // Teal 200
    },
    { types: ["tag", "deleted"], style: { color: "#EF9A9A" } }, // Red 200
    { types: ["attr-name", "property"], style: { color: "#B39DDB" } }, // Deep Purple 200
    { types: ["variable", "namespace"], style: { color: "#ECEFF1" } },
  ],
};

/** @type {import('prism-react-renderer').PrismTheme} */
const materialLight = {
  plain: {
    color: "#263238", // Blue Grey 900
    backgroundColor: "#F5F5F5", // Grey 100
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#78909C", fontStyle: "italic" }, // Blue Grey 400
    },
    { types: ["punctuation", "operator"], style: { color: "#546E7A" } }, // Blue Grey 600
    {
      types: ["keyword", "builtin", "important", "atrule"],
      style: { color: "#7B1FA2" }, // Purple 700
    },
    {
      types: ["string", "char", "inserted", "attr-value", "regex"],
      style: { color: "#2E7D32" }, // Green 800
    },
    { types: ["function", "selector"], style: { color: "#1565C0" } }, // Blue 800
    { types: ["class-name", "maybe-class-name"], style: { color: "#D84315" } }, // Deep Orange 800
    {
      types: ["number", "boolean", "constant", "symbol"],
      style: { color: "#00838F" }, // Cyan 800
    },
    { types: ["tag", "deleted"], style: { color: "#C62828" } }, // Red 800
    { types: ["attr-name", "property"], style: { color: "#6A1B9A" } }, // Purple 800
  ],
};

module.exports = { materialDark, materialLight };
