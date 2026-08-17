import { safeUrl } from "@/lib/aem/sanitize";
import { aemResource, aueContainer, aueProp } from "@/lib/aem/editor";
import type { FooterColumnData } from "@/lib/aem/types";
import { RichText } from "@/components/aem/RichText";

/**
 * Static port of commbank-footer.html + footer-column.html — classes match
 * apps/cba/commbank/modules/commbank-footer so the real compiled main.css
 * applies unchanged. Column content and acknowledgement text now come from
 * AEM (SiteChrome fragment, fetched once in app/home-loans/layout.tsx)
 * instead of a hardcoded array. footerText already arrives wrapped in AEM's
 * own <p>...</p> (rich-text field, flattened by fetchPersistedQuery) — the
 * "Traditional Owners" link is reconstructed by substituting a real <a> tag
 * for the plain acknowledgementLinkText substring within it, since embedded
 * HTML doesn't round-trip cleanly through the CFM rich-text field when
 * authored outside the RTE UI (see generate-page-content.mjs), then the
 * whole paragraph is rendered as HTML rather than escaped JSX text.
 */
export function SiteFooter({
  footerColumns,
  footerText,
  acknowledgementLinkText,
  acknowledgementLinkUrl,
}: {
  footerColumns: FooterColumnData[];
  footerText: string;
  acknowledgementLinkText: string;
  acknowledgementLinkUrl: string;
}) {
  // safeUrl() here matches every other href in this codebase — belt-and-suspenders
  // on top of sanitizeAemHtml()'s DOMPurify pass, which already strips
  // javascript:/event-handler injection from the final composed HTML regardless
  // of how it was assembled, but a raw scheme has no business reaching the
  // template literal in the first place.
  const acknowledgementHtml = footerText.replace(
    acknowledgementLinkText,
    `<a href="${safeUrl(acknowledgementLinkUrl)}">${acknowledgementLinkText}</a>`,
  );

  return (
    <footer className="hc-footer">
      <div className="container footer-nav bg-light standard-spacing bottom-divider">
        <a className="scroll-to-top" id="scrollTrigger" role="button" href="#top">
          <span className="visually-hidden">Back to top</span>
          <i className="hc-icon-arrow-up" aria-hidden="true" />
        </a>
        <div className="row" {...aueContainer("footerColumns", "Footer Columns")}>
          {footerColumns.map((col) => (
            <div
              key={col.sectionTitle}
              role="navigation"
              aria-label={col.sectionTitle}
              className="col-12 col-sm-6 col-lg-3"
              {...aemResource(col._path, "component", col.sectionTitle)}
            >
              <h4 {...aueProp("sectionTitle", "text", "Section Title")}>
                {col.sectionTitle.toUpperCase()}
              </h4>
              <ul className="nav-links" {...aueContainer("links", "Links")}>
                {col.links.map((link) => (
                  <li key={link.label} {...aemResource(link._path, "component", link.label)}>
                    <a
                      href={safeUrl(link.url)}
                      className="navlink"
                      {...aueProp("label", "text", "Label")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-copyright bg-light standard-spacing">
        <div className="row">
          <div className="col-12">
            <RichText html={acknowledgementHtml} />
            <p>&copy;{new Date().getFullYear()} Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and Australian credit licence 234945</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
