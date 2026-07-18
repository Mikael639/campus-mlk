"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/formations", label: "Nos formations" },
  { href: "/candidater", label: "Candidater" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/devenir-formateur", label: "Devenir formateur" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(245,245,243,.86)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(22,22,22,.1)",
      }}
    >
      <div
        className="wrap rnavwrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <Image
            src="/images/logotype.png"
            alt="MLK Campus"
            width={190}
            height={46}
            style={{ height: 46, width: "auto", display: "block" }}
            priority
          />
        </Link>
        <div
          className="rnavlinks"
          style={{ display: "flex", gap: 30, alignItems: "center" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname.startsWith(l.href) ? "navl on" : "navl"}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/candidater"
          className="gobtn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 20px",
            border: "1px solid #7a5cf0",
            borderRadius: 40,
            color: "#7a5cf0",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Candidater <span className="ar">→</span>
        </Link>
      </div>
    </div>
  );
}
