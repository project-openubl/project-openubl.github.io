# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Project OpenUBL website — a Docusaurus 3.10 static documentation site for an open-source electronic invoicing (facturación electrónica) project for Peru/SUNAT. Default locale is Spanish (es).

## Commands

```bash
npm ci                  # Install dependencies
npm start               # Dev server with hot reload
npm run build           # Production build to /build
npm run serve           # Serve production build locally
npm run typecheck       # TypeScript type checking (tsc)
```

There is no test suite — this is a docs-focused project.

## Architecture

**Framework**: Docusaurus 3 with React 19, TypeScript 7, Tailwind CSS 4, and MDX v3. Requires Node >= 20.

**Content areas** (each with its own sidebar):
- `docs/` — Main documentation for **xhandler v6** (same API in Java, Rust, Python and Go, plus the `xhandler` CLI). Auto-generated sidebar; numbered prefixes (01-, 02-) set the order and every page pins its URL with a `slug`. Organised by use case, not by library: `02-installation`, `03-quickstart`, `04-use-cases/` (one page per SUNAT document/task), `05-fundamentals/` (signing, sending, calculations, errors), `90-project/`. Code samples use `<Tabs groupId="lang" queryString>` with TabItems `java`, `rust`, `python`, `go` (and `cli`), so `?lang=go` preselects a language and the choice syncs across pages. Link between docs with relative file paths so the build validates them.
- `blog/` — Blog posts with author/date/tag front matter.
- `community/` — Community docs under separate route `/community/`, uses `sidebarsCommunity.js`.

**Source code** (`src/`):
- `components/` — React components (mix of .js and .tsx). Uses `clsx` for conditional classes, Tailwind-first styling.
- `pages/` — Route pages, including the homepage (`index.tsx`).
- `components/Home/` — Homepage sections: hero with a multi-language code demo, playground, features.
- `css/custom.css` — Global styles: Tailwind v4 config (`@theme`, dark variant) plus Infima CSS variable overrides.
- `prism/patternfly.js` — Prism themes from the PatternFly palette, used for docs code blocks, the homepage demo and the playground.
- `components/Playground/` — In-browser YAML → XML playground running the xhandler core (`xhandler.wasm`, fetched and SHA-256 checked by `scripts/fetch-xhandler-wasm.mjs` on `prestart`/`prebuild`; bump `VERSION`/`SHA256` there to upgrade).

**Configuration**:
- `docusaurus.config.js` — Main config including a custom PostCSS plugin that adds `@tailwindcss/postcss`, PWA, Algolia search, and Google Analytics.

## Content rules

- Never mention a software license on the site; "open source" is enough.
- Searchpe and Ublhub were removed from the docs; don't reintroduce them (old blog posts stay as history).

## Styling

Tailwind CSS v4 is the primary styling approach but Infima (Docusaurus default) handles base component styles. There is no `tailwind.config.js`: configuration lives in `src/css/custom.css`. Preflight is not imported, and utilities are imported *unlayered* so they can override Infima's (unlayered) styles. Dark mode uses `@custom-variant dark` bound to `[data-theme='dark']`. Colors follow PatternFly 6: the palette is exposed as Tailwind colors (`pf-blue-50`, `pf-gray-90`, ...) and semantic tokens (`brand`, `brand-hover`, `brand-subtle`, `on-brand`, `fg`, `fg-subtle`, `page`, `band`, `card`, `line`, `success`, `code`) that switch automatically between light and dark (mapped like PatternFly's `--pf-t--global--*` tokens), so components rarely need `dark:` variants. Infima variables use the same values. Icons come from `@patternfly/react-icons` (import each icon by path). Always check both light and dark mode.

## Deployment

GitHub Pages at `project-openubl.github.io`. CI via `.github/workflows/ci.yml` (PRs and pushes to `main`: `npm ci → npm run build`). Deploy via `.github/workflows/deploy.yml` on pushes to `main`. Algolia crawler runs post-deploy for search indexing.
