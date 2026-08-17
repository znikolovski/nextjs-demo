# aem-content

The AEM side of the `cba-demo` demo — a **curated subset** of the `aem.commbank-lego` module (from CBA's `cba-digital` reactor), containing only what `../cba-homeloans-web` actually needs to run. It is **not** the whole module: `aem.commbank-lego` also has a large amount of pre-existing, unrelated proprietary home-loan business content (rate feeds, disclaimers, the HLC rate-compare calculator, real commbank.com.au copy) that has nothing to do with this demo and isn't included here.

This folder mirrors the exact JCR path layout of `aem.commbank-lego/ui.content/src/main/content/` — if you have a real `cba-digital` checkout, everything under `jcr_root/` here can be copied straight into the equivalent path in that module's `ui.content`, and everything under `graphql-persisted-queries/` into its equivalent folder, without renaming anything.

## What's included and why

**Content Fragment Models** (`jcr_root/conf/commbank-content-fragments/settings/dam/cfm/models/`):
- `page` + `section-group` — the generic Page/Section abstraction this demo is actually about. A `page` has an ordered, heterogeneous `sections` list (any mix of the types below); a `section-group` groups a same-kind run of items (e.g. several Feature Items) under one shared layout. Both use AEM's multi-type `fragmentreference` mechanism (a bracket-list of allowed model paths) — see `mdc-result-mapping-model` in the full module for the original precedent this was based on (not included here, since it's otherwise unused).
- `hero-banner`, `feature-item`, `product-card` — the actual content types a Page/Section-Group can be built from.
- `site-chrome`, `nav-link`, `section-nav-item`, `footer-column` — the site header/nav/footer, also Content-Fragment-backed.
- `home-loans-page` — the model behind the original hand-built `/home-loans` landing page (kept as-is, not yet migrated onto the generic `page` model).

**Persisted queries** (`graphql-persisted-queries/` + their JCR counterparts): only the four actually called by the frontend today — `get-site-chrome`, `get-home-loans-page`, `get-page-by-path`, `list-pages`.

**Content instances** (`jcr_root/content/dam/commbank/`):
- `home-loans/` — the original home-loans page's content (hero, 4 feature items, 3 product cards, site chrome + its nav links/footer columns/section nav items).
- `pages/`, `hero-banners/`, `feature-items/`, `product-cards/`, `section-groups/` — the generic model's folders. `pages/home-loans` is a working example: a Page composed entirely from *existing* fragments already in `home-loans/`, reassembled through the generic `sections` list — the actual proof that the abstraction works with zero content duplication.

## Installing this into an AEM instance

If you have a full `cba-digital` checkout:

1. Copy `jcr_root/` and `graphql-persisted-queries/` into the corresponding paths under `aem.commbank-lego/ui.content/src/main/content/`.
2. Merge `filter.xml`'s entries into that module's `META-INF/vault/filter.xml` (note the `mode="merge"` on every `/content/dam/commbank/*` root — **keep that**, or a later package install will silently delete anything authored live through Universal Editor or the classic console; see `cba-homeloans-web/UNIVERSAL_EDITOR_LOCAL_SETUP.md` for the incident that motivated this).
3. `cd aem.commbank-lego/ui.content && mvn clean install -PautoInstallPackage` (see that module's own README for Maven/artifactory setup).
4. One-time per environment: create + publish a GraphQL endpoint for the `commbank-content-fragments` config (Tools > Assets > GraphQL in the classic UI) if one doesn't already exist.

If you don't have a `cba-digital` checkout at all, you'll need a standalone AEM 6.5 instance with the `commbank-content-fragments` GraphQL config already set up, and will need to package `jcr_root/` here into your own content package (a minimal `pom.xml` + `filter.xml` — this folder isn't a buildable Maven module on its own).

## Known gotchas (verified against a real instance)

- GraphQL type/field names derive from each model's `jcr:title`, camelCased — not the folder name.
- A CFM dialog field with `required="{Boolean}true"` crashes AEM 6.5's Content Fragment "Element Editor" panel with a `ClassCastException` — none of these models use it.
- `fragmentreference` fields with a **bracket-list** `fragmentmodelreference` (multiple allowed model types) resolve correctly through GraphQL's `AllFragmentModels` union — confirmed end-to-end, including nested unions (a `section-group`'s own `items` field).
- Every `/content/dam/commbank/*` filter root uses `mode="merge"` deliberately — see above.
