"use client";

import { useState } from "react";
import type { FaqGroup } from "@/lib/faq";

/* Accordéon FAQ — une seule question ouverte à la fois, icône "+" Iris qui pivote à 45°. */
export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div style={{ maxWidth: 840, margin: "0 auto" }}>
      {groups.map((g, gi) => (
        <div key={g.title} style={{ marginBottom: 38 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            {g.title}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {g.items.map((qa, ii) => {
              const key = `${gi}-${ii}`;
              const open = openKey === key;
              return (
                <div key={key} className="card" style={{ overflow: "hidden" }}>
                  <button
                    className="faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenKey(open ? null : key)}
                  >
                    <span
                      style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}
                    >
                      {qa.q}
                    </span>
                    <span className={open ? "faq-ic open" : "faq-ic"}>+</span>
                  </button>
                  <div className={open ? "faq-a open" : "faq-a"}>
                    <div
                      style={{
                        padding: "0 26px 22px",
                        fontSize: 14.5,
                        lineHeight: 1.65,
                        color: "#3d3d3d",
                      }}
                    >
                      {qa.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
