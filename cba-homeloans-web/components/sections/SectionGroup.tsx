import { aemResource, aueContainer } from "@/lib/aem/editor";
import type { SectionGroup as SectionGroupData } from "@/lib/aem/types";
import { renderSection } from "./renderSection";
import { sectionGroupWrappers } from "./groupWrappers";

/**
 * Renders an explicit `section-group` fragment: an author-curated, same-kind
 * run of items (e.g. several Feature Items) sharing one layout, replacing
 * the old "infer grouping from array adjacency" heuristic in SectionRenderer.
 * `layout: "horizontal"` reuses the same shared shells (row / card grid) that
 * SectionRenderer used to apply automatically; "vertical" just stacks items
 * with no shared grid shell.
 *
 * Items render via their own components directly (no extra wrapping div) —
 * each already applies its own aemResource() on its grid-item root, and an
 * extra wrapper here would break the row's/card-section's direct-child
 * flex/grid sizing, same as in SectionRenderer.
 */
export function SectionGroup({ section }: { section: SectionGroupData }) {
  // A freshly-created (still-empty) Section Group can have items: null before
  // an author adds any — same defensive guard as ProductCardSection.bullets.
  const groupItems = section.items ?? [];
  const items = groupItems.map(renderSection);

  const heading = section.heading ? (
    <div className="header-section">
      <h2>{section.heading}</h2>
    </div>
  ) : null;

  const wrap =
    section.layout === "horizontal" ? sectionGroupWrappers[groupItems[0]?.__typename] : undefined;

  return (
    <div {...aemResource(section._path, "component", section.heading ?? "Section Group")}>
      {wrap ? (
        wrap(items, heading)
      ) : (
        <>
          {heading}
          <div {...aueContainer("items", "Items", "section-group-items")}>{items}</div>
        </>
      )}
    </div>
  );
}
