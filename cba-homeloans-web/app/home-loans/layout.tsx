import "@/styles/aem/main.css";
import { SiteChromeLayout } from "@/components/layout/SiteChromeLayout";

export default function HomeLoansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteChromeLayout>{children}</SiteChromeLayout>;
}
