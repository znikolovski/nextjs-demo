import type { MetadataRoute } from "next";
import { fetchPersistedQuery } from "@/lib/aem/graphql-client";
import { PersistedQueries } from "@/lib/aem/queries";
import type { Flatten } from "@/lib/aem/flatten";
import type { ListPagesQuery } from "@/lib/aem/generated";

// AEM's own sitemap generator only scans cq:Page/dam:Asset nodes, so it has
// no visibility into CFM-based Page fragments — this app owns the sitemap
// entries for its own /pages/* routes instead.
export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { pageList } = await fetchPersistedQuery<Flatten<ListPagesQuery>>(
    PersistedQueries.listPages,
  );

  return pageList.items.map((page) => ({
    url: `${SITE_URL}/${page.path}`,
  }));
}
