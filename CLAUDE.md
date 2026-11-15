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
- `docs/` — Main documentation, auto-generated sidebar from filesystem. Files use numbered prefixes (01-, 02-) for ordering. Sub-projects: xbuilder, xsender, searchpe, ublhub.
- `blog/` — Blog posts with author/date/tag front matter.
- `community/` — Community docs under separate route `/community/`, uses `sidebarsCommunity.js`.

**Source code** (`src/`):
- `components/` — React components (mix of .js and .tsx). Uses `clsx` for conditional classes, Tailwind-first styling.
- `pages/` — Route pages including homepage (`index.tsx`) and API reference pages.
- `components/Home/` — Homepage sections (hero, projects, workflow, community).
- `css/custom.css` — Global styles: Tailwind v4 config (`@theme`, dark variant) plus Infima CSS variable overrides.
- `theme/` — Docusaurus theme overrides (swizzled). `prism-include-languages.js` works around redocusaurus' `ProvidePlugin({ Prism })`, which otherwise breaks syntax highlighting and hydration — keep it.

**API documentation**: OpenAPI specs live in `static/openapi/{searchpe,ublhub}/openapi.yaml`, rendered via `redocusaurus` plugin. Custom ReDoc plugin in `redoc-plugin/`.

**Configuration**:
- `docusaurus.config.js` — Main config including a custom PostCSS plugin that adds `@tailwindcss/postcss`, PWA, ReDoc, Algolia search, and Google Analytics.

## Styling

Tailwind CSS v4 is the primary styling approach but Infima (Docusaurus default) handles base component styles. There is no `tailwind.config.js`: configuration lives in `src/css/custom.css`. Preflight is not imported, and utilities are imported *unlayered* so they can override Infima's (unlayered) styles. Dark mode uses `@custom-variant dark` bound to `[data-theme='dark']`. Custom CSS variables for the primary color palette are defined in `src/css/custom.css`. Dark mode is supported via CSS custom properties.

## Deployment

GitHub Pages at `project-openubl.github.io`. CI via `.github/workflows/ci.yml` (PRs and pushes to `main`: `npm ci → npm run build`). Deploy via `.github/workflows/deploy.yml` on pushes to `main`. Algolia crawler runs post-deploy for search indexing.
