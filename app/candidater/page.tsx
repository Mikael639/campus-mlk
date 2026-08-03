import type { Metadata } from "next";
import { CandidaterForm } from "@/components/forms";
import { getFormations } from "@/lib/formations";
import { getCandidaterPage } from "@/lib/pages";

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

      <div
        className="wrap rg1"
        style={{
          paddingTop: 30,
          paddingBottom: 20,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
        }}
      >
        <div className="card" style={{ padding: "32px 34px" }}>
          <h2 className="nr" style={{ fontSize: 24, margin: "0 0 14px" }}>
            {page.conditionsTitle}
          </h2>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              color: "#3d3d3d",
              margin: "0 0 16px",
            }}
          >
            {page.conditionsText}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {page.conditionsItems.map((item) => (
              <div
                key={item}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <span style={{ color: "#8d7cff", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: 14, color: "#2b2b2b" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="card"
          style={{
            padding: "32px 34px",
            background: "#1a1a1a",
            color: "#f9f9f9",
            border: "none",
          }}
        >
          <h2 className="nr" style={{ fontSize: 24, margin: "0 0 18px" }}>
            {page.selectionTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {page.selectionSteps.map((e, i) => (
              <div
                key={e}
                style={{ display: "flex", gap: 14, alignItems: "baseline" }}
              >
                <span
                  className="nr"
                  style={{ color: "#d1ff5e", fontSize: 18, width: 22 }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.45 }}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingBottom: 10 }}>
        <div
          style={{
            background: "#eee9fb",
            borderRadius: 14,
            padding: "18px 24px",
            fontSize: 14,
            color: "#8d7cff",
          }}
        >
          <strong>Bon à savoir —</strong> {page.goodToKnow}
        </div>
      </div>

      {/* Formulaire */}
      <div className="wrap" style={{ paddingTop: 46, paddingBottom: 90 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            className="eyebrow"
            style={{ marginBottom: 14, textAlign: "center" }}
          >
            Formulaire de candidature
          </div>
          <h2
            className="nr"
            style={{ fontSize: 34, margin: "0 0 10px", textAlign: "center" }}
          >
            {page.formTitle}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#6b6b6b",
              textAlign: "center",
              margin: "0 0 36px",
            }}
          >
            {page.formText}
          </p>
          <CandidaterForm formations={formations} />
        </div>
      </div>
    </div>
  );
}
