# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
yarn install          # Install dependencies
yarn start            # Dev server (Hugo + Webpack on port 3000)
yarn build            # Production build (output in dist/)
yarn preview          # Preview with drafts and future posts
yarn lint             # ESLint on src/ and cypress/
yarn cypress:open     # Interactive E2E tests
yarn cypress:run      # Headless E2E tests
```

Node version: 16 (see `.nvmrc`). Uses Yarn 1.x.

## Architecture

This is **Jardin des Racines** — a trilingual (FR/NL/EN) Hugo static site with Decap CMS, deployed on Netlify. The project explores the roots of political, social, and industrial movements.

### Trilingual Setup

- Default language: French (`fr`), no URL prefix
- Dutch at `/nl/`, English at `/en/`
- Content directories: `site/content/fr/`, `site/content/nl/`, `site/content/en/`
- UI strings: `site/i18n/fr.toml`, `nl.toml`, `en.toml`
- Hugo config: `site/hugo.toml` with `[languages]` block

### Build Pipeline

Webpack and Hugo run in parallel during development. Webpack processes `src/` (JS + SCSS), generates an asset manifest at `site/data/webpack.json`, which Hugo's `baseof.html` reads to inject bundled CSS/JS into pages.

- **Webpack entry points:** `src/index.js` (frontend), `src/js/cms.js` (Decap CMS + React preview templates)
- **Webpack configs:** `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`

### Hugo Site (`site/`)

- `hugo.toml` — site config (trilingual: FR default, NL, EN)
- `layouts/_default/baseof.html` — base template consuming webpack manifest
- `layouts/partials/` — content-agnostic partials using Hugo `dict` for reusability; nav and footer use `i18n` function and `relLangURL`
- `layouts/section/` — section templates (contact, products, values)
- `layouts/post/single.html` — blog post template
- `content/{fr,nl,en}/post/` — blog posts as leaf bundles
- `content/{fr,nl,en}/` — page content (`_index.md`, `products/`, `values/`, `contact/`)
- `static/admin/config.yml` — Decap CMS with i18n (multiple_folders structure)

### CSS

Tachyons-based utility CSS with PostCSS. Variables defined in `src/css/imports/_variables.scss`. Main entry: `src/css/main.scss`. Color palette: forest green (`--primary: #2D6A4F`) + warm orange (`--accent: #FF8C00`).

### CMS

Decap CMS at `/admin/` using Git Gateway + Netlify Identity. i18n configured with `structure: multiple_folders`, locales `[fr, nl, en]`. Preview templates are React components in `src/js/cms-preview-templates/`. CMS collections: Posts (folder-based with i18n), Pages (file-based with i18n), Site Settings.

### Deployment

Netlify auto-deploys from `main`. Cypress tests run on deploy via `netlify-plugin-cypress`. Deploy previews enabled for PRs.

## Cypress E2E Tests

Tests live in `cypress/e2e/basic.cy.js`. They run automatically on every Netlify deploy (`onSuccess`).

**IMPORTANT — When modifying content or structure, update Cypress tests accordingly:**

- **Adding/removing pages or sections**: update navigation tests (link selectors like `a[href="/products"]`) and any URL assertions.
- **Changing page titles or headings**: update `.contains()` assertions that match `<h1>` text.
- **Adding/removing blog posts**: update the post count assertion (`should("have.length", N)`).
- **Changing URL structure or routes**: update `cy.visit()` paths and `href` selectors.
- **Changing `<base>` tag or `baseurl`**: avoid `<base href>` with absolute URLs — it breaks deploy preview link resolution. Use Hugo `relURL`/`absURL` instead.

Always verify tests pass locally with `yarn cypress:run` before pushing.
