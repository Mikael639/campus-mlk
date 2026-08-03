/* Bande des 8 couleurs secondaires de la charte, en haut et en bas des sections sombres. */
export const BRAND_COLORS = [
  "#f4bf4c", // Safran
  "#91bcff", // Bleu ciel
  "#e84d72", // Framboise
  "#ba7eee", // Lavande
  "#4ec5a5", // Turquoise
  "#d1ff5e", // Lime
  "#1b5cff", // Bleu électrique
  "#e87551", // Orange corail
];

export default function BrandStripe({ height = 7 }: { height?: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${BRAND_COLORS.length}, 1fr)`,
        height,
      }}
      aria-hidden
    >
      {BRAND_COLORS.map((c) => (
        <div key={c} style={{ background: c }} />
      ))}
    </div>
  );
}
