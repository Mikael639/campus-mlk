import Link from "next/link";
import type { NavItem } from "@/lib/navigation";
import type { SiteSettings } from "@/lib/siteSettings";
import BrandStripe from "./BrandStripe";
import Logomark from "./Logomark";

/* Icônes réseaux sociaux (contours simples, alignées sur la sobriété du pied de page). */
const SOCIAL_ICONS: Record<string, string> = {
  facebook:
    "M13.5 9H15V6.5h-1.9C11 6.5 10.3 8 10.3 9.6V11H9v2.5h1.3V19h2.6v-5.5h1.8l.3-2.5h-2.1V9.9c0-.6.2-.9.9-.9Z",
  twitter:
    "M17.5 6h-2.1l-3 3.7L9.8 6H6l4.4 6-4.3 6h2.1l3.2-3.9 2.7 3.9H18l-4.6-6.4L17.5 6Z",
  linkedin:
    "M8.3 18V10.2H6V18h2.3ZM7.1 9.2c.8 0 1.3-.5 1.3-1.2 0-.7-.5-1.2-1.3-1.2s-1.3.5-1.3 1.2c0 .7.5 1.2 1.3 1.2ZM18 18v-4.5c0-2.2-1.2-3.2-2.7-3.2-1.3 0-1.9.7-2.2 1.2v-1H10.8c0 .7 0 7.5 0 7.5h2.3v-4.3c0-.2 0-.4.1-.6.2-.4.6-.9 1.3-.9.9 0 1.3.7 1.3 1.8V18H18Z",
  instagram:
    "M12 7.6c1.4 0 1.6 0 2.2.1.5 0 .8.1 1 .2.3.1.4.2.6.4.2.2.3.4.4.6.1.2.2.5.2 1 0 .6.1.8.1 2.2s0 1.6-.1 2.2c0 .5-.1.8-.2 1-.1.3-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-1 .2-.6 0-.8.1-2.2.1s-1.6 0-2.2-.1c-.5 0-.8-.1-1-.2-.3-.1-.4-.2-.6-.4a1.6 1.6 0 0 1-.4-.6c-.1-.2-.2-.5-.2-1 0-.6-.1-.8-.1-2.2s0-1.6.1-2.2c0-.5.1-.8.2-1 .1-.3.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.2 1-.2.6 0 .8-.1 2.2-.1Zm0 3a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm0-1.4a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Zm3.6-.2a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Z",
};

function SocialLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      style={{ color: "#9a9a9a", display: "inline-flex" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d={SOCIAL_ICONS[name]} />
      </svg>
    </a>
  );
}

export default function Footer({
  items,
  settings,
}: {
  items: NavItem[];
  settings: SiteSettings;
}) {
  const [street, city] = settings.address.split(",").map((s) => s.trim());
  const mapUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(
    settings.address,
  )}`;
  const socials = Object.entries(settings.socials ?? {}).filter(
    ([name, href]) => href && SOCIAL_ICONS[name],
  ) as [string, string][];

  return (
    <>
      <BrandStripe />
      <div style={{ background: "#1a1a1a", color: "#c9c9c9" }}>
        <div
          className="wrap rg1"
          style={{
            paddingTop: 54,
            paddingBottom: 34,
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 40,
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <Logomark size={38} variant="principal" />
              <span
                className="nr"
                style={{
                  color: "#ffffff",
                  fontSize: 19,
                  lineHeight: 1.05,
                  display: "block",
                }}
              >
                MLK
                <br />
                Campus
              </span>
            </Link>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "#9a9a9a",
                margin: "0 0 20px",
                maxWidth: 300,
              }}
            >
              {settings.footerText}
            </p>
            {socials.length > 0 && (
              <div style={{ display: "flex", gap: 16 }}>
                {socials.map(([name, href]) => (
                  <SocialLink key={name} name={name} href={href} />
                ))}
              </div>
            )}
          </div>

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#ffffff",
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
                fontSize: 13,
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
                fontSize: 13,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 14,
              }}
            >
              Contact
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.7, color: "#c9c9c9" }}>
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
              <br />
              {street}
              {city && (
                <>
                  <br />
                  {city}
                </>
              )}
              <br />
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d1ff5e", fontWeight: 600 }}
              >
                Voir sur la carte ↗
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <div
            className="wrap rcta"
            style={{
              paddingTop: 18,
              paddingBottom: 22,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 14,
              fontSize: 12,
              color: "#8a8a8a",
            }}
          >
            <span>
              © {new Date().getFullYear()} MLK Campus. Tous droits réservés.
            </span>
            <Link
              href="/mentions-legales"
              className="navl"
              style={{ color: "#8a8a8a" }}
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
