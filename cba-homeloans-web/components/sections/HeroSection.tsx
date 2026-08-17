import { safeUrl } from "@/lib/aem/sanitize";
import { aemResource, aueProp } from "@/lib/aem/editor";
import type { Section } from "@/lib/aem/types";
import { RichText } from "@/components/aem/RichText";

type HeroBannerSection = Extract<Section, { __typename: "HeroBannerModel" }>;

/**
 * Renders one hero banner. Also used directly by app/home-loans/page.tsx
 * (via renderSection), which has its own singleton hero, not a list. aemResource()
 * is applied directly on this component's own root, not a wrapping div — see
 * FeatureItemSection/ProductCardSection for why an extra wrapper is unsafe
 * for grid-item components; kept consistent here too.
 */
export function HeroSection({ section }: { section: HeroBannerSection }) {
  return (
    <div
      className="hero-banner-module"
      {...aemResource(section._path, "component", section.title)}
    >
      <div className="banner-image">
        <img src={section.image} alt="" aria-hidden="true" />
      </div>
      <div className="banner-content-panel">
        <div className="banner-content">
          <h1 {...aueProp("title", "text", "Title")}>{section.title}</h1>
          <RichText
            className="large-content-text"
            html={section.subtitle}
            prop="subtitle"
            label="Subtitle"
          />
          <div className="cta">
            <p>
              <a
                href={safeUrl(section.primaryCtaUrl)}
                className="button_primary"
                {...aueProp("primaryCtaLabel", "text", "Primary CTA Label")}
              >
                {section.primaryCtaLabel}
              </a>
              <a
                href={safeUrl(section.secondaryCtaUrl)}
                className="button_secondary"
                {...aueProp("secondaryCtaLabel", "text", "Secondary CTA Label")}
              >
                {section.secondaryCtaLabel}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
