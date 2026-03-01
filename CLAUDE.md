# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Project OpenUBL website — a Docusaurus 3.9.2 static documentation site for an open-source electronic invoicing (facturación electrónica) project for Peru/SUNAT. Default locale is Spanish (es).

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

**Framework**: Docusaurus 3 with React 18, TypeScript 5, Tailwind CSS 3, and MDX v3.

**Content areas** (each with its own sidebar):
- `docs/` — Main documentation, auto-generated sidebar from filesystem. Files use numbered prefixes (01-, 02-) for ordering. Sub-projects: xbuilder, xsender, searchpe, ublhub.
- `blog/` — Blog posts with author/date/tag front matter.
- `community/` — Community docs under separate route `/community/`, uses `sidebarsCommunity.js`.

**Source code** (`src/`):
- `components/` — React components (mix of .js and .tsx). Uses `clsx` for conditional classes, Tailwind-first styling.
- `pages/` — Route pages including homepage (`index.tsx`) and API reference pages.
- `css/custom.css` — Global styles combining Tailwind directives with Infima CSS variable overrides.
- `theme/` — Docusaurus theme component overrides (swizzled).

**API documentation**: OpenAPI specs live in `static/openapi/{searchpe,ublhub}/openapi.yaml`, rendered via `redocusaurus` plugin. Custom ReDoc plugin in `redoc-plugin/`.

**Configuration**:
- `docusaurus.config.js` — Main config including custom TailwindCSS PostCSS plugin, PWA, ReDoc, Algolia search, and Google Analytics.
- `tailwind.config.js` — Preflight disabled (Infima handles base styles), dark mode uses Docusaurus class strategy `[data-theme='dark']`.

## Styling

Tailwind CSS is the primary styling approach but Infima (Docusaurus default) handles base component styles. Custom CSS variables for the primary color palette are defined in `src/css/custom.css`. Dark mode is supported via CSS custom properties.

## Deployment

GitHub Pages at `project-openubl.github.io`. CI/CD via `.github/workflows/docs-actions.yml`: pushes to master trigger `npm ci → npm run build → deploy`. Algolia crawler runs post-deploy for search indexing.
