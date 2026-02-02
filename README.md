# Jardin des Racines

A multilingual (FR/NL/EN/ES) editorial project exploring the roots of political, social, and industrial movements. Built with [Hugo](https://gohugo.io), [Decap CMS](https://github.com/decaporg/decap-cms), and deployed on [Netlify](https://www.netlify.com).

## About the project

**Jardin des Racines** (Roots' Garden) is an independent cultural project that investigates how political parties drift from their founding principles, how criminal economies exploit marginalized populations, and how taboos serve powerful interests rather than collective protection.

### Published episodes

- **Episode 01 — Les Héritiers sans Testament**: How Belgium's liberal, socialist, and Christian-democratic parties evolved away from their founding ideals. A pattern of semantic erosion where words like "freedom" and "solidarity" remain on the label while the content changes.

- **Episode 02 — La Grande Dérive**: The same rightward drift documented in France (SFIO → PS) and the United States (Lincoln's party → Trump's GOP). Elite convergence across the political spectrum, the hollowing of democracy (Crouch, Mair, Mouffe), and the Overton window shift.

- **Episode 03 — Le Paravent Ethnique**: An investigation into the racial stratification of drug trafficking — how marginalized populations serve as visible "small hands" while the real beneficiaries (organized crime, the financial system, far-right movements, geopolitical powers) remain invisible. Documents the self-reinforcing loop: taboo → black market → disproportionate arrests → racist stereotypes → exclusion policies → expanded recruitment pool.

### Editorial approach

Each article is a human–AI collaboration: editorial direction, ideas, and final validation are human; documentary research and drafting are AI-assisted. Every factual claim is sourced from academic, encyclopedic, or journalistic documents. Sources are listed at the end of each article.

## Development

```bash
yarn install          # Install dependencies
yarn start            # Dev server (Hugo + Webpack on port 3000)
yarn build            # Production build (output in dist/)
yarn preview          # Preview with drafts and future posts
```

Node version: 16 (see `.nvmrc`). Uses Yarn 1.x.

## Multilingual setup

| Language | Prefix | Content directory |
|----------|--------|-------------------|
| Français (default) | `/` | `site/content/fr/` |
| Nederlands | `/nl/` | `site/content/nl/` |
| English | `/en/` | `site/content/en/` |
| Español | `/es/` | `site/content/es/` |

UI strings live in `site/i18n/{fr,nl,en,es}.toml`. Hugo config: `site/hugo.toml`.

## Testing

```bash
yarn cypress:run      # Headless E2E tests
yarn cypress:open     # Interactive E2E tests
```

Cypress tests also run on deploy via the [Netlify Cypress plugin](https://www.netlify.com/integrations/cypress/).

## Architecture

Webpack and Hugo run in parallel during development. Webpack processes `src/` (JS + SCSS), generates an asset manifest at `site/data/webpack.json`, which Hugo reads to inject bundled CSS/JS into pages. Decap CMS is available at `/admin/` using Git Gateway + Netlify Identity.

## License

Content (articles, translations) is the intellectual property of the editor. The Hugo/Webpack scaffolding is based on [one-click-hugo-cms](https://github.com/decaporg/one-click-hugo-cms) by [Darin Dimitroff](https://twitter.com/deezel) / [spacefarm.digital](https://www.spacefarm.digital).
