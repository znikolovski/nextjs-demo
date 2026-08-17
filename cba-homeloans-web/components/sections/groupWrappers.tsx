import type { ReactNode } from "react";
import { aueContainer } from "@/lib/aem/editor";
import type { Section } from "@/lib/aem/types";

/**
 * Shared shell a `section-group` with layout="horizontal" renders its items
 * inside — e.g. several FeatureItemModel items share one container/row so
 * they lay out as a grid, matching components/home-loans/WhyChooseCommbank.tsx
 * and HomeLoanCards.tsx's list markup. `heading` is placed at the same DOM
 * level the hand-built components put their hardcoded page heading, so
 * layout/spacing matches exactly. Types with no entry here render standalone
 * (SectionGroup falls back to a plain stack). The `.row`/`.card-section` div
 * — the actual items-holding element — carries aueContainer("items", ...)
 * for parity with every other repeatable field in the codebase.
 */
export const sectionGroupWrappers: Partial<
  Record<Section["__typename"], (children: ReactNode, heading: ReactNode) => ReactNode>
> = {
  FeatureItemModel: (children, heading) => (
    <div className="container standard-spacing">
      {heading}
      <div className="row" {...aueContainer("items", "Items", "section-group-items")}>
        {children}
      </div>
    </div>
  ),
  ProductCardModel: (children, heading) => (
    <div className="cardsV2">
      <div className="card-module-alt">
        <div className="card-combo standard-spacing three-column">
          {heading}
          <div className="card-section" {...aueContainer("items", "Items", "section-group-items")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  ),
};
