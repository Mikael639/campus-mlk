"use client";

import { useVisualEditingEnvironment } from "next-sanity/hooks";

/* Bouton pour quitter le mode brouillon quand on consulte le site hors du Studio. */
export function DisableDraftMode() {
  const environment = useVisualEditingEnvironment();
  // Masqué dans le Presentation Tool (le Studio gère lui-même le mode brouillon)
  if (
    environment === "presentation-iframe" ||
    environment === "presentation-window"
  )
    return null;

  return (
    <a
      href="/api/draft-mode/disable"
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 100,
        background: "#141414",
        color: "#f5f5f3",
        padding: "10px 18px",
        borderRadius: 30,
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      Quitter le mode brouillon
    </a>
  );
}
