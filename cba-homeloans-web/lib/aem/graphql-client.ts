/**
 * Server-only fetch wrapper for AEM GraphQL persisted queries.
 * Never import this from a Client Component — it carries the AEM service token.
 *
 * API shape verified against a live local AEM instance (see
 * cba-digital/aem.commbank-lego/ui.content/.../graphql-persisted-queries/README.md):
 *   - Persisted queries execute via GET /graphql/execute.json/<config>/<name>
 *     (NOT the ad-hoc /content/cq:graphql/<config>/endpoint.json POST — that endpoint
 *     is for raw, non-persisted queries only).
 *   - Query names are flat (config/name) — nested paths like "commbank/home-loans/x"
 *     are rejected by the persist API ("does not denote a Persistent Query Path").
 *   - Variables are NOT passed as a JSON body or query string — AEM's execute.json
 *     takes them as semicolon-delimited matrix parameters appended to the query name,
 *     e.g. /graphql/execute.json/<config>/<name>;slug=variable-rate
 */

const AEM_GRAPHQL_CONFIG_NAME = process.env.AEM_GRAPHQL_CONFIG_NAME;
const AEM_BASE_URL = process.env.AEM_BASE_URL;
const AEM_SERVICE_TOKEN = process.env.AEM_SERVICE_TOKEN;
const AEM_USER = process.env.AEM_USER;
const AEM_PASSWORD = process.env.AEM_PASSWORD;

/**
 * Bearer token (AEM_SERVICE_TOKEN) is for real deployments; Basic Auth
 * (AEM_USER/AEM_PASSWORD) is for local dev against a local AEM instance's
 * default admin/admin credentials — verified against a real local AEM 6.5.25
 * instance, which returns 401 on the GraphQL execute endpoint without auth.
 */
function aemAuthHeaders(): Record<string, string> | undefined {
  if (AEM_SERVICE_TOKEN) {
    return { Authorization: `Bearer ${AEM_SERVICE_TOKEN}` };
  }
  if (AEM_USER && AEM_PASSWORD) {
    const encoded = Buffer.from(`${AEM_USER}:${AEM_PASSWORD}`).toString("base64");
    return { Authorization: `Basic ${encoded}` };
  }
  return undefined;
}

export class AemGraphQLError extends Error {
  constructor(
    message: string,
    public status: number,
    public queryName: string,
  ) {
    super(message);
    this.name = "AemGraphQLError";
  }
}

export async function fetchPersistedQuery<T>(
  queryName: string,
  params?: Record<string, string>,
): Promise<T> {
  if (!AEM_BASE_URL || !AEM_GRAPHQL_CONFIG_NAME) {
    throw new Error("AEM_BASE_URL / AEM_GRAPHQL_CONFIG_NAME is not configured");
  }

  // AEM's matrix-param path parsing doesn't decode "%2F" back to a literal
  // "/" the way it does for other escaped characters — verified directly
  // against a live instance: an encoded slash in a value silently fails to
  // match (returns an empty result), while a raw "/" matches correctly. Every
  // existing variable (e.g. slug) never contained a "/", so this never came
  // up before the "path" variable did.
  const matrixParams = params
    ? Object.entries(params)
        .map(([key, value]) => `;${key}=${encodeURIComponent(value).replace(/%2F/g, "/")}`)
        .join("")
    : "";

  const url = `${AEM_BASE_URL}/graphql/execute.json/${AEM_GRAPHQL_CONFIG_NAME}/${queryName}${matrixParams}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: aemAuthHeaders(),
  });

  if (!res.ok) {
    throw new AemGraphQLError(
      `AEM persisted query request failed (${res.status})`,
      res.status,
      queryName,
    );
  }

  const json = await res.json();
  if (json.errors) {
    throw new AemGraphQLError(
      `AEM GraphQL errors: ${JSON.stringify(json.errors)}`,
      res.status,
      queryName,
    );
  }
  return flattenMultiFormatStrings(json.data) as T;
}

/**
 * AEM exposes CFM rich-text (multieditor) fields as a `MultiFormatString` GraphQL
 * type — `{ html, plaintext, markdown }` — not a plain string, so every rich-text
 * field in a persisted query must be queried as `fieldName { html }`. This walks the
 * response and flattens any `{ html: "..." }` shape back to a plain string, so
 * component code (HlcCompareCard, HlcCheckbox, HlcToggles) can keep treating these
 * fields as plain strings.
 */
function flattenMultiFormatStrings(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(flattenMultiFormatStrings);
  }
  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (
      entries.length === 1 &&
      entries[0][0] === "html" &&
      (typeof entries[0][1] === "string" || entries[0][1] === null)
    ) {
      return entries[0][1] ?? "";
    }
    return Object.fromEntries(
      entries.map(([key, val]) => [key, flattenMultiFormatStrings(val)]),
    );
  }
  return value;
}

/**
 * Fetches a plain DAM JSON asset (not a GraphQL persisted query) — used for
 * /content/dam/admin/comparetool/hlc-rates.json, the same asset the legacy
 * home-loan-toggle.ts fetches client-side. Kept server-side here so the rate
 * table is present on first SSR paint rather than a client-side waterfall.
 */
export async function fetchDamJson<T>(damPath: string): Promise<T> {
  if (!AEM_BASE_URL) {
    throw new Error("AEM_BASE_URL is not configured");
  }
  const res = await fetch(`${AEM_BASE_URL}${damPath}`, {
    cache: "no-store",
    headers: aemAuthHeaders(),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch DAM asset ${damPath} (${res.status})`);
  }
  return res.json();
}
