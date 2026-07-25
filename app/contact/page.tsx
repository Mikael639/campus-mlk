import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { getSiteSettings } from "@/lib/siteSettings";
import { getContactPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MLK Campus : 1 rue Martin Luther King, 94000 Créteil — campus@mlkgrandparis.com.",
};

export default async function ContactPage() {
  const [settings, page] = await Promise.all([
    getSiteSettings(),
    getContactPage(),
  ]);
  const [street, city] = settings.address.split(",").map((s) => s.trim());
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
          Contact
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

      <div
        className="wrap rg1"
        style={{
          paddingTop: 20,
          paddingBottom: 90,
          display: "grid",
          gridTemplateColumns: ".9fr 1.1fr",
          gap: 30,
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="card" style={{ padding: "28px 30px" }}>
            <div
              style={{
                fontSize: 12,
                color: "#7a5cf0",
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Adresse
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.5 }}>
              MLK Campus
              <br />
              {street}
              {city && (
                <>
                  <br />
                  {city}
                </>
              )}
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: "#6b6b6b" }}>
              <span style={{ color: "#7a5cf0", fontWeight: 600 }}>
                Transport —
              </span>{" "}
              {settings.transport}
            </div>
          </div>
          <div className="card" style={{ padding: "28px 30px" }}>
            <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 6 }}>
              Email
            </div>
            <a
              href={`mailto:${settings.email}`}
              style={{ fontSize: 15, color: "#7a5cf0", fontWeight: 600 }}
            >
              {settings.email}
            </a>
          </div>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(22,22,22,.12)",
            }}
          >
            <iframe
              title={`Carte — ${settings.address}`}
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.4525759%2C48.7655563%2C2.4605759%2C48.7695563&layer=mapnik&marker=48.7675563%2C2.4565759"
              style={{ width: "100%", height: 200, border: "none", display: "block" }}
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
