import { sanityFetch } from "@/lib/sanity/live";
import { FAQ_GROUPS_QUERY } from "@/lib/sanity/queries";

export type FaqGroup = {
  title: string;
  items: { q: string; a: string }[];
};

export async function getFaqGroups(): Promise<FaqGroup[]> {
  const { data } = await sanityFetch({ query: FAQ_GROUPS_QUERY });
  return (data ?? []) as FaqGroup[];
}
