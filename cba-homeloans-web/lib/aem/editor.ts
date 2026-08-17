/**
 * Universal Editor DOM instrumentation helpers — see
 * https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/developing/universal-editor/react-app-editing/instrument-to-edit-content
 *
 * Only spreads attributes when NEXT_PUBLIC_AEM_EDITOR_ENABLED is set, so
 * production markup stays free of data-aue-* noise.
 */

const editorEnabled = process.env.NEXT_PUBLIC_AEM_EDITOR_ENABLED === "true";

type AueType = "text" | "richtext" | "component" | "reference" | "container";

/** Marks an element as the root of an independently-editable AEM fragment. */
export function aemResource(path: string | undefined, type: AueType, label: string) {
  if (!editorEnabled || !path) return {};
  return {
    "data-aue-resource": `urn:aemconnection:${path}/jcr:content/data/master`,
    "data-aue-type": type,
    "data-aue-label": label,
  };
}

/**
 * Marks an element as an editable property of the nearest aemResource() ancestor.
 * Always "text", never "richtext" — see the comment on components/aem/RichText.tsx
 * for why these AEM CFM fields can't safely round-trip a rich-text toolbar's HTML.
 */
export function aueProp(prop: string, type: "text", label: string) {
  if (!editorEnabled) return {};
  return {
    "data-aue-prop": prop,
    "data-aue-type": type,
    "data-aue-label": label,
  };
}

/**
 * Marks an element as the container for a repeatable collection field.
 * `filter` (optional) references a component-filters.json id, restricting
 * which components the canvas's "+" button offers for this container — see
 * public/static/component-filters.json. Omit it for containers whose item
 * types aren't in component-definition.json yet (e.g. nav links, footer
 * columns): the container still works for reordering/removing existing
 * items, it just won't offer inline "add new" until a filter/definition
 * exists for those types too.
 */
export function aueContainer(prop: string, label: string, filter?: string) {
  if (!editorEnabled) return {};
  return {
    "data-aue-prop": prop,
    "data-aue-type": "container",
    "data-aue-label": label,
    ...(filter ? { "data-aue-filter": filter } : {}),
  };
}
