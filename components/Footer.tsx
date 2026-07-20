import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/formations", label: "Nos formations" },
  { href: "/candidater", label: "Candidater" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/devenir-formateur", label: "Devenir formateur" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <div style={{ background: "#0f0f0f", color: "#c9c9c9" }}>
      <div
        className="wrap rg1"
        style={{
          paddingTop: 54,
          paddingBottom: 34,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ marginBottom: 16 }}>
            <Image
              src="/images/logotype-blanc.png"
              alt="MLK Campus"
              width={215}
              height={52}
              style={{ height: 52, width: "auto", display: "block" }}
            />
          </div>
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.6,
              color: "#9a9a9a",
              margin: 0,
              maxWidth: 280,
            }}
          >
            Centre de Formation d&apos;Apprentis · Créteil (94). Construisez
            votre avenir professionnel en apprentissage.
          </p>
        </div>
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#8a8a8a",
              marginBottom: 14,
            }}
          >
            Navigation
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 9,
              fontSize: 13.5,
              alignItems: "flex-start",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="navl"
                style={{ color: "#c9c9c9" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#8a8a8a",
              marginBottom: 14,
            }}
          >
            Coordonnées
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.7, color: "#c9c9c9" }}>
            1 rue Martin Luther King
            <br />
            94000 Créteil
            <br />
            campus@mlkgrandparis.com
            <br />
            Tramway T9 · RER D
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div
          className="wrap"
          style={{
            paddingTop: 18,
            paddingBottom: 22,
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 12,
            color: "#8a8a8a",
          }}
        >
          <span>
            © 2027 MLK Campus ·{" "}
            <Link href="/mentions-legales" className="navl" style={{ color: "#8a8a8a" }}>
              Mentions légales
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
