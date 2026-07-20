import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site MLK Campus.",
};

/*
  Contenu fixe (non géré dans Sanity) — informations légales de l'éditeur.
  Champs "À compléter" à renseigner avant mise en production publique.
*/
const legal = {
  raisonSociale: "MLK Formation",
  formeJuridique: "SAS",
  capitalSocial: "À compléter",
  siret: "851 941 542 00025",
  ape: "85.59B",
  rcs: "À compléter",
  siegeSocial: "1 rue Martin Luther King, 94000 Créteil",
  directeurPublication: "À compléter",
  emailContact: "campus@mlkgrandparis.com",
  hebergeurNom: "Vercel Inc.",
  hebergeurAdresse: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
  hebergeurSite: "https://vercel.com",
  proprieteIntellectuelle:
    "L'ensemble des éléments de ce site (textes, images, logos, vidéos) est la propriété exclusive de MLK Campus, sauf mention contraire. Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation préalable est interdite.",
  donneesPersonnelles:
    "Les informations recueillies via les formulaires de ce site sont destinées à MLK Campus et font l'objet d'un traitement pour répondre à votre demande (candidature, recrutement, contact). Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données, à exercer par email à l'adresse de contact.",
  cookies: "Ce site n'utilise pas de cookies de suivi ou de mesure d'audience tiers.",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "#2b2b2b",
      }}
    >
      <span style={{ fontWeight: 600, color: "#161616", flex: "none" }}>
        {label} :
      </span>
      <span>{value}</span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 className="nr" style={{ fontSize: 22, margin: "0 0 16px" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div>
      <div
        className="wrap"
        style={{
          paddingTop: 60,
          paddingBottom: 30,
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Informations légales
        </div>
        <h1
          className="nr"
          style={{ fontSize: 42, lineHeight: 1.06, margin: "0 0 40px" }}
        >
          Mentions légales
        </h1>

        <Section title="Éditeur du site">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Row label="Raison sociale" value={legal.raisonSociale} />
            <Row label="Forme juridique" value={legal.formeJuridique} />
            <Row label="Capital social" value={legal.capitalSocial} />
            <Row label="SIRET" value={legal.siret} />
            <Row label="Code APE" value={legal.ape} />
            <Row label="RCS" value={legal.rcs} />
            <Row label="Siège social" value={legal.siegeSocial} />
            <Row
              label="Directeur de la publication"
              value={legal.directeurPublication}
            />
            <Row label="Contact" value={legal.emailContact} />
          </div>
        </Section>

        <Section title="Hébergement">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Row label="Hébergeur" value={legal.hebergeurNom} />
            <Row label="Adresse" value={legal.hebergeurAdresse} />
            <Row label="Site web" value={legal.hebergeurSite} />
          </div>
        </Section>

        <Section title="Propriété intellectuelle">
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#3d3d3d" }}>
            {legal.proprieteIntellectuelle}
          </p>
        </Section>

        <Section title="Données personnelles">
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#3d3d3d" }}>
            {legal.donneesPersonnelles}
          </p>
        </Section>

        <Section title="Cookies">
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#3d3d3d" }}>
            {legal.cookies}
          </p>
        </Section>
      </div>
    </div>
  );
}
