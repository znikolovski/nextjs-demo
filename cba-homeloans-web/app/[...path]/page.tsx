import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchPersistedQuery } from "@/lib/aem/graphql-client";
import { PersistedQueries } from "@/lib/aem/queries";
import type { Flatten } from "@/lib/aem/flatten";
import type { GetPageByPathQuery } from "@/lib/aem/generated";
import type { Page } from "@/lib/aem/types";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { aemResource } from "@/lib/aem/editor";

// No generateStaticParams: a newly-authored Page CF is live on the next
// request with no Next.js build/deploy, matching every other route here.
export const dynamic = "force-dynamic";

async function getPage(pathSegments: string[]): Promise<Page | undefined> {
  const path = pathSegments.join("/");
  const { pageList } = await fetchPersistedQuery<Flatten<GetPageByPathQuery>>(
    PersistedQueries.getPageByPath,
    { path },
  );
  return pageList.items[0] as Page | undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>;
}): Promise<Metadata> {
  const { path } = await params;
  const page = await getPage(path);
  if (!page) return {};
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription,
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path } = await params;
  const page = await getPage(path);
  if (!page) notFound();

  return (
    <main {...aemResource(page._path, "reference", page.title)}>
      <SectionRenderer sections={page.sections} />
    </main>
  );
}
