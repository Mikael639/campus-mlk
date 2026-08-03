import Logomark from "./Logomark";

export type Engagement = { title: string; text: string };

/* Couleurs des pastilles, dans l'ordre de la charte (3 à gauche, 3 à droite). */
const STYLES = [
  { bg: "#ba7eee", fg: "#1a1a1a" }, // Lavande
  { bg: "#e84d72", fg: "#ffffff" }, // Framboise
  { bg: "#4ec5a5", fg: "#1a1a1a" }, // Turquoise
  { bg: "#d1ff5e", fg: "#1a1a1a" }, // Lime
  { bg: "#1b5cff", fg: "#ffffff" }, // Bleu électrique
  { bg: "#f4bf4c", fg: "#1a1a1a" }, // Safran
];

function Pill({ item, index }: { item: Engagement; index: number }) {
  const { bg, fg } = STYLES[index % STYLES.length];
  return (
    <div
      style={{
        background: bg,
        color: fg,
        borderRadius: 18,
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
        {item.title}
      </div>
      <div style={{ fontSize: 12.5, lineHeight: 1.4, opacity: 0.85 }}>
        {item.text}
      </div>
    </div>
  );
}

export default function EngagementsDiagram({ items }: { items: Engagement[] }) {
  const left = items.slice(0, 3);
  const right = items.slice(3, 6);

  /* Les traits partent du centre vers le milieu de chaque rangée (1/6, 3/6, 5/6). */
  const rows = [50, 150, 250];

  return (
    <div className="engwrap">
      <div className="engcol">
        {left.map((item, i) => (
          <Pill key={item.title} item={item} index={i} />
        ))}
      </div>

      <div className="engcenter">
        <svg
          className="englines"
          viewBox="0 0 100 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          {rows.map((y, i) => (
            <line
              key={`l${y}`}
              x1="50"
              y1="150"
              x2="0"
              y2={y}
              stroke={STYLES[i].bg}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {rows.map((y, i) => (
            <line
              key={`r${y}`}
              x1="50"
              y1="150"
              x2="100"
              y2={y}
              stroke={STYLES[i + 3].bg}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <div
          style={{
            position: "relative",
            width: 74,
            height: 74,
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logomark size={40} variant="principal" />
        </div>
      </div>

      <div className="engcol">
        {right.map((item, i) => (
          <Pill key={item.title} item={item} index={i + 3} />
        ))}
      </div>
    </div>
  );
}
