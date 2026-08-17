import "@/styles/aem/main.css";
import { SiteChromeLayout } from "@/components/layout/SiteChromeLayout";

// Same SiteChrome singleton app/home-loans/layout.tsx uses — it's the only
// chrome fragment that exists today. If/when generic Pages need chrome that
// isn't home-loans-branded, this is where that would branch (e.g. per-Page
// chrome reference), not a change to any individual page route.
export default function DynamicPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteChromeLayout>{children}</SiteChromeLayout>;
}
