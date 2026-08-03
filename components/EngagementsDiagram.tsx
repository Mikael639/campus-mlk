"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Logomark from "./Logomark";

export type Engagement = { title: string; text: string };

/* Couleurs des pastilles, dans l'ordre de la charte (3 à gauche, 3 à droite). */
const STYLES = [
  { bg: "#ba7eee", fg: "#1a1a1a" }, // Lavande (haut-gauche)
  { bg: "#e84d72", fg: "#ffffff" }, // Framboise (milieu-gauche)
  { bg: "#4ec5a5", fg: "#1a1a1a" }, // Turquoise (bas-gauche)
  { bg: "#d1ff5e", fg: "#1a1a1a" }, // Lime (haut-droite)
  { bg: "#1b5cff", fg: "#ffffff" }, // Bleu électrique (milieu-droite)
  { bg: "#f4bf4c", fg: "#1a1a1a" }, // Safran (bas-droite)
];

function Pill({
  item,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  item: Engagement;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { bg, fg } = STYLES[index % STYLES.length];
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        background: bg,
        color: fg,
        borderRadius: 18,
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
        boxShadow: isHovered
          ? `0 12px 28px -4px ${bg}aa`
          : "0 4px 12px rgba(0,0,0,0.15)",
        transformOrigin: index < 3 ? "right center" : "left center",
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
        {item.title}
      </div>
      <div style={{ fontSize: 12.5, lineHeight: 1.4, opacity: 0.88 }}>
        {item.text}
      </div>
    </motion.div>
  );
}

export default function EngagementsDiagram({ items }: { items: Engagement[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const left = items.slice(0, 3);
  const right = items.slice(3, 6);
  // Les 3 rangées correspondent à y=50 (haut), y=150 (milieu), y=250 (bas) dans viewBox 0 0 100 300
  const rows = [50, 150, 250];

  return (
    <div className="engwrap">
      <div className="engcol">
        {left.map((item, i) => (
          <Pill
            key={item.title}
            item={item}
            index={i}
            isHovered={hoveredIndex === i}
            onHover={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      <div className="engcenter">
        <svg
          className="englines"
          viewBox="0 0 100 300"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
          aria-hidden
        >
          {/* Lignes de gauche (vers pastilles 0, 1, 2) */}
          {rows.map((y, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.line
                key={`l${y}`}
                x1="50"
                y1="150"
                x2="0"
                y2={y}
                stroke={STYLES[i].bg}
                strokeWidth={isHovered ? "4.5" : "2.5"}
                strokeLinecap="round"
                opacity={hoveredIndex === null || isHovered ? 1 : 0.25}
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: hoveredIndex === null || isHovered ? 1 : 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            );
          })}

          {/* Lignes de droite (vers pastilles 3, 4, 5) */}
          {rows.map((y, i) => {
            const index = i + 3;
            const isHovered = hoveredIndex === index;
            return (
              <motion.line
                key={`r${y}`}
                x1="50"
                y1="150"
                x2="100"
                y2={y}
                stroke={STYLES[index].bg}
                strokeWidth={isHovered ? "4.5" : "2.5"}
                strokeLinecap="round"
                opacity={hoveredIndex === null || isHovered ? 1 : 0.25}
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: hoveredIndex === null || isHovered ? 1 : 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.05 }}
              />
            );
          })}
        </svg>

        <motion.div
          animate={{
            scale: hoveredIndex !== null ? 1.14 : 1,
            borderColor:
              hoveredIndex !== null
                ? STYLES[hoveredIndex].bg
                : "rgba(255,255,255,.25)",
            boxShadow:
              hoveredIndex !== null
                ? `0 0 28px ${STYLES[hoveredIndex].bg}99`
                : "0 0 0px transparent",
          }}
          transition={{ duration: 0.25 }}
          style={{
            position: "relative",
            width: 74,
            height: 74,
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "1.5px solid rgba(255,255,255,.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <Logomark size={40} variant="principal" />
        </motion.div>
      </div>

      <div className="engcol">
        {right.map((item, i) => (
          <Pill
            key={item.title}
            item={item}
            index={i + 3}
            isHovered={hoveredIndex === i + 3}
            onHover={() => setHoveredIndex(i + 3)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}
