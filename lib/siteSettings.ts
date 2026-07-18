import { sanityFetch } from "@/lib/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";

export type SiteSettings = {
  address: string;
  email: string;
  transport: string;
};

const fallback: SiteSettings = {
  address: "1 rue Martin Luther King, 94000 Créteil",
  email: "campus@mlkgrandparis.com",
  transport: "Tramway T9 (Créteil-Préfecture) · RER D (Créteil-Pompadour)",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
  return (data as SiteSettings | null) ?? fallback;
}
