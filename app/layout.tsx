import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/lib/sanity/live";

/*
  Titres : New Spirit (Adobe Fonts). En attendant le kit Typekit de la cliente,
  Fraunces (Google Fonts) sert d'équivalent visuel — remplacer par le <link>
  Adobe Fonts en production.
*/
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-titles",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "MLK Campus — CFA à Créteil",
    template: "%s · MLK Campus",
  },
  description:
    "MLK Campus est un Centre de Formation d'Apprentis au cœur de Créteil, proposant des formations qualifiantes du niveau 3 au niveau 5 dans des secteurs porteurs. Première rentrée : septembre 2027.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDraftMode = (await draftMode()).isEnabled;
  return (
    <html lang="fr" className={fraunces.variable}>
      <body>
        <Nav />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer />
        <SanityLive />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
