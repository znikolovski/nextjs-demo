# cba-homeloans-web

Next.js (App Router) frontend for CBA's home-loans site, migrated from classic AEM to a headless AEM + Next.js setup. Content comes from AEM Content Fragments via GraphQL persisted queries — see `lib/aem/graphql-client.ts`.

This repo is one half of the `cba-demo` demo — see the [top-level README](../README.md) for the full picture, and `../aem-content/` for the AEM-side content this app expects to find.

## What's in here

- `app/home-loans/` — the original, hand-built home-loans landing page (hero, feature grid, product cards), each built from `components/sections/*` pieces.
- `app/[...path]/` — a generic catch-all route: any AEM `page` Content Fragment (path starting with `pages/`) renders here automatically, composed from an ordered, heterogeneous `sections` list (Hero Banner / Feature Item / Product Card / Section Group), with **zero code deploy** needed to add a new page or reorder its sections. See `components/sections/renderSection.tsx` for the dispatch logic.
- `components/sections/` — the reusable rendering pieces for each Content Fragment type, shared by both the hand-built page and the generic catch-all.
- `components/layout/` — site chrome (header/nav/footer), also Content-Fragment-backed (`SiteChrome` CFM).
- `lib/aem/` — GraphQL persisted-query client, Universal Editor instrumentation helpers (`editor.ts`), hand-written domain types mirroring the CFMs (`types.ts`).
- `public/static/component-{definition,filters}.json` — Universal Editor config letting authors create new Hero/FeatureItem/ProductCard/SectionGroup fragments directly from the canvas's "+" button, instead of pre-creating them in the classic Assets console first.
- `UNIVERSAL_EDITOR_LOCAL_SETUP.md` — every manual AEM 6.5 OSGi/CORS/ACL step needed to get Universal Editor working locally against a classic on-prem instance. Required reading if UE editing/saving/adding isn't working.

## Getting started

1. Get an AEM author instance running with the content in `../aem-content/` installed (see that folder's README).
2. `cp .env.example .env.local` and fill in your AEM connection details (defaults match a local AEM instance on `:4502` with `admin`/`admin`).
3. `npm install`
4. `npm run fetch-schema` — pulls `schema/aem.graphql` from your AEM instance (regenerates the file already checked in).
5. `npm run codegen` — generates `lib/aem/generated.ts` from that schema + `graphql/operations/*.graphql`.
6. `npm run dev`, then visit `/home-loans` or `/pages/home-loans`.

For Universal Editor (visual/in-context editing), follow `UNIVERSAL_EDITOR_LOCAL_SETUP.md` first — it documents non-obvious AEM 6.5-specific config this app depends on (CORS headers, `aem65:` connection scheme, ACL grants including `jcr:versionManagement`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` / `npm run start` — production build/serve
- `npm run lint` — ESLint
- `npm run fetch-schema` — refresh `schema/aem.graphql` from AEM
- `npm run codegen` — regenerate `lib/aem/generated.ts`

## Notes for anyone touching this app

This Next.js version has real behavioral differences from what you may expect (see `AGENTS.md`) — check `node_modules/next/dist/docs/` before assuming an API works the way it used to (e.g. `params` is a `Promise` in route handlers/pages).
