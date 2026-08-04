"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Navigation } from "@/lib/navigation";
import Logomark from "./Logomark";

export default function Nav({ items, ctaLabel, ctaHref }: Navigation) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          className="gobtn rcta-desktop"
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

        <button
          type="button"
          className="navburger"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            width: 40,
            height: 40,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#1a1a1a",
              borderRadius: 2,
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#1a1a1a",
              borderRadius: 2,
              transition: "opacity 0.3s",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#1a1a1a",
              borderRadius: 2,
              transition: "transform 0.3s",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ overflow: "hidden", background: "#f9f9f9" }}
            className="navmobile"
          >
            <div
              className="wrap"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                paddingTop: 8,
                paddingBottom: 24,
              }}
            >
              {items.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={isActive(l.href) ? "navl on" : "navl"}
                  style={{
                    padding: "13px 4px",
                    fontSize: 16,
                    borderBottom: "1px solid rgba(22,22,22,.08)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                className="gobtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "13px 22px",
                  border: "none",
                  borderRadius: 40,
                  background: "#8d7cff",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 600,
                  marginTop: 16,
                }}
              >
                {ctaLabel} <Logomark size={17} variant="blanc" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
