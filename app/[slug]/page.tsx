import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGenericPage, getGenericPageSlugs } from "@/lib/genericPages";
import PortableTextRenderer from "@/components/PortableTextRenderer";

/*
  Route générique pour les pages créées librement dans Sanity
  (titre + texte + images), sans intervention développeur.
  Next.js priorise les routes statiques (/formations, /contact, etc.)
  sur cette route dynamique : pas de conflit possible.
*/

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getGenericPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getGenericPage(slug);
  if (!page) return {};
  return { title: page.title, description: page.intro };
}

export default async function GenericPage({ params }: Props) {
  const { slug } = await params;
  const page = await getGenericPage(slug);
  if (!page) notFound();

  return (
    <div className="pg">
      <div
        className="wrap"
        style={{
          paddingTop: 60,
          paddingBottom: 60,
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        {page.eyebrow && (
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            {page.eyebrow}
          </div>
        )}
        <h1
          className="nr"
          style={{ fontSize: 44, lineHeight: 1.06, margin: "0 0 22px" }}
        >
          {page.title}
        </h1>
        {page.intro && (
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#4a4a4a",
              margin: "0 0 34px",
            }}
          >
            {page.intro}
          </p>
        )}
        {page.body && <PortableTextRenderer value={page.body} />}
      </div>
    </div>
  );
}
