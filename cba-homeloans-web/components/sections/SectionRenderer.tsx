import { aueContainer } from "@/lib/aem/editor";
import type { Section } from "@/lib/aem/types";
import { renderSection } from "./renderSection";

/**
 * Renders a Page's ordered, heterogeneous `sections` list. Reordering rows
 * in the CFM console's `sections` multifield changes this array's order —
 * that's the entire mechanism behind structural page editing, no separate
 * "order" field or code change involved.
 *
 * Grouping same-kind items into a shared row/grid is an explicit authoring
 * choice (a `section-group` fragment — see SectionGroup.tsx), not inferred
 * here from array adjacency, so this only dispatches one section at a time.
 *
 * Each section component applies its own aemResource() directly on its own
 * root element rather than being wrapped in one here — some section roots
 * (e.g. FeatureItemSection's .col-md-3) are flex/grid items whose sizing
 * only works as a *direct* child of their parent row, so an extra wrapper
 * div here would silently break that layout.
 */
export function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <div {...aueContainer("sections", "Page Sections", "page-sections")}>
      {/* A freshly-created (still-empty) Page can have sections: null before
          an author adds any. */}
      {(sections ?? []).map(renderSection)}
    </div>
  );
}
