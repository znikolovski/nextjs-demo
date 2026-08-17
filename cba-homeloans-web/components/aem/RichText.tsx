import { sanitizeAemHtml } from "@/lib/aem/sanitize";
import { aueProp } from "@/lib/aem/editor";

/**
 * Renders a CFM rich-text field's HTML — the one place `dangerouslySetInnerHTML`
 * and `sanitizeAemHtml` are allowed to appear, so every rich-text field goes
 * through sanitization structurally instead of by convention at each call site.
 * Pass `prop`/`label` to also instrument it as an editable Universal Editor
 * property; omit them for derived/composite HTML that isn't a single CFM field.
 *
 * Instrumented as `aueProp(..., "text", ...)`, not "richtext": these AEM CFM
 * fields are plain-text-backed (`multieditor` "textarea" widget) under the
 * hood, and their GraphQL `MultiFormatString.html` getter unconditionally
 * HTML-escapes-and-wraps the raw stored string — verified empirically, no
 * model/OSGi config avoids it. A "richtext" aue type gives Universal Editor's
 * canvas a bold/italic toolbar that writes literal HTML back into the field,
 * which then comes back double-escaped on next read. "text" keeps UE's
 * in-place editor plain, matching what the field actually supports.
 */
export function RichText({
  html,
  as: Tag = "div",
  className,
  prop,
  label,
}: {
  html: string | undefined | null;
  as?: "div" | "span" | "p" | "li";
  className?: string;
  prop?: string;
  label?: string;
}) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeAemHtml(html) }}
      {...(prop && label ? aueProp(prop, "text", label) : {})}
    />
  );
}
