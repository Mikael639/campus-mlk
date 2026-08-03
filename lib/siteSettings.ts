import { sanityFetch } from "@/lib/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";

export type Socials = {
  facebook?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
};

export type SiteSettings = {
  address: string;
  email: string;
  transport: string;
  footerText?: string | null;
  socials?: Socials | null;
};

const fallback: SiteSettings = {
  address: "1 rue Martin Luther King, 94000 Créteil",
  email: "campus@mlkgrandparis.com",
  transport: "Tramway T9 (Créteil-Préfecture) · RER D (Créteil-Pompadour)",
  footerText:
    "Centre de Formation d'Apprentis à Créteil (94). Des formations qualifiantes en apprentissage, du niveau 3 au niveau 5.",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
  return (data as SiteSettings | null) ?? fallback;
}
