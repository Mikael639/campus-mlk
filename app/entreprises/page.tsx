import type { Metadata } from "next";
import { EntreprisesForm } from "@/components/forms";
import { getFormations } from "@/lib/formations";
import { getEntreprisesPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Entreprises",
  description:
    "Recrutez un apprenti MLK Campus : avantages du recrutement en apprentissage, accompagnement et formulaire de contact.",
};

export default async function EntreprisesPage() {
  const [formations, page] = await Promise.all([
    getFormations(),
    getEntreprisesPage(),
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

      <div className="wrap" style={{ paddingTop: 24, paddingBottom: 14 }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          Les avantages du recrutement en apprentissage
        </div>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "#3d3d3d",
            maxWidth: 780,
            margin: "0 0 24px",
          }}
        >
          {page.avantagesIntro}
        </p>
        <div
          className="rg1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {page.avantages.map((a, i) => (
            <div key={a} className="card" style={{ padding: 24 }}>
              <div
                className="nr"
                style={{ fontSize: 22, color: "#7a5cf0", marginBottom: 8 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: "#2b2b2b" }}>
                {a}
              </div>
            </div>
          ))}
          <div
            style={{
              padding: 24,
              background: "#141414",
              color: "#f5f5f3",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 14.5, lineHeight: 1.5 }}>
              {page.avantagesCard}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 46, paddingBottom: 20 }}>
        <div
          className="rg1"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(22,22,22,.12)",
            borderRadius: 20,
            padding: 42,
            display: "grid",
            gridTemplateColumns: ".9fr 1.1fr",
            gap: 44,
            alignItems: "center",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Notre accompagnement
            </div>
            <h2
              className="nr"
              style={{ fontSize: 30, lineHeight: 1.15, margin: "0 0 12px" }}
            >
              {page.accTitle}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "#3d3d3d",
                margin: 0,
              }}
            >
              {page.accText}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {page.accItems.map((a) => (
              <div
                key={a}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  fontSize: 14,
                  color: "#2b2b2b",
                }}
              >
                <span style={{ color: "#7a5cf0", fontWeight: 700 }}>✓</span> {a}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="wrap" style={{ paddingTop: 46, paddingBottom: 90 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            className="eyebrow"
            style={{ marginBottom: 14, textAlign: "center" }}
          >
            Formulaire entreprises
          </div>
          <h2
            className="nr"
            style={{ fontSize: 32, margin: "0 0 10px", textAlign: "center" }}
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
          <EntreprisesForm formations={formations} />
        </div>
      </div>
    </div>
  );
}
