import { sanityFetch } from "@/lib/sanity/live";
import {
  FORMATIONS_QUERY,
  FORMATION_BY_SLUG_QUERY,
  FORMATION_SLUGS_QUERY,
} from "@/lib/sanity/queries";

export type SanityImage = {
  asset?: {
    _id: string;
    url: string;
    metadata?: { lqip?: string; dimensions?: { width: number; height: number } };
  } | null;
  hotspot?: unknown;
  crop?: unknown;
  alt?: string | null;
} | null;

export type Formation = {
  id: string;
  slug: string;
  cat: string;
  title: string;
  ph: string;
  color: string;
  short: string;
  tagline: string;
  level: string;
  levelEq: string;
  cert: string;
  presentation: string;
  skills: string[];
  debouches: string[];
  image?: SanityImage;
};

export const DUREE = "12 mois";
export const RYTHME = "2 jours au campus / 3 jours en entreprise";
export const MODALITES = "Présentiel";

export async function getFormations(): Promise<Formation[]> {
  const { data } = await sanityFetch({ query: FORMATIONS_QUERY });
  return (data ?? []) as Formation[];
}

export async function getFormation(
  slug: string,
): Promise<Formation | undefined> {
  const { data } = await sanityFetch({
    query: FORMATION_BY_SLUG_QUERY,
    params: { slug },
  });
  return (data as Formation | null) ?? undefined;
}

export async function getFormationSlugs(): Promise<string[]> {
  const { data } = await sanityFetch({
    query: FORMATION_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return (data ?? []) as string[];
}
