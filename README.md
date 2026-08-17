# cba-demo

A demo of a generic **Page + Section** content-fragment abstraction built on top of CBA's home-loans site: instead of hand-building a Next.js route + components for every new page, authors compose a page from an ordered, heterogeneous list of reusable AEM Content Fragment "sections" (Hero Banner, Feature Item, Product Card, Section Group), and the frontend renders whatever it finds — no code deploy needed to add a page or restructure one.

## Repo structure

- **`cba-homeloans-web/`** — the Next.js frontend. See its own README for setup.
- **`aem-content/`** — a curated subset of the AEM-side Content Fragment Models, persisted queries, and content that this frontend expects. See its own README for what's included, why, and how to install it into a real AEM instance.

## The core idea

- A `page` Content Fragment has a `sections` field: an ordered, mixed-type list of fragment references (Hero Banner / Feature Item / Product Card / Section Group), using AEM's multi-type `fragmentreference` mechanism (a bracket-list of allowed CFM paths) resolved through GraphQL's `AllFragmentModels` union.
- A `section-group` groups a same-kind run of items (e.g. several Feature Items) under one shared layout — this is what makes several items lay out side-by-side in a shared row/grid, as an explicit authoring choice rather than something inferred from array order.
- The Next.js app has a single catch-all route (`app/[...path]/page.tsx`) that resolves any `pages/*` path to a `page` fragment and renders its sections — reordering the `sections` multifield in AEM is the entire mechanism behind structural page editing.
- `pages/home-loans` (in `aem-content/`) is the proof: a whole page built from the *same* Hero/Feature/Product content the original hand-built `/home-loans` page uses, reassembled through the generic model with zero duplication.
- Universal Editor is wired up so authors can create brand-new fragments directly from the canvas's "+" button (`cba-homeloans-web/public/static/component-{definition,filters}.json`), not just edit existing ones.

## Getting started

1. Set up AEM with the content in `aem-content/` — see `aem-content/README.md`.
2. Set up and run the frontend — see `cba-homeloans-web/README.md`.
3. For Universal Editor (visual editing), follow `cba-homeloans-web/UNIVERSAL_EDITOR_LOCAL_SETUP.md` — it documents several non-obvious AEM 6.5-specific fixes (CORS headers, connection scheme, ACL grants) that are easy to miss and will otherwise look like something is broken.
