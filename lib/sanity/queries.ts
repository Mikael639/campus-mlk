import { defineQuery } from "next-sanity";

const imageFragment = /* groq */ `
  asset->{ _id, url, metadata { lqip, dimensions } },
  hotspot,
  crop,
  alt
`;

const formationFields = /* groq */ `
  "id": _id,
  "slug": slug.current,
  cat,
  title,
  "ph": short,
  color,
  short,
  tagline,
  level,
  levelEq,
  cert,
  presentation,
  skills,
  debouches,
  image { ${imageFragment} }
`;

export const FORMATIONS_QUERY = defineQuery(`
  *[_type == "formation"] | order(order asc) { ${formationFields} }
`);

export const FORMATION_BY_SLUG_QUERY = defineQuery(`
  *[_type == "formation" && slug.current == $slug][0] { ${formationFields} }
`);

export const FORMATION_SLUGS_QUERY = defineQuery(`
  *[_type == "formation" && defined(slug.current)].slug.current
`);

export const FAQ_GROUPS_QUERY = defineQuery(`
  *[_type == "faqGroup"] | order(order asc) {
    title,
    items[] { q, a }
  }
`);

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] { address, email, transport }
`);

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0] {
    heroBadge, heroTitleStart, heroWordLogo, heroTitleMiddle, heroTitleAccent,
    heroText, heroCta1, heroCta2,
    heroImage { ${imageFragment} },
    stats[] { _key, n, label },
    videoTitle, videoLabel,
    formationsTitle,
    pourquoiTitle, pourquoiText, pourquoiItems, pourquoiWide,
    ctaTitle, ctaText, ctaButton
  }
`);

export const FORMATIONS_PAGE_QUERY = defineQuery(`
  *[_id == "formationsPage"][0] { title, intro1, intro2, highlight, ctaTitle, ctaText }
`);

export const CANDIDATER_PAGE_QUERY = defineQuery(`
  *[_id == "candidaterPage"][0] {
    title, intro1, intro2,
    conditionsTitle, conditionsText, conditionsItems,
    selectionTitle, selectionSteps,
    goodToKnow, formTitle, formText
  }
`);

export const ENTREPRISES_PAGE_QUERY = defineQuery(`
  *[_id == "entreprisesPage"][0] {
    title, intro, avantagesIntro, avantages, avantagesCard,
    accTitle, accText, accItems, formTitle, formText
  }
`);

export const FORMATEUR_PAGE_QUERY = defineQuery(`
  *[_id == "formateurPage"][0] {
    title, intro, profilTitle, profilText, profilItems,
    modTitle, modText, statut, remuneration, lieu, acces,
    domaines, formTitle, formText
  }
`);

export const FAQ_PAGE_QUERY = defineQuery(`
  *[_id == "faqPage"][0] { title, intro, ctaTitle, ctaText }
`);

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_id == "contactPage"][0] { title, intro }
`);
