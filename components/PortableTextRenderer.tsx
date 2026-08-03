import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/formations";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="nr" style={{ fontSize: 28, margin: "36px 0 16px" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="nr" style={{ fontSize: 22, margin: "28px 0 12px" }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.7,
          color: "#3d3d3d",
          margin: "0 0 18px",
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "3px solid #8d7cff",
          margin: "24px 0",
          padding: "4px 0 4px 20px",
          fontStyle: "italic",
          color: "#2b2b2b",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        style={{ color: "#8d7cff", fontWeight: 600 }}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong style={{ color: "#1a1a1a" }}>{children}</strong>,
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ margin: "0 0 18px", paddingLeft: 22 }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ margin: "0 0 18px", paddingLeft: 22 }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ fontSize: 16, lineHeight: 1.7, color: "#3d3d3d" }}>{children}</li>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null;
      return (
        <Image
          src={urlForImage(value).width(1000).url()}
          alt={value.alt ?? ""}
          width={1000}
          height={620}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 18,
            margin: "24px 0",
          }}
        />
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: unknown }) {
  return <PortableText value={value as never} components={components} />;
}
