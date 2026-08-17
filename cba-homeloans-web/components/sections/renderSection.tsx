import type { ReactNode } from "react";
import type { GroupItem, Section } from "@/lib/aem/types";
import { HeroSection } from "./HeroSection";
import { FeatureItemSection } from "./FeatureItemSection";
import { ProductCardSection } from "./ProductCardSection";
import { SectionGroup } from "./SectionGroup";

/**
 * Dispatches a section (or a section-group item) to its component by
 * __typename via a switch, so each branch narrows to the exact union member
 * with no cast — replaces the old sectionRegistry lookup table, which needed
 * an unchecked cast back to a union component type at every call site since
 * TypeScript can't re-derive the per-key narrowing through a generic lookup.
 *
 * Add a new case here (and a new component) when a new section-eligible CFM
 * is added to the `page`/`section-group` models' fragmentmodelreference
 * bracket-lists in cba-digital. Unknown/future types render nothing rather
 * than crash.
 *
 * SectionGroup.tsx calls this too (for its own items), and this file
 * references SectionGroup back — that's a circular import, but a safe one:
 * both sides only reach into the other from inside a function body (this
 * switch's case, SectionGroup's render), never at module-top-level, so it
 * doesn't matter which module finishes evaluating first.
 */
export function renderSection(section: Section | GroupItem): ReactNode {
  switch (section.__typename) {
    case "HeroBannerModel":
      return <HeroSection key={section._path} section={section} />;
    case "FeatureItemModel":
      return <FeatureItemSection key={section._path} section={section} />;
    case "ProductCardModel":
      return <ProductCardSection key={section._path} section={section} />;
    case "SectionGroupModel":
      return <SectionGroup key={section._path} section={section} />;
    default:
      return null;
  }
}
