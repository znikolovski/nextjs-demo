import { safeUrl } from "@/lib/aem/sanitize";
import { aemResource, aueProp } from "@/lib/aem/editor";
import type { Section } from "@/lib/aem/types";
import { RichText } from "@/components/aem/RichText";

type ProductCardSectionData = Extract<Section, { __typename: "ProductCardModel" }>;

/**
 * Renders just one card — SectionGroup (and app/home-loans/page.tsx
 * directly) supply the shared cardsV2/card-section shell (see
 * groupWrappers.tsx), so several adjacent product cards lay out
 * side-by-side. The aemResource() instrumentation is applied directly on
 * this card's root (not a wrapping div) — flexbox/grid only sizes *direct*
 * children of `.card-section`, so an extra wrapper here would silently break
 * the side-by-side layout.
 */
export function ProductCardSection({ section }: { section: ProductCardSectionData }) {
  return (
    <div className="carditem" {...aemResource(section._path, "component", section.title)}>
      <div className="card compare">
        <div className="img-container">
          <img src={section.image} alt=" " aria-hidden="true" />
        </div>
        <div className="card-container">
          <div className="card-header">
            <h3>
              <p {...aueProp("title", "text", "Title")}>{section.title}</p>
            </h3>
          </div>
          <div className="card-content bullet-to-tick">
            <ul>
              {(section.bullets ?? []).map((bullet) => (
                <RichText key={bullet} as="li" html={bullet} />
              ))}
            </ul>
            <RichText
              as="div"
              className="compare-description bullet-to-tick"
              html={section.description}
              prop="description"
              label="Description"
            />
          </div>
          <div className="card-cta">
            <a aria-label="Tell me more" href={safeUrl(section.href)} className="button_primary">
              Tell me more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
