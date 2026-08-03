import type { Metadata } from "next";
import Link from "next/link";
import { getFormations } from "@/lib/formations";
import { getFormationsPage } from "@/lib/pages";
import FormationCard from "@/components/FormationCard";

export const metadata: Metadata = {
  title: "Nos formations",
  description:
    "Cinq titres professionnels en apprentissage, du niveau 3 au niveau 5. Aucun frais n'est à la charge de l'apprenti.",
};

export default async function FormationsPage() {
  const [formations, page] = await Promise.all([
    getFormations(),
    getFormationsPage(),
  ]);
  return (
    <div>
      <div
        className="wrap"
        style={{
          paddingTop: 60,
          paddingBottom: 30,
          maxWidth: 840,
          margin: "0 auto",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Nos formations
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
            margin: "0 0 14px",
          }}
        >
          {page.intro1}
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
          {page.intro2}{" "}
          <strong style={{ color: "#8d7cff" }}>{page.highlight}</strong>
        </p>
      </div>
      <div className="wrap" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div
          className="rg1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 22,
          }}
        >
          {formations.map((f) => (
            <FormationCard key={f.id} f={f} variant="list" />
          ))}
        </div>
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}>
        <div
          className="rcta"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(22,22,22,.12)",
            borderRadius: 18,
            padding: "32px 36px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div>
            <div className="nr" style={{ fontSize: 22, marginBottom: 4 }}>
              {page.ctaTitle}
            </div>
            <div style={{ fontSize: 14, color: "#6b6b6b" }}>{page.ctaText}</div>
          </div>
          <Link
            href="/contact"
            className="btnA gobtn"
            style={{ whiteSpace: "nowrap" }}
          >
            Contactez-nous <span className="ar">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
