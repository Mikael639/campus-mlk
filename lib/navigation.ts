import { sanityFetch } from "@/lib/sanity/live";
import { NAVIGATION_QUERY } from "@/lib/sanity/queries";

export type NavItem = { label: string; href: string };

export type Navigation = {
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
};

const fallback: Navigation = {
  items: [
    { label: "Nos formations", href: "/formations" },
    { label: "Candidater", href: "/candidater" },
    { label: "Entreprises", href: "/entreprises" },
    { label: "Devenir formateur", href: "/devenir-formateur" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLabel: "Candidater",
  ctaHref: "/candidater",
};

export async function getNavigation(): Promise<Navigation> {
  const { data } = await sanityFetch({ query: NAVIGATION_QUERY });
  const nav = data as Navigation | null;
  if (!nav) return fallback;
  return {
    items: nav.items ?? fallback.items,
    ctaLabel: nav.ctaLabel ?? fallback.ctaLabel,
    ctaHref: nav.ctaHref ?? fallback.ctaHref,
  };
}
