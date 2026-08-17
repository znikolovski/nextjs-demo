import Link from "next/link";
import { aemResource, aueContainer, aueProp } from "@/lib/aem/editor";
import { safeUrl } from "@/lib/aem/sanitize";
import type { NavLink } from "@/lib/aem/types";

/**
 * Static markup port of aem.commbank-lego's commbank-header.html (commbanknav
 * variant) — classes match apps/cba/commbank/modules/commbank-header so the
 * real compiled main.css (styles/aem/main.css) applies unchanged. The
 * search/hamburger/logon overlays from the source component are display:none
 * until their jQuery is wired up, so they're intentionally left out here —
 * only the always-visible top bar is ported. Nav links now come from AEM
 * (SiteChrome fragment, fetched once in app/home-loans/layout.tsx) instead of
 * a hardcoded array.
 */
export function SiteHeader({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <div className="commbank-header">
      <div className="commbank-header-module">
        <ul className="commbank-list" {...aueContainer("navLinks", "Nav Links")}>
          <a role="button" href="#" aria-label="main menu" className="hamburger-menu-icon">
            <li className="icon-menu" role="presentation" />
          </a>
          <li className="commbank-logo">
            <Link href="/home-loans" data-tracker-type="header-logo">
              <img src="https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg" alt="CommBank homepage" />
            </Link>
          </li>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={link.label === "Home loans" ? "highlight" : ""}
              {...aemResource(link._path, "component", link.label)}
            >
              <a
                href={safeUrl(link.url)}
                data-tracker-type="header-menu"
                {...aueProp("label", "text", "Label")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="commbank-header-search-wrapper">
          <li className="commbank-header-search-box">
            <a href="#" role="button" aria-label="search" className="commbank-header-search-input">
              <span className="icon-search" role="presentation" />
            </a>
          </li>
          <li>
            <a href="#" role="button" className="commbank-header-login" aria-label="Login">
              <span className="icon-padlock" role="presentation" />
              <span className="login">Log on</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
