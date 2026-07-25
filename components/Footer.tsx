import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "@/lib/navigation";
import type { SiteSettings } from "@/lib/siteSettings";

export default function Footer({
  items,
  settings,
}: {
  items: NavItem[];
  settings: SiteSettings;
}) {
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
            {items.map((l) => (
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
            {settings.address.split(",").map((line) => (
              <span key={line}>
                {line.trim()}
                <br />
              </span>
            ))}
            {settings.email}
            <br />
            {settings.transport}
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
