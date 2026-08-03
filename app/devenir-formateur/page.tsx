import type { Metadata } from "next";
import { FormateurForm } from "@/components/forms";
import { getFormateurPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Devenir formateur",
  description:
    "MLK Campus recrute des formateurs professionnels : profil recherché, modalités d'intervention et candidature.",
};

export default async function FormateurPage() {
  const page = await getFormateurPage();
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

      <div
        className="wrap rg1"
        style={{
          paddingTop: 24,
          paddingBottom: 20,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
        }}
      >
        <div className="card" style={{ padding: "32px 34px" }}>
          <h2 className="nr" style={{ fontSize: 24, margin: "0 0 14px" }}>
            {page.profilTitle}
          </h2>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#3d3d3d",
              margin: "0 0 18px",
            }}
          >
            {page.profilText}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {page.profilItems.map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  gap: 12,
                  fontSize: 13.5,
                  color: "#2b2b2b",
                }}
              >
                <span style={{ color: "#8d7cff", fontWeight: 700 }}>✓</span> {p}
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
          <h2 className="nr" style={{ fontSize: 24, margin: "0 0 14px" }}>
            {page.modTitle}
          </h2>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#cfcfcf",
              margin: "0 0 18px",
            }}
          >
            {page.modText}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontSize: 13.5,
            }}
          >
            <div
              style={{
                borderBottom: "1px solid rgba(255,255,255,.15)",
                paddingBottom: 12,
              }}
            >
              <span style={{ color: "#d1ff5e" }}>Statut —</span>{" "}
              {page.statut}
            </div>
            <div
              style={{
                borderBottom: "1px solid rgba(255,255,255,.15)",
                paddingBottom: 12,
              }}
            >
              <span style={{ color: "#d1ff5e" }}>Rémunération —</span>{" "}
              {page.remuneration}
            </div>
            <div
              style={{
                borderBottom: "1px solid rgba(255,255,255,.15)",
                paddingBottom: 12,
              }}
            >
              <span style={{ color: "#d1ff5e" }}>Lieu —</span> {page.lieu}
            </div>
            <div>
              <span style={{ color: "#d1ff5e" }}>Accès —</span> {page.acces}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingBottom: 6 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>
          Domaines de recrutement
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {page.domaines.map((d) => (
            <span
              key={d}
              style={{
                padding: "10px 18px",
                borderRadius: 30,
                background: "#eee9fb",
                color: "#8d7cff",
                fontSize: 13.5,
                fontWeight: 500,
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Formulaire */}
      <div className="wrap" style={{ paddingTop: 46, paddingBottom: 90 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            className="eyebrow"
            style={{ marginBottom: 14, textAlign: "center" }}
          >
            Candidature formateur
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
          <FormateurForm />
        </div>
      </div>
    </div>
  );
}
