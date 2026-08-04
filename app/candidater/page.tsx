import type { Metadata } from "next";
import { CandidaterForm } from "@/components/forms";
import { getFormations } from "@/lib/formations";
import { getCandidaterPage } from "@/lib/pages";
import Logomark from "@/components/Logomark";
import HighlightedText from "@/components/HighlightedText";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Candidater",
  description:
    "Rejoignez MLK Campus en apprentissage : conditions, étapes de sélection et formulaire de candidature.",
};

export default async function CandidaterPage() {
  const [formations, page] = await Promise.all([
    getFormations(),
    getCandidaterPage(),
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
            Candidater
          </div>
          <h1
            className="nr"
            style={{ fontSize: 48, lineHeight: 1.05, margin: "0 0 22px" }}
          >
            {page.title}
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "#4a4a4a",
              margin: "0 0 12px",
            }}
          >
            {page.intro1}
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
            {page.intro2}
          </p>
        </div>
      </ScrollReveal>

      {/* Cartes d'informations & étapes */}
      <div
        className="wrap rg1"
        style={{
          paddingTop: 30,
          paddingBottom: 20,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        {/* Conditions d'accès */}
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
              Prérequis
            </div>
            <h2 className="nr" style={{ fontSize: 26, margin: "0 0 16px" }}>
              {page.conditionsTitle}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "#4a4a4a",
                margin: "0 0 20px",
              }}
            >
              {page.conditionsText}
            </p>
            <StaggerGroup style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {page.conditionsItems.map((item) => (
                <StaggerItem key={item}>
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
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </ScrollReveal>

        {/* Étapes de sélection - Timeline */}
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
              position: "relative",
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
              Parcours
            </div>
            <h2 className="nr" style={{ fontSize: 26, margin: "0 0 24px" }}>
              {page.selectionTitle}
            </h2>

            {/* Timeline container */}
            <div style={{ position: "relative" }}>
              {/* Ligne verticale reliant les étapes */}
              <div
                style={{
                  position: "absolute",
                  left: 17,
                  top: 20,
                  bottom: 20,
                  width: 2,
                  background: "rgba(255, 255, 255, 0.15)",
                }}
              />

              <StaggerGroup style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {page.selectionSteps.map((e, i) => (
                  <StaggerItem key={e}>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <span
                        className="nr"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: i === 0 ? "#d1ff5e" : "#2a2a2a",
                          color: i === 0 ? "#1a1a1a" : "#d1ff5e",
                          border: "2px solid #d1ff5e",
                          fontSize: 15,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 0 12px rgba(209,255,94,0.2)",
                        }}
                      >
                        {i + 1}
                      </span>
                      <div
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          padding: "12px 18px",
                          borderRadius: 14,
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontSize: 14,
                          lineHeight: 1.45,
                          color: "rgba(249,249,249,0.92)",
                          flex: 1,
                        }}
                      >
                        {e}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bandeau Bon à savoir */}
      <ScrollReveal direction="up" distance={20}>
        <div className="wrap" style={{ paddingTop: 14, paddingBottom: 10 }}>
          <div
            style={{
              background: "#f2e9fb",
              border: "1px solid #ba7eee",
              borderRadius: 18,
              padding: "20px 28px",
              fontSize: 14.5,
              lineHeight: 1.5,
              color: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <Logomark size={28} variant="iris" />
            </div>
            <div>
              <strong style={{ color: "#8d7cff", fontWeight: 700 }}>
                Bon à savoir —{" "}
              </strong>
              {page.goodToKnow}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Formulaire de candidature */}
      <ScrollReveal direction="up" distance={30}>
        <div className="wrap" style={{ paddingTop: 54, paddingBottom: 90 }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 14, textAlign: "center" }}
            >
              Formulaire de candidature
            </div>
            <h2
              className="nr"
              style={{ fontSize: 36, margin: "0 0 12px", textAlign: "center" }}
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
              <HighlightedText
                text={page.formText}
                highlight="dans les plus brefs délais."
              />
            </p>
            <CandidaterForm formations={formations} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
