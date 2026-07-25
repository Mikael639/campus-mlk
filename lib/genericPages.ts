import { sanityFetch } from "@/lib/sanity/live";
import { GENERIC_PAGE_QUERY, GENERIC_PAGE_SLUGS_QUERY } from "@/lib/sanity/queries";
import type { SanityImage } from "@/lib/formations";

type PortableTextBlock = { _type: "block"; [key: string]: unknown };
type PortableTextImage = SanityImage & { _type: "image"; _key: string };

export type GenericPage = {
  title: string;
  eyebrow?: string;
  intro?: string;
  body: (PortableTextBlock | PortableTextImage)[];
};

export async function getGenericPage(
  slug: string,
): Promise<GenericPage | undefined> {
  const { data } = await sanityFetch({
    query: GENERIC_PAGE_QUERY,
    params: { slug },
  });
  return (data as GenericPage | null) ?? undefined;
}

export async function getGenericPageSlugs(): Promise<string[]> {
  const { data } = await sanityFetch({
    query: GENERIC_PAGE_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return (data ?? []) as string[];
}
