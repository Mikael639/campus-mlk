import Image from "next/image";

/*
  Logomark officiel MLK Campus, dans les trois déclinaisons fournies par la
  cliente. Toujours utiliser ces fichiers : ne jamais redessiner l'astérisque
  en SVG, ses proportions et ses transparences sont propres à la charte.
    - principal : multicolore (fonds clairs et sombres)
    - iris      : violet (sur fond clair ou sombre)
    - blanc     : sur fond coloré ou sombre
*/
export type LogomarkVariant = "principal" | "iris" | "blanc";

export default function Logomark({
  size = 24,
  variant = "principal",
}: {
  size?: number;
  variant?: LogomarkVariant;
}) {
  return (
    <Image
      src={`/images/logomark-${variant}.png`}
      alt=""
      width={size}
      height={size}
      style={{ display: "inline-block", verticalAlign: "middle" }}
      aria-hidden
    />
  );
}
