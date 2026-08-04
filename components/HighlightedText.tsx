/*
  Fait ressortir un passage précis d'un texte en le colorant (charte : Framboise,
  la couleur la plus proche d'un vrai rouge dans la palette). Si le passage ne se
  retrouve pas mot pour mot dans le texte (ex. après une modification côté Sanity),
  le texte s'affiche simplement sans mise en couleur — pas d'erreur.
*/
export default function HighlightedText({
  text,
  highlight,
  color = "#e84d72",
}: {
  text: string;
  highlight: string;
  color?: string;
}) {
  const i = text.indexOf(highlight);
  if (i === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, i)}
      <span style={{ color, fontWeight: 600 }}>{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}
