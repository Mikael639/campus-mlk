import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { stegaClean } from "next-sanity";
import {
  getFormation,
  getFormationSlugs,
  DUREE,
  RYTHME,
  MODALITES,
} from "@/lib/formations";
import { urlForImage } from "@/lib/sanity/image";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getFormationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = await getFormation(slug);
  if (!f) return {};
  return { title: stegaClean(f.title), description: stegaClean(f.tagline) };
}

export default async function FormationPage({ params }: Props) {
  const { slug } = await params;
  const f = await getFormation(slug);
  if (!f) notFound();
  const color = stegaClean(f.color);

  return (
    <div>
      {/* Fil d'Ariane */}
      <div className="wrap" style={{ paddingTop: 30 }}>
        <div
          style={{
            display: "flex",
            gap: 8,
            fontSize: 13,
            color: "#6b6b6b",
            alignItems: "center",
          }}
        >
          <Link href="/formations" className="navl" style={{ color: "#6b6b6b" }}>
            Nos formations
          </Link>
          <span>/</span>
          <span style={{ color: "#161616" }}>{f.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div
        className="wrap rg1"
        style={{
          paddingTop: 34,
          paddingBottom: 50,
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "7px 14px",
              borderRadius: 30,
              background: color,
              color: "#141414",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            {f.cat} · {f.level}
          </div>
          <h1
            className="nr"
            style={{ fontSize: 44, lineHeight: 1.06, margin: "0 0 10px" }}
          >
            {f.title}
          </h1>
          <div
            style={{
              fontSize: 14,
              color: "#ad8ee8",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            {f.cert}
          </div>
          <p
            className="nr"
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "#2b2b2b",
              margin: "0 0 30px",
              fontStyle: "italic",
            }}
          >
            {f.tagline}
          </p>
          <div className="rbtns" style={{ display: "flex", gap: 14 }}>
            <Link href="/candidater" className="btnA gobtn">
              Candidater à cette formation <span className="ar">→</span>
            </Link>
            <Link href="/entreprises" className="btnO gobtn">
              Recruter un apprenti <span className="ar">→</span>
            </Link>
          </div>
        </div>
        {f.image?.asset ? (
          <Image
            src={urlForImage(f.image).width(1000).height(760).url()}
            alt={f.image.alt ?? ""}
            width={500}
            height={340}
            priority
            style={{
              width: "100%",
              height: 340,
              objectFit: "cover",
              borderRadius: 18,
            }}
          />
        ) : (
          <div
            className="ph"
            data-l={f.ph}
            style={{ height: 340, borderRadius: 18 }}
          />
        )}
      </div>

      {/* Contenu + panneau latéral */}
      <div
        className="wrap rg1"
        style={{
          paddingBottom: 80,
          display: "grid",
          gridTemplateColumns: "1.3fr .7fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Présentation
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#3d3d3d",
              margin: "0 0 40px",
            }}
          >
            {f.presentation}
          </p>

          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Compétences acquises
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 44,
            }}
          >
            {f.skills.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "14px 18px",
                  background: "#ffffff",
                  border: "1px solid rgba(22,22,22,.1)",
                  borderRadius: 12,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: color,
                    marginTop: 6,
                    flex: "none",
                  }}
                />
                <span
                  style={{ fontSize: 14.5, lineHeight: 1.5, color: "#2b2b2b" }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>

          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Débouchés
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {f.debouches.map((d) => (
              <span
                key={d}
                style={{
                  padding: "10px 18px",
                  borderRadius: 30,
                  background: color,
                  color: "#141414",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Panneau infos pratiques */}
        <div className="rstatic" style={{ position: "sticky", top: 96 }}>
          <div
            style={{
              background: "#141414",
              color: "#f5f5f3",
              borderRadius: 20,
              padding: "30px 30px 34px",
              borderTop: `5px solid ${color}`,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#cdf24f",
                marginBottom: 20,
              }}
            >
              Informations pratiques
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                fontSize: 14,
              }}
            >
              {[
                ["Certification", f.cert],
                ["Niveau", f.levelEq],
                ["Durée", DUREE],
                ["Rythme", RYTHME],
                ["Modalités", MODALITES],
              ].map(([label, value], i, arr) => (
                <div
                  key={label}
                  style={
                    i < arr.length - 1
                      ? {
                          borderBottom: "1px solid rgba(255,255,255,.15)",
                          paddingBottom: 14,
                        }
                      : undefined
                  }
                >
                  <div
                    style={{ color: "#cdf24f", fontSize: 12, marginBottom: 3 }}
                  >
                    {label}
                  </div>
                  {value}
                </div>
              ))}
            </div>
            <Link
              href="/candidater"
              className="gobtn"
              style={{
                marginTop: 26,
                width: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: 14,
                borderRadius: 40,
                background: "#f5f5f3",
                color: "#7a5cf0",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Candidater <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
