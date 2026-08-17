# Universal Editor: manual AEM configuration

This documents the manual, out-of-band changes made directly on the local AEM
6.5.25 quickstart (`../local-aem/`, a sibling directory to this project — not
part of the app itself) to get Universal Editor working end-to-end
against this app. None of this lives in JCR content packages or code — it's
OSGi config + one bundle install, applied by hand via curl/Felix console/CRXDE
Lite. If the local AEM instance is ever rebuilt from a fresh quickstart, all
of this needs to be redone.

None of it is CBA/project-specific — every change here is either standard AEM
6.5 security config or a missing standard Apache Sling bundle. A production
AEMaaCS environment shouldn't need any of this (its CORS/CSRF/ACL setup for
Universal Editor is already handled), and existing classic-AEM instances that
already support Universal Editor almost certainly already have the
`org.apache.sling.jcr.jackrabbit.accessmanager` bundle. Treat this purely as a
local-quickstart bootstrap list.

## Why any of this was needed

Universal Editor runs on `https://experience.adobe.com` and talks to your
local AEM instance as a genuine cross-origin, often cross-site, caller. A
stock AEM 6.5 quickstart has essentially zero of its security config aimed at
that scenario — CORS is unconfigured, the referrer filter has an empty
allow-list, anonymous access is off, and the bundle that lets you script ACL
changes isn't even installed. Each fix below addresses one specific rejection
in that chain, found by reproducing the exact failing request via curl and
reading the corresponding AEM error.log entry.

## 1. CORS policy

**Symptom:** browser blocked cross-origin responses from `localhost:8443`;
`Access-Control-Allow-Origin` was absent entirely (zero policies configured).

**Fix:** created a `com.adobe.granite.cors.impl.CORSPolicyImpl` factory
config via `/system/console/configMgr`:

| Property | Value |
|---|---|
| `alloworigin` | `https://experience.adobe.com`, `https://localhost:8444`, `https://localhost:8443` |
| `allowedpaths` | `.*` |
| `supportedheaders` | `Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, x-features, X-aemconnection-Authorization` |
| `supportedmethods` | `GET, HEAD, POST, PUT, DELETE, OPTIONS` |
| `supportscredentials` | `true` |
| `maxage` | `3600` |

**Follow-up fix:** the initial `supportedheaders` list above was missing two
headers Universal Editor's own JS actually sets on requests —
`x-features` and `X-aemconnection-Authorization`. When a browser preflight's
`Access-Control-Request-Headers` includes anything not in this list, AEM's
CORS filter returns `204` with **no** `Access-Control-Allow-*` headers at all
(not an error — just silently missing), which the browser reports as
`No 'Access-Control-Allow-Origin' header is present`. Confirmed by
reproducing the exact preflight via curl with
`Access-Control-Request-Headers: content-type,x-features,x-aemconnection-authorization`
— fixed by adding both headers to `supportedheaders` (already reflected in
the table above).

**Second follow-up fix:** same failure mode again, this time for
`x-gw-ims-org-id` — sent by Universal Editor's QueryBuilder-based content
tree/picker calls (e.g. `/bin/querybuilder.json`). Confirmed the same way:
`curl -X OPTIONS .../bin/querybuilder.json -H 'Access-Control-Request-Headers:
authorization,x-gw-ims-org-id'` came back `204` with zero `Access-Control-*`
response headers until `x-gw-ims-org-id` was added to `supportedheaders` too
(table above reflects the current, full list). Given this has now recurred
twice for two different UE-internal headers, treat any future
"CORS error, no Access-Control-Allow-Origin header" report the same way:
reproduce the exact preflight via curl and diff its
`Access-Control-Request-Headers` against the current `supportedheaders` list
before looking anywhere else.

## 2. Sling Referrer Filter

**Symptom:** `403` on `POST /libs/granite/core/content/login.html/j_security_check`.
`error.log` showed: `ReferrerFilter Rejected referrer header for POST request ... https://experience.adobe.com/`.

**Fix:** updated the singleton config `org.apache.sling.security.impl.ReferrerFilter`:

| Property | Before | After |
|---|---|---|
| `allow.empty` | `false` | `true` |
| `allow.hosts` | *(empty)* | `experience.adobe.com`, `localhost` |
| `filter.methods` | `POST, PUT, DELETE` | *(unchanged)* |

## 3. Anonymous access enabled globally

**Symptom:** `401` on direct-to-AEM reads (`.../jcr:content.json`) made by
Universal Editor's own `adobe-fetch` client — confirmed via access.log that
these requests carry **no** authenticated principal at all (not admin, not a
Basic-auth identity). That client never goes through a browser tab's native
Basic-auth popup, so cached credentials there don't apply to it.

**Fix:** `org.apache.sling.engine.impl.auth.SlingAuthenticator`:

| Property | Before | After |
|---|---|---|
| `auth.annonymous` | `false` | `true` |

This alone does **not** grant access anywhere — it just lets unauthenticated
requests resolve as the `anonymous` JCR user instead of getting an automatic
401 challenge. What `anonymous` can actually reach is still gated by ACLs
(#5 below).

Side effect: unauthenticated requests to `/system/console/*` now throw a
`500` (`NoAuthenticationHandlerException`) instead of a clean `401` — cosmetic
issue in Felix's own web console error handling, not a real access hole
(admin-authenticated console access is unaffected).

## 4. Missing bundle: `org.apache.sling.jcr.jackrabbit.accessmanager`

**Symptom:** `.modifyAce.html` (the standard curl-based ACL-editing endpoint)
always returned "200 OK" but never actually created a `rep:policy` node.
`error.log` revealed the request was being routed to Sling's **generic**
`ModifyOperation` (which treats `privilege@jcr:read` as a literal property
name to set) rather than the dedicated ACL servlet — because the bundle that
provides that servlet wasn't installed on this quickstart at all (absent from
all 633 installed bundles). Raw node creation as a workaround is also a dead
end: `rep:policy`/`rep:GrantACE` are JCR-protected item types
(`PersistenceException: Item is protected.`), so no generic POST can create
them without the real `AccessControlManager` API.

**Fix:** downloaded `org.apache.sling.jcr.jackrabbit.accessmanager-3.0.10.jar`
from Maven Central and installed it via the JCR-install-folder mechanism
(dropping the jar into a `nt:folder` named `install` under
`/apps/cba-tools/install/` — AEM's JCR bundle installer auto-detects and
activates jars in any folder named `install`). This is the same thing CRXDE
Lite's own upload feature does; no Felix bundle-console upload needed.

```
Bundle-SymbolicName: org.apache.sling.jcr.jackrabbit.accessmanager
Bundle-Version: 3.0.10
```

## 5. ACL grant: anonymous read + write on the content tree

**Symptom:** even with #3 and #4 in place, reads returned `404` and writes
returned `500` (`ContentFragmentException: Could not create modifiable
property map`, thrown deep in AEM's CFM impl when it can't get a writable
`ValueMap` for a resource the current principal can't modify).

**Fix:** granted `anonymous` both `jcr:read` and `rep:write` on `/content`
itself (inherited by every descendant — originally granted only on
`/content/dam/commbank/home-loans`, then widened to all of `/content` once a
second content subtree, `/content/dam/commbank/pages`, needed the same
access and it was clear more would follow as the generic Page/Section model
grows):

```bash
curl -u admin:admin \
  --data-urlencode "principalId=anonymous" \
  --data-urlencode "privilege@jcr:read=granted" \
  --data-urlencode "privilege@rep:write=granted" \
  "http://localhost:4502/content.modifyAce.html"
```

Verify with: `curl -u admin:admin http://localhost:4502/content.acl.json` →
`anonymous` granted `["jcr:read","rep:write"]`.

**Scope/risk note:** this is a repository-wide grant on a local,
single-developer instance — not something to carry into any shared or
production AEM environment.

**Second follow-up fix: `jcr:versionManagement` + `jcr:lockManagement`.**
**Symptom:** the "+"-created flow worked, but opening any *existing* fragment
for editing failed — `error.log` showed
`com.adobe.cq.dam.cfm.impl.servlets.EditSessionServlet Could not create
initial edit version`, with a `Caused by` chain bottoming out at
`javax.jcr.AccessDeniedException: OakAccess0000: Access denied` /
`org.apache.jackrabbit.oak.api.CommitFailedException: OakAccess0000: Access
denied`. The classic/Universal Editor CF editor creates an initial JCR
version checkpoint before allowing edits — that needs `jcr:versionManagement`
(AEM's editor also touches `jcr:lockManagement` in the same flow), neither of
which the original `jcr:read`/`rep:write` grant included.

**Fix:** re-ran the same grant with both added:

```bash
curl -u admin:admin \
  --data-urlencode "principalId=anonymous" \
  --data-urlencode "privilege@jcr:read=granted" \
  --data-urlencode "privilege@rep:write=granted" \
  --data-urlencode "privilege@jcr:versionManagement=granted" \
  --data-urlencode "privilege@jcr:lockManagement=granted" \
  "http://localhost:4502/content.modifyAce.html"
```

Verify with: `curl -u admin:admin http://localhost:4502/content.acl.json` →
`anonymous` granted
`["jcr:versionManagement","jcr:read","rep:write","jcr:lockManagement"]`.
Confirmed fixed by reproducing the exact failing request
(`POST .../<fragment>.cfm.edit.json`) anonymously afterward — it no longer
throws `AccessDeniedException`, it just needs the real `:operation` parameter
the actual UE client sends (a `400 No operation specified` from a bare test
POST is expected and unrelated to permissions).

## 6. ACL grant: anonymous read on `/libs`

**Symptom:** Universal Editor Service's own `/configuration` and `/details`
calls (proxied through `local-ssl-proxy` on 8001, forwarding the browser's
IMS Bearer token) returned `404`-wrapped errors, e.g. `Backend responded
with: 404 ... /mnt/overlay/granite/ui/content/shell/about.html`. This AEM
quickstart has no OSGi auth handler that understands an IMS Bearer token, so
these requests fall back to the `anonymous` principal (same mechanism as #3)
— and `anonymous` had no read grant anywhere under `/libs` at all. UES calls
several `/libs` and `/mnt/overlay` (which merges `/apps` + `/libs`) paths
internally to fetch AEM version/capability info and CFM authoring config —
`about.html`, `wcm/core/content/reference.json`,
`dam/cfm/admin/components/authoring/validations/uniquefield.json`,
`dam/cfm/admin/content/v2/createfragment/submit/_jcr_content.html` — all of
which 404'd the same way.

**Fix:** granted `anonymous` `jcr:read` on `/libs` (recursive, covers the
`/mnt/overlay` merged view too):

```bash
curl -u admin:admin \
  --data-urlencode "principalId=anonymous" \
  --data-urlencode "privilege@jcr:read=granted" \
  "http://localhost:4502/libs.modifyAce.html"
```

Verify with: `curl -u admin:admin http://localhost:4502/libs.acl.json` →
`anonymous` granted `jcr:read`.

**Scope/risk note:** `/libs` is read-only system/product code (UI shell,
component definitions, OOTB scripts) — not user content — so this is a much
lower-risk grant than #5, but still local-quickstart-only.

## Configs that were tried and turned out to be unnecessary

Left in place (harmless no-ops) but not actually part of the working
solution — safe to revert if you want a clean config:

- **`com.day.crx.security.token.impl.impl.TokenAuthenticationHandler`**:
  `token.samesite.cookie.attr` was set to `Partitioned`, following AEM 6.5
  Universal Editor guidance for a cookie-based `login-token` flow. Turned out
  this bundle version emits the literal (invalid) `SameSite=Partitioned` in
  `Set-Cookie` rather than the correct `SameSite=None; Secure; Partitioned`
  combination — browsers normalize that back to `Lax`, so it has no real
  effect. Superseded entirely by the anonymous-ACL approach in #5.
- **`com.adobe.granite.auth.querytoken.QueryTokenAuthenticationHandler`**:
  `path` was set to `/` to enable the documented `?login-token=` query-param
  bootstrap flow. Never actually exercised since #5 made it unnecessary.

## Supporting local processes (not AEM config, but required alongside it)

These aren't AEM changes, just other local services this setup depends on —
noted here for completeness since they run alongside the AEM instance:

- `universal-editor-service/universal-editor-service.cjs` — the downloaded
  local Universal Editor Service, run directly with `node` (port 8010 in
  this setup, moved off the default 8000 due to a local port conflict).
- Three `local-ssl-proxy` instances (via `npx`, not installed) providing
  HTTPS fronts, since Universal Editor requires HTTPS for all three legs:
  - `8443 → 4502` (AEM)
  - `8001 → 8010` (Universal Editor Service)
  - `8444 → 3000` (this Next.js app)
