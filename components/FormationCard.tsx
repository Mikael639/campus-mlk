"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { stegaClean } from "next-sanity";
import type { Formation } from "@/lib/formations";
import { urlForImage } from "@/lib/sanity/image";
import Logomark from "./Logomark";

const MotionLink = motion.create(Link);

/*
  Carte formation colorée par filière — deux tailles :
  - "home" : grille 3 colonnes de l'accueil (texte court)
  - "list" : grille 2 colonnes de la page formations (tagline)
*/
export default function FormationCard({
  f,
  variant,
}: {
  f: Formation;
  variant: "home" | "list";
}) {
  const isList = variant === "list";
  const color = stegaClean(f.color);

  return (
    <MotionLink
      href={`/formations/${stegaClean(f.slug)}`}
      whileHover={{ y: -7, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      style={{
        background: color,
        borderRadius: isList ? 30 : 28,
        padding: isList ? "16px 16px 26px" : "14px 14px 22px",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        boxShadow: "0 10px 30px -15px rgba(20,20,20,0.12)",
      }}
      className="gobtn"
    >
      <div style={{ position: "relative", marginBottom: isList ? 20 : 18 }}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: isList ? 22 : 20,
            height: isList ? 180 : 150,
          }}
        >
          {f.image?.asset ? (
            <Image
              className="imgzoom"
              src={urlForImage(f.image)
                .width(800)
                .height(isList ? 400 : 340)
                .url()}
              alt={f.image.alt ?? ""}
              width={800}
              height={isList ? 400 : 340}
              style={{
                width: "100%",
                height: isList ? 180 : 150,
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              className="ph imgzoom"
              data-l={f.ph}
              style={{
                height: isList ? 180 : 150,
              }}
            />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            top: isList ? 12 : 10,
            left: isList ? 12 : 10,
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: "#1a1a1a",
              color: "#ffffff",
              fontSize: isList ? 10 : 9.5,
              fontWeight: 700,
              letterSpacing: ".07em",
              textTransform: "uppercase",
              padding: isList ? "6px 12px" : "6px 11px",
              borderRadius: 20,
            }}
          >
            <Logomark size={10} variant="blanc" />
            {f.cat}
          </span>
          <span
            style={{
              whiteSpace: "nowrap",
              background: "#ffffff",
              color: "#1a1a1a",
              fontSize: isList ? 10 : 9.5,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              padding: isList ? "6px 12px" : "6px 11px",
              borderRadius: 20,
            }}
          >
            {f.level}
          </span>
        </div>
        <Image
          src="/images/logomark-blanc.png"
          alt=""
          width={isList ? 58 : 52}
          height={isList ? 58 : 52}
          style={{
            position: "absolute",
            right: isList ? 2 : 0,
            bottom: isList ? -20 : -18,
            pointerEvents: "none",
          }}
        />
      </div>
      <div
        style={{
          padding: isList ? "0 10px" : "0 8px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          className="nr"
          style={{
            fontSize: isList ? 27 : 23,
            lineHeight: 1.05,
            color: "#1a1a1a",
            marginBottom: isList ? 10 : 8,
          }}
        >
          {f.title}
        </div>
        <div
          style={{
            fontSize: isList ? 14 : 13.5,
            color: "rgba(20,20,20,.72)",
            lineHeight: isList ? 1.55 : 1.5,
            flex: 1,
            marginBottom: isList ? 18 : 16,
          }}
        >
          {isList ? f.tagline : f.short}
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#1a1a1a",
            color: "#ffffff",
            fontSize: isList ? 11 : 10.5,
            fontWeight: 700,
            letterSpacing: ".09em",
            textTransform: "uppercase",
            padding: isList ? "10px 19px" : "9px 17px",
            borderRadius: isList ? 22 : 20,
          }}
        >
          Découvrir <span className="ar">→</span>
        </span>
      </div>
    </MotionLink>
  );
}
