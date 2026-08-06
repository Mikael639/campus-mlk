import Link from "next/link";
import Image from "next/image";
import { stegaClean } from "next-sanity";
import { getFormations } from "@/lib/formations";
import { getHomePage } from "@/lib/pages";
import { urlForImage } from "@/lib/sanity/image";
import FormationCard from "@/components/FormationCard";
import VideoSection from "@/components/VideoSection";
import BrandStripe from "@/components/BrandStripe";
import EngagementsDiagram from "@/components/EngagementsDiagram";
import Logomark from "@/components/Logomark";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ScrollReveal";

/* Tons violets dérivés de la charte (Iris/Lilas) pour les tuiles "chiffres clés". */
const STAT_TONES = ["#8d7cff", "#a084ee", "#ba7eee", "#7a68e0", "#a897f2"];

/* Logomark à la taille du texte, pour remplacer une lettre dans un titre. */
function InlineLogomark({
  variant,
  scale = 0.6,
}: {
  variant: "iris" | "framboise";
  scale?: number;
}) {
  return (
    <Image
      src={`/images/logomark-${variant}.png`}
      alt="o"
      width={36}
      height={36}
      style={{
        width: `${scale}em`,
        height: `${scale}em`,
        display: "inline-block",
        margin: "0 1px",
        verticalAlign: "baseline",
      }}
    />
  );
}

/*
  Remplace le premier « o » du texte par le logomark (charte).
  Seul le mot concerné est insécable, pour ne pas bloquer les retours
  à la ligne du reste de la phrase.
*/
function TextWithLogomark({
  text,
  variant = "iris",
  scale = 0.6,
}: {
  text: string;
  variant?: "iris" | "framboise";
  scale?: number;
}) {
  const clean = stegaClean(text);
  const words = clean.split(" ");
  const wordIndex = words.findIndex((w) => w.includes("o"));
  if (wordIndex === -1) return <>{clean}</>;

  const word = words[wordIndex];
  const i = word.indexOf("o");
  return (
    <>
      {words.slice(0, wordIndex).join(" ")}
      {wordIndex > 0 && " "}
      <span style={{ whiteSpace: "nowrap" }}>
        {word.slice(0, i)}
        <InlineLogomark variant={variant} scale={scale} />
        {word.slice(i + 1)}
      </span>
      {wordIndex < words.length - 1 && " "}
      {words.slice(wordIndex + 1).join(" ")}
    </>
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
      <ScrollReveal direction="up" distance={20} duration={0.6}>
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
                color: "#ba7eee",
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
              <TextWithLogomark text={page.heroTitleStart} variant="iris" />
              <br />
              <TextWithLogomark
                text={page.heroWordLogo}
                variant="framboise"
                scale={0.85}
              />
              <br />
              {page.heroTitleMiddle}{" "}
              <em style={{ color: "#8d7cff" }}>{page.heroTitleAccent}</em>
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
                {page.heroCta1}{" "}
                <span className="ar" style={{ display: "inline-flex" }}>
                  <Logomark size={17} variant="iris" />
                </span>
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
      </ScrollReveal>

      {/* Chiffres clés */}
      <div className="wrap" style={{ paddingTop: 70, paddingBottom: 20 }}>
        <div style={{ textAlign: "center" }}>
          <ScrollReveal direction="up" distance={16}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Chiffres clés
            </div>
            <h2 className="nr" style={{ fontSize: 28, margin: "0 0 28px" }}>
              MLK Campus en chiffres
            </h2>
          </ScrollReveal>
          <StaggerGroup
            className="rstats"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${page.stats.length}, 1fr)`,
              gap: 14,
            }}
          >
            {page.stats.map((s, i) => (
              <StaggerItem key={s._key}>
                <div
                  style={{
                    background: STAT_TONES[i % STAT_TONES.length],
                    borderRadius: 16,
                    padding: "16px 14px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* Astérisque en filigrane, débordant du coin bas-droit */}
                  <div
                    style={{
                      position: "absolute",
                      right: -18,
                      bottom: -18,
                      opacity: 0.18,
                      pointerEvents: "none",
                    }}
                    aria-hidden
                  >
                    <Logomark size={72} variant="blanc" />
                  </div>
                  <div
                    className="nr"
                    style={{ fontSize: 32, color: "#ffffff", position: "relative" }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,.88)",
                      marginTop: 6,
                      lineHeight: 1.35,
                      position: "relative",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>

      {/* Vidéo d'introduction + promesse — bandeau sombre pleine largeur */}
      <ScrollReveal direction="up" distance={30}>
        <div style={{ marginTop: 50 }}>
          <BrandStripe />
          <div style={{ background: "#1a1a1a" }}>
            <div
              className="wrap rg1"
              style={{
                paddingTop: 56,
                paddingBottom: 56,
                display: "grid",
                gridTemplateColumns: "1.15fr .85fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              <VideoSection label={page.videoLabel} />
              <div style={{ color: "#f9f9f9" }}>
                <h2
                  className="nr"
                  style={{ fontSize: 34, lineHeight: 1.12, margin: "0 0 14px" }}
                >
                  {page.videoTitle}
                </h2>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(249,249,249,.75)",
                    margin: "0 0 24px",
                  }}
                >
                  {page.videoText}
                </p>
                <StaggerGroup
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {page.promesse.map((item) => (
                    <StaggerItem key={item}>
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "center",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          padding: "12px 16px",
                          borderRadius: 14,
                          fontSize: 13.5,
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            flex: "none",
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            background: "#8d7cff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Logomark size={12} variant="blanc" />
                        </span>
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </div>
          <BrandStripe />
        </div>
      </ScrollReveal>

      {/* Formations */}
      <div className="wrap" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <ScrollReveal direction="up" distance={16}>
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
        </ScrollReveal>
        <StaggerGroup
          className="rg1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {formations.slice(0, 3).map((f) => (
            <StaggerItem key={f.id}>
              <FormationCard f={f} variant="home" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Pourquoi MLK Campus — bandeau sombre pleine largeur */}
      <ScrollReveal direction="up" distance={30}>
        <div style={{ marginTop: 70 }}>
          <BrandStripe />
          <div style={{ background: "#1a1a1a", color: "#f9f9f9" }}>
            <div
              className="wrap"
              style={{ paddingTop: 56, paddingBottom: 64 }}
            >
              <div style={{ textAlign: "center", marginBottom: 44 }}>
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(255,255,255,.3)",
                    borderRadius: 30,
                    padding: "6px 16px",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: 18,
                  }}
                >
                  {page.pourquoiBadge}
                </span>
                <h2
                  className="nr"
                  style={{ fontSize: 36, lineHeight: 1.12, margin: 0 }}
                >
                  {page.pourquoiTitle}
                </h2>
              </div>
              <EngagementsDiagram items={page.engagements} />
            </div>
          </div>
          <BrandStripe />
        </div>
      </ScrollReveal>

      {/* CTA final */}
      <ScrollReveal direction="up" distance={24}>
        <div
          className="wrap"
          style={{ paddingTop: 80, paddingBottom: 88, textAlign: "center" }}
        >
          <div style={{ marginBottom: 22 }}>
            <Logomark size={58} variant="principal" />
          </div>
          <h2
            className="nr"
            style={{ fontSize: 42, lineHeight: 1.1, margin: "0 0 14px" }}
          >
            {page.ctaTitle}
          </h2>
          <p style={{ fontSize: 16, color: "#6b6b6b", margin: "0 0 28px" }}>
            {page.ctaText}
          </p>
          <Link
            href="/candidater"
            className="btnO gobtn"
            style={{ padding: "13px 24px", fontSize: 13.5 }}
          >
            {page.ctaButton} <span className="ar">→</span>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
