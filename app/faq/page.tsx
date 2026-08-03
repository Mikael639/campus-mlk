import type { Metadata } from "next";
import Link from "next/link";
import { getFaqGroups } from "@/lib/faq";
import { getFaqPage } from "@/lib/pages";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur l'apprentissage à MLK Campus : candidats, entreprises et formateurs.",
};

export default async function FaqPage() {
  const [faqGroups, page] = await Promise.all([getFaqGroups(), getFaqPage()]);
  return (
    <div>
      <div
        className="wrap"
        style={{
          paddingTop: 60,
          paddingBottom: 30,
          maxWidth: 840,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          FAQ
        </div>
        <h1
          className="nr"
          style={{ fontSize: 50, lineHeight: 1.04, margin: "0 0 18px" }}
        >
          {page.title}
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
          {page.intro}
        </p>
      </div>

      <div className="wrap" style={{ paddingTop: 20, paddingBottom: 30 }}>
        <FaqAccordion groups={faqGroups} />
      </div>

      <div className="wrap" style={{ paddingBottom: 90 }}>
        <div
          className="rcta"
          style={{
            maxWidth: 840,
            margin: "0 auto",
            background: "#1a1a1a",
            color: "#f9f9f9",
            borderRadius: 20,
            padding: "40px 44px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div>
            <div className="nr" style={{ fontSize: 24, marginBottom: 4 }}>
              {page.ctaTitle}
            </div>
            <div style={{ fontSize: 14, color: "#cfcfcf" }}>{page.ctaText}</div>
          </div>
          <Link
            href="/contact"
            className="gobtn"
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "14px 26px",
              borderRadius: 40,
              background: "#f9f9f9",
              color: "#8d7cff",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Nous contacter <span className="ar">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
