import { sanityFetch } from "@/lib/sanity/live";
import {
  HOME_PAGE_QUERY,
  FORMATIONS_PAGE_QUERY,
  CANDIDATER_PAGE_QUERY,
  ENTREPRISES_PAGE_QUERY,
  FORMATEUR_PAGE_QUERY,
  FAQ_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
} from "@/lib/sanity/queries";
import type { SanityImage } from "@/lib/formations";

/* Contenus éditoriaux des pages, édités dans Sanity Studio. */

export type HomePage = {
  heroBadge: string;
  heroTitleStart: string;
  heroWordLogo: string;
  heroTitleMiddle: string;
  heroTitleAccent: string;
  heroText: string;
  heroCta1: string;
  heroCta2: string;
  heroImage?: SanityImage;
  stats: { _key: string; n: string; label: string }[];
  videoTitle: string;
  videoText: string;
  videoLabel: string;
  formationsTitle: string;
  pourquoiBadge: string;
  pourquoiTitle: string;
  engagements: { _key: string; title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export type FormationsPage = {
  title: string;
  intro1: string;
  intro2: string;
  highlight: string;
  ctaTitle: string;
  ctaText: string;
};

export type CandidaterPage = {
  title: string;
  intro1: string;
  intro2: string;
  conditionsTitle: string;
  conditionsText: string;
  conditionsItems: string[];
  selectionTitle: string;
  selectionSteps: string[];
  goodToKnow: string;
  formTitle: string;
  formText: string;
};

export type EntreprisesPage = {
  title: string;
  intro: string;
  avantagesIntro: string;
  avantages: string[];
  avantagesCard: string;
  accTitle: string;
  accText: string;
  accItems: string[];
  formTitle: string;
  formText: string;
};

export type FormateurPage = {
  title: string;
  intro: string;
  profilTitle: string;
  profilText: string;
  profilItems: string[];
  modTitle: string;
  modText: string;
  statut: string;
  remuneration: string;
  lieu: string;
  acces: string;
  domaines: string[];
  formTitle: string;
  formText: string;
};

export type FaqPage = {
  title: string;
  intro: string;
  ctaTitle: string;
  ctaText: string;
};

export type ContactPage = {
  title: string;
  intro: string;
};

export async function getHomePage(): Promise<HomePage> {
  const { data } = await sanityFetch({ query: HOME_PAGE_QUERY });
  return data as HomePage;
}

export async function getFormationsPage(): Promise<FormationsPage> {
  const { data } = await sanityFetch({ query: FORMATIONS_PAGE_QUERY });
  return data as FormationsPage;
}

export async function getCandidaterPage(): Promise<CandidaterPage> {
  const { data } = await sanityFetch({ query: CANDIDATER_PAGE_QUERY });
  return data as CandidaterPage;
}

export async function getEntreprisesPage(): Promise<EntreprisesPage> {
  const { data } = await sanityFetch({ query: ENTREPRISES_PAGE_QUERY });
  return data as EntreprisesPage;
}

export async function getFormateurPage(): Promise<FormateurPage> {
  const { data } = await sanityFetch({ query: FORMATEUR_PAGE_QUERY });
  return data as FormateurPage;
}

export async function getFaqPage(): Promise<FaqPage> {
  const { data } = await sanityFetch({ query: FAQ_PAGE_QUERY });
  return data as FaqPage;
}

export async function getContactPage(): Promise<ContactPage> {
  const { data } = await sanityFetch({ query: CONTACT_PAGE_QUERY });
  return data as ContactPage;
}
