import type { Metadata } from "next";
import { FormateurForm } from "@/components/forms";
import { getFormateurPage } from "@/lib/pages";
import Logomark from "@/components/Logomark";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Devenir formateur",
  description:
    "MLK Campus recrute des formateurs professionnels : profil recherché, modalités d'intervention et candidature.",
};

export default async function FormateurPage() {
  const page = await getFormateurPage();

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
            Devenir formateur
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

      {/* Profil & Modalités */}
      <div
        className="wrap rg1"
        style={{
          paddingTop: 24,
          paddingBottom: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        {/* Profil recherché */}
        <ScrollReveal direction="left" distance={24} duration={0.55}>
          <div
            className="card lift"
            style={{
              padding: "36px 36px",
              height: "100%",
              borderRadius: 24,
              border: "1px solid rgba(22,22,22,0.1)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#f2e9fb",
                color: "#8d7cff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 20,
                marginBottom: 16,
              }}
            >
              <Logomark size={12} variant="iris" />
              Compétences
            </div>
            <h2 className="nr" style={{ fontSize: 26, margin: "0 0 14px" }}>
              {page.profilTitle}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "#4a4a4a",
                margin: "0 0 20px",
              }}
            >
              {page.profilText}
            </p>
            <StaggerGroup style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {page.profilItems.map((p) => (
                <StaggerItem key={p}>
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                      background: "#f9f9f9",
                      padding: "12px 16px",
                      borderRadius: 14,
                      border: "1px solid rgba(22,22,22,0.06)",
                    }}
                  >
                    <span
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#8d7cff",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 13,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: 14, color: "#2b2b2b", fontWeight: 500 }}>
                      {p}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </ScrollReveal>

        {/* Modalités d'intervention */}
        <ScrollReveal direction="right" distance={24} duration={0.55}>
          <div
            className="card"
            style={{
              padding: "36px 36px",
              background: "#1a1a1a",
              color: "#f9f9f9",
              borderRadius: 24,
              border: "none",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(209, 255, 94, 0.15)",
                color: "#d1ff5e",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 20,
                marginBottom: 16,
              }}
            >
              Conditions
            </div>
            <h2 className="nr" style={{ fontSize: 26, margin: "0 0 14px" }}>
              {page.modTitle}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "rgba(249,249,249,0.75)",
                margin: "0 0 22px",
              }}
            >
              {page.modText}
            </p>
            <StaggerGroup
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <StaggerItem>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 14,
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ color: "#d1ff5e", fontWeight: 700 }}>
                    Statut —{" "}
                  </span>
                  {page.statut}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 14,
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ color: "#d1ff5e", fontWeight: 700 }}>
                    Rémunération —{" "}
                  </span>
                  {page.remuneration}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 14,
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ color: "#d1ff5e", fontWeight: 700 }}>
                    Lieu —{" "}
                  </span>
                  {page.lieu}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 14,
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ color: "#d1ff5e", fontWeight: 700 }}>
                    Accès —{" "}
                  </span>
                  {page.acces}
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </ScrollReveal>
      </div>

      {/* Domaines de recrutement */}
      <ScrollReveal direction="up" distance={20}>
        <div className="wrap" style={{ paddingTop: 16, paddingBottom: 10 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Domaines de recrutement
          </div>
          <StaggerGroup
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
          >
            {page.domaines.map((d) => (
              <StaggerItem key={d}>
                <span
                  className="lift"
                  style={{
                    display: "inline-block",
                    padding: "12px 22px",
                    borderRadius: 30,
                    background: "#f2e9fb",
                    color: "#8d7cff",
                    fontSize: 14,
                    fontWeight: 600,
                    border: "1px solid rgba(141,124,255,0.25)",
                    transition: "all 0.25s ease",
                  }}
                >
                  {d}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </ScrollReveal>

      {/* Formulaire */}
      <ScrollReveal direction="up" distance={30}>
        <div className="wrap" style={{ paddingTop: 54, paddingBottom: 90 }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 14, textAlign: "center" }}
            >
              Candidature formateur
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
            <FormateurForm />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
