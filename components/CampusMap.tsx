"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Repère violet Iris, dessiné en SVG pour éviter les soucis classiques
   de chemins d'images cassés avec les icônes par défaut de Leaflet. */
const pin = L.divIcon({
  className: "",
  html: `<svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0Z" fill="#8d7cff"/>
    <circle cx="17" cy="17" r="7" fill="#f9f9f9"/>
  </svg>`,
  iconSize: [34, 44],
  iconAnchor: [17, 44],
});

/* 2 rue Tirard, 94000 Créteil */
const CENTER: [number, number] = [48.7913965, 2.4499309];

export default function CampusMap() {
  return (
    <MapContainer
      center={CENTER}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: "100%", height: 200 }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={CENTER} icon={pin} />
    </MapContainer>
  );
}
