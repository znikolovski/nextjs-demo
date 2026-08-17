import { fetchPersistedQuery } from "@/lib/aem/graphql-client";
import { PersistedQueries } from "@/lib/aem/queries";
import { aemResource } from "@/lib/aem/editor";
import type { Flatten } from "@/lib/aem/flatten";
import type { GetHomeLoansPageQuery } from "@/lib/aem/generated";
import type { HomeLoansPage as HomeLoansPageData } from "@/lib/aem/types";
import { renderSection } from "@/components/sections/renderSection";
import { sectionGroupWrappers } from "@/components/sections/groupWrappers";

export const dynamic = "force-dynamic";

export default async function HomeLoansPage() {
  const { homeLoansPageList } = await fetchPersistedQuery<Flatten<GetHomeLoansPageQuery>>(
    PersistedQueries.getHomeLoansPage,
  );
  const page = homeLoansPageList.items[0] as HomeLoansPageData;

  // Same components/sections/* pieces the generic Page/Section model uses
  // (see app/[...path]/page.tsx) — this page just supplies its own hardcoded
  // headings and grouping (hero, then feature items, then product cards)
  // instead of an authored Page's ordered `sections` list, since it isn't
  // (yet) migrated onto that model. No components/home-loans/* left to
  // duplicate this markup.
  const whyChooseItems = page.whyChooseItems.map((item) =>
    renderSection({ ...item, __typename: "FeatureItemModel" as const }),
  );
  const productCards = page.productCards.map((card) =>
    renderSection({ ...card, __typename: "ProductCardModel" as const }),
  );

  return (
    <main {...aemResource(page._path, "reference", "Home Loans Page")}>
      {renderSection({ ...page.hero, __typename: "HeroBannerModel" as const })}
      {sectionGroupWrappers.FeatureItemModel!(
        whyChooseItems,
        <div className="header-section">
          <h2>Why choose CommBank?</h2>
        </div>,
      )}
      {sectionGroupWrappers.ProductCardModel!(
        productCards,
        <div className="header-section">
          <h2>Choose a home loan that&rsquo;s right for you</h2>
        </div>,
      )}
    </main>
  );
}
