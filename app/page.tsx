import Link from "next/link";
import Image from "next/image";
import { stegaClean } from "next-sanity";
import { getFormations } from "@/lib/formations";
import { getHomePage } from "@/lib/pages";
import { urlForImage } from "@/lib/sanity/image";
import FormationCard from "@/components/FormationCard";
import VideoSection from "@/components/VideoSection";

/* Le premier « o » du mot est remplacé par le logomark violet (charte). */
function WordWithLogomark({ word }: { word: string }) {
  const clean = stegaClean(word);
  const i = clean.indexOf("o");
  if (i === -1) return <>{clean}</>;
  return (
    <span style={{ whiteSpace: "nowrap" }}>
      {clean.slice(0, i)}
      <Image
        src="/images/logomark-iris.png"
        alt="o"
        width={36}
        height={36}
        style={{
          width: ".6em",
          height: ".6em",
          display: "inline-block",
          margin: "0 1px",
          verticalAlign: "baseline",
        }}
      />
      {clean.slice(i + 1)}
    </span>
  );
}

export default async function Home() {
  const [formations, page] = await Promise.all([
    getFormations(),
    getHomePage(),
  ]);

  return (
    <div>
      {/* Hero */}
      <div
        className="wrap rg1"
        style={{
          paddingTop: 78,
          paddingBottom: 70,
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: 54,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="pg"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 15px",
              borderRadius: 30,
              background: "#f2e9fb",
              color: "#ad8ee8",
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginBottom: 26,
            }}
          >
            {page.heroBadge}
          </div>
          <h1
            className="nr pg2"
            style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: "-.015em",
              margin: "0 0 24px",
            }}
          >
            {page.heroTitleStart} <WordWithLogomark word={page.heroWordLogo} />{" "}
            {page.heroTitleMiddle}{" "}
            <em style={{ color: "#7a5cf0" }}>{page.heroTitleAccent}</em>
          </h1>
          <p
            className="pg2"
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#4a4a4a",
              maxWidth: 480,
              margin: "0 0 34px",
            }}
          >
            {page.heroText}
          </p>
          <div className="pg3 rbtns" style={{ display: "flex", gap: 14 }}>
            <Link href="/candidater" className="btnA gobtn">
              {page.heroCta1} <span className="ar">→</span>
            </Link>
            <Link href="/formations" className="btnO gobtn">
              {page.heroCta2} <span className="ar">→</span>
            </Link>
          </div>
        </div>
        {page.heroImage?.asset ? (
          <Image
            className="pg2"
            src={urlForImage(page.heroImage).width(1200).height(860).url()}
            alt={page.heroImage.alt ?? ""}
            width={600}
            height={430}
            priority
            style={{
              width: "100%",
              height: 430,
              objectFit: "cover",
              borderRadius: 18,
            }}
          />
        ) : (
          <div
            className="ph pg2"
            data-l="Visuel campus / apprenti"
            style={{ height: 430, borderRadius: 18 }}
          />
        )}
      </div>

      {/* Chiffres clés */}
      <div
        style={{
          borderTop: "1px solid rgba(22,22,22,.1)",
          borderBottom: "1px solid rgba(22,22,22,.1)",
        }}
      >
        <div
          className="wrap rstats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            padding: 0,
          }}
        >
          {page.stats.map((s, i) => (
            <div
              key={s._key}
              style={{
                padding: "30px 26px",
                borderRight:
                  i < page.stats.length - 1
                    ? "1px solid rgba(22,22,22,.08)"
                    : undefined,
              }}
            >
              <div className="nr" style={{ fontSize: 34, color: "#7a5cf0" }}>
                {s.n}
              </div>
              <div style={{ fontSize: 12.5, color: "#6b6b6b", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vidéo d'introduction */}
      <div className="wrap" style={{ paddingTop: 70 }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Immersion
          </div>
          <h2 className="nr" style={{ fontSize: 36, lineHeight: 1.1, margin: 0 }}>
            {page.videoTitle}
          </h2>
        </div>
        <VideoSection label={page.videoLabel} />
      </div>

      {/* Formations */}
      <div className="wrap" style={{ paddingTop: 70 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 34,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              Nos formations
            </div>
            <h2
              className="nr"
              style={{ fontSize: 36, lineHeight: 1.1, margin: 0, maxWidth: 560 }}
            >
              {page.formationsTitle}
            </h2>
          </div>
          <Link
            href="/formations"
            className="navl on"
            style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Tout voir →
          </Link>
        </div>
        <div
          className="rg1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {formations.slice(0, 3).map((f) => (
            <FormationCard key={f.id} f={f} variant="home" />
          ))}
        </div>
      </div>

      {/* Pourquoi MLK Campus */}
      <div className="wrap" style={{ paddingTop: 50 }}>
        <div
          className="rg1"
          style={{
            padding: "60px 48px",
            background: "#141414",
            color: "#f5f5f3",
            borderRadius: 24,
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 50,
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="eyebrow"
              style={{ color: "#cdf24f", marginBottom: 14 }}
            >
              Pourquoi MLK Campus
            </div>
            <h2
              className="nr"
              style={{ fontSize: 34, lineHeight: 1.12, margin: "0 0 16px" }}
            >
              {page.pourquoiTitle}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "#cfcfcf",
                margin: 0,
              }}
            >
              {page.pourquoiText}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {page.pourquoiItems.map((p) => (
              <div
                key={stegaClean(p)}
                style={{
                  padding: "16px 18px",
                  border: "1px solid rgba(255,255,255,.16)",
                  borderRadius: 14,
                  fontSize: 13.5,
                  lineHeight: 1.45,
                }}
              >
                {p}
              </div>
            ))}
            <div
              style={{
                padding: "16px 18px",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 14,
                fontSize: 13.5,
                lineHeight: 1.45,
                gridColumn: "span 2",
              }}
            >
              {page.pourquoiWide}
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div
        className="wrap"
        style={{ paddingTop: 80, paddingBottom: 88, textAlign: "center" }}
      >
        <h2
          className="nr"
          style={{ fontSize: 42, lineHeight: 1.1, margin: "0 0 14px" }}
        >
          {page.ctaTitle}
        </h2>
        <p style={{ fontSize: 16, color: "#6b6b6b", margin: "0 0 28px" }}>
          {page.ctaText}
        </p>
        <Link href="/candidater" className="btnA gobtn">
          {page.ctaButton} <span className="ar">→</span>
        </Link>
      </div>
    </div>
  );
}
