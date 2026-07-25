"use client";

import dynamic from "next/dynamic";

/* Leaflet a besoin du DOM du navigateur : chargement client uniquement. */
const CampusMap = dynamic(() => import("./CampusMap"), {
  ssr: false,
  loading: () => (
    <div className="ph" data-l="Carte" style={{ height: 200 }} />
  ),
});

export default function CampusMapLoader() {
  return <CampusMap />;
}
