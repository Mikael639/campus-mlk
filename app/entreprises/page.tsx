import type { Metadata } from "next";
import { EntreprisesForm } from "@/components/forms";
import { getFormations } from "@/lib/formations";
import { getEntreprisesPage } from "@/lib/pages";
import BrandStripe from "@/components/BrandStripe";
import Logomark from "@/components/Logomark";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Entreprises",
  description:
    "Recrutez un apprenti MLK Campus : avantages du recrutement en apprentissage, accompagnement et formulaire de contact.",
};

/* Couleurs des puces numérotées dérivées de la charte */
const ACCENT_COLORS = [
  "#8d7cff", // Iris
  "#ba7eee", // Lilas
  "#4ec5a5", // Turquoise
  "#d1ff5e", // Lime
  "#1b5cff", // Bleu électrique
  "#e84d72", // Framboise
];

export default async function EntreprisesPage() {
  const [formations, page] = await Promise.all([
    getFormations(),
    getEntreprisesPage(),
  ]);

  return (
    <div>
      {/* En-tête */}
      <ScrollReveal direction="up" distance={20}>
        <div
          className="wrap"
          style={{
            paddingTop: 60,
            paddingBottom: 24,
            maxWidth: 840,
            margin: "0 auto",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Entreprises
          </div>
          <h1
            className="nr"
            style={{ fontSize: 46, lineHeight: 1.06, margin: "0 0 22px" }}
          >
            {page.title}
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
            {page.intro}
          </p>
        </div>
      </ScrollReveal>

      {/* Avantages du recrutement en apprentissage */}
      <div className="wrap" style={{ paddingTop: 28, paddingBottom: 20 }}>
        <ScrollReveal direction="up" distance={16}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Les avantages du recrutement en apprentissage
          </div>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "#3d3d3d",
              maxWidth: 780,
              margin: "0 0 28px",
            }}
          >
            {page.avantagesIntro}
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="rg1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 18,
          }}
        >
          {page.avantages.map((a, i) => (
            <StaggerItem key={a}>
              <div
                className="card lift"
                style={{
                  padding: "26px 26px",
                  height: "100%",
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="nr"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: `${ACCENT_COLORS[i % ACCENT_COLORS.length]}18`,
                    color: ACCENT_COLORS[i % ACCENT_COLORS.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "#2b2b2b" }}>
                  {a}
                </div>
              </div>
            </StaggerItem>
          ))}

          {/* Carte sombre récapitulative */}
          <StaggerItem>
            <div
              className="lift"
              style={{
                padding: "26px 26px",
                background: "#1a1a1a",
                color: "#f9f9f9",
                borderRadius: 20,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div style={{ marginBottom: 14 }}>
                <Logomark size={32} variant="blanc" />
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(249,249,249,0.92)" }}>
                {page.avantagesCard}
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>

      {/* Notre accompagnement — Bandeau sombre pleine largeur */}
      <ScrollReveal direction="up" distance={30}>
        <div style={{ marginTop: 60 }}>
          <BrandStripe />
          <div style={{ background: "#1a1a1a", color: "#f9f9f9" }}>
            <div
              className="wrap rg1"
              style={{
                paddingTop: 56,
                paddingBottom: 56,
                display: "grid",
                gridTemplateColumns: ".9fr 1.1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(255,255,255,.3)",
                    borderRadius: 30,
                    padding: "6px 16px",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Partenariat
                </span>
                <h2
                  className="nr"
                  style={{ fontSize: 34, lineHeight: 1.12, margin: "0 0 16px" }}
                >
                  {page.accTitle}
                </h2>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: "rgba(249,249,249,0.78)",
                    margin: 0,
                  }}
                >
                  {page.accText}
                </p>
              </div>

              <StaggerGroup
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {page.accItems.map((a, i) => (
                  <StaggerItem key={a}>
                    <div
                      className="lift"
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "center",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "14px 18px",
                        borderRadius: 14,
                        fontSize: 14,
                        lineHeight: 1.45,
                      }}
                    >
                      <span
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          background: ACCENT_COLORS[i % ACCENT_COLORS.length],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: `0 8px 18px -9px ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`,
                        }}
                      >
                        <Logomark size={13} variant="blanc" />
                      </span>
                      <span>{a}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
          <BrandStripe />
        </div>
      </ScrollReveal>

      {/* Formulaire Entreprises */}
      <ScrollReveal direction="up" distance={30}>
        <div className="wrap" style={{ paddingTop: 54, paddingBottom: 90 }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 14, textAlign: "center" }}
            >
              Formulaire entreprises
            </div>
            <h2
              className="nr"
              style={{ fontSize: 34, margin: "0 0 10px", textAlign: "center" }}
            >
              {page.formTitle}
            </h2>
            <p
              style={{
                fontSize: 15.5,
                color: "#6b6b6b",
                textAlign: "center",
                margin: "0 0 38px",
              }}
            >
              {page.formText}
            </p>
            <EntreprisesForm formations={formations} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
