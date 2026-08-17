import DOMPurify from "isomorphic-dompurify";

/**
 * Equivalent of AEM HTL's `@ context='html'` output context (Sightly's built-in
 * XSS protection) for rich-text fields authored via the CFM multieditor.
 */
export function sanitizeAemHtml(html: string | undefined | null): string {
  if (!html) return "";
  return DOMPurify.sanitize(html);
}

/**
 * Guards against a CFM-authored URL field containing a javascript:/data: scheme
 * before it reaches an href — AEM's Sightly context='uri' does the same check.
 */
export function safeUrl(url: string | undefined | null): string {
  if (!url) return "#";
  const trimmed = url.trim();
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("#") ||
    /^(https?:|mailto:|tel:)/i.test(trimmed)
  ) {
    return trimmed;
  }
  return "#";
}
