import { fetchPersistedQuery } from "@/lib/aem/graphql-client";
import { PersistedQueries } from "@/lib/aem/queries";
import { aemResource } from "@/lib/aem/editor";
import type { Flatten } from "@/lib/aem/flatten";
import type { GetSiteChromeQuery } from "@/lib/aem/generated";
import type { SiteChrome } from "@/lib/aem/types";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionNav } from "@/components/layout/SectionNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Shared SiteChrome fetch + header/nav/footer render used by every route
 * layout. app/home-loans/layout.tsx and app/[...path]/layout.tsx used to be
 * near-identical copies of this (differing only in whether children get an
 * extra .compare-tool wrapper and whether hlc-compare-tool.scss is loaded) —
 * exactly the kind of drift a shared component prevents; each layout now
 * only owns its own CSS import and this wrapping choice.
 *
 * Site Chrome's resource boundary wraps both SiteHeader and the honeycomb
 * div (not just the honeycomb div, with SiteHeader rendered as a sibling
 * before it) so Universal Editor's content tree nests header/nav/footer
 * under one "Site Chrome" node instead of showing nav links as scattered
 * top-level siblings.
 */
export async function SiteChromeLayout({ children }: { children: React.ReactNode }) {
  const { siteChromeList } = await fetchPersistedQuery<Flatten<GetSiteChromeQuery>>(
    PersistedQueries.getSiteChrome,
  );
  const chrome = siteChromeList.items[0] as SiteChrome;

  return (
    <div {...aemResource(chrome._path, "reference", "Site Chrome")}>
      <SiteHeader navLinks={chrome.navLinks} />
      <div className="container-fluid app honeycomb">
        <SectionNav items={chrome.sectionNavItems} />
        {children}
        <SiteFooter
          footerColumns={chrome.footerColumns}
          footerText={chrome.footerText}
          acknowledgementLinkText={chrome.acknowledgementLinkText}
          acknowledgementLinkUrl={chrome.acknowledgementLinkUrl}
        />
      </div>
    </div>
  );
}
