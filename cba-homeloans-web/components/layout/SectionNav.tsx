import { aemResource, aueContainer, aueProp } from "@/lib/aem/editor";
import { safeUrl } from "@/lib/aem/sanitize";
import type { SectionNavItem } from "@/lib/aem/types";

/**
 * Static port of section-navigation.html for the home-loans section — the
 * secondary pictogram nav shown on commbank.com.au/home-loans.html. Items now
 * come from AEM (SiteChrome fragment, fetched once in
 * app/home-loans/layout.tsx) instead of a hardcoded array.
 */
export function SectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav className="section-navigation-module">
      <ul className="hyperlink-list" {...aueContainer("sectionNavItems", "Section Nav Items")}>
        {items.map((item) => (
          <li key={item.label} {...aemResource(item._path, "component", item.label)}>
            <a title={item.label} href={safeUrl(item.url)}>
              <img src={item.image} alt=" " aria-hidden="true" />
              <span {...aueProp("label", "text", "Label")}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
