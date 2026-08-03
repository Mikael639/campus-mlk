"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Navigation } from "@/lib/navigation";
import Logomark from "./Logomark";

export default function Nav({ items, ctaLabel, ctaHref }: Navigation) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(249,249,249,.86)",
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
            width={240}
            height={58}
            style={{ height: 58, width: "auto", display: "block" }}
            priority
          />
        </Link>
        <div
          className="rnavlinks"
          style={{ display: "flex", gap: 30, alignItems: "center" }}
        >
          {items.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "navl on" : "navl"}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href={ctaHref}
          className="gobtn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 22px",
            border: "none",
            borderRadius: 40,
            background: "#8d7cff",
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {ctaLabel} <Logomark size={17} variant="blanc" />
        </Link>
      </div>
    </div>
  );
}
