import { aemResource, aueProp } from "@/lib/aem/editor";
import type { Section } from "@/lib/aem/types";
import { RichText } from "@/components/aem/RichText";

type FeatureItemSectionData = Extract<Section, { __typename: "FeatureItemModel" }>;

/**
 * Renders just one grid column's content — SectionGroup (and
 * app/home-loans/page.tsx directly) supply the shared container/row (see
 * groupWrappers.tsx), so several adjacent feature items lay out side-by-side.
 * The aemResource() instrumentation is applied directly on this grid-column
 * root (not a wrapping div) — flexbox/grid only sizes *direct* children of
 * `.row`, so an extra wrapper here would silently break the side-by-side
 * layout.
 */
export function FeatureItemSection({ section }: { section: FeatureItemSectionData }) {
  return (
    <div
      className="col-md-3 col-sm-6"
      {...aemResource(section._path, "component", section.title)}
    >
      <h3 {...aueProp("title", "text", "Title")}>{section.title}</h3>
      <RichText html={section.description} prop="description" label="Description" />
    </div>
  );
}
