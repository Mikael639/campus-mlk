"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import type { Formation } from "@/lib/formations";

/*
  Formulaires du site — la soumission affiche l'état de confirmation
  (carte Graphite + coche), comme spécifié dans le prototype.
  Le branchement backend (CRM / service email — Anne-Sophie) reste à faire :
  brancher l'envoi dans handleSubmit.
*/

function useSent() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return { sent, handleSubmit };
}

function Confirmation({ title, message }: { title: string; message: string }) {
  return (
    <div
      className="scrim card"
      style={{
        padding: 46,
        textAlign: "center",
        background: "#1a1a1a",
        color: "#f9f9f9",
        border: "none",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#f9f9f9",
          color: "#8d7cff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          margin: "0 auto 18px",
        }}
      >
        ✓
      </div>
      <h3 className="nr" style={{ fontSize: 26, margin: "0 0 10px" }}>
        {title}
      </h3>
      <p style={{ fontSize: 15, color: "#cfcfcf", margin: 0 }}>{message}</p>
    </div>
  );
}

function Field({
  label,
  required,
  span2,
  children,
}: {
  label: string;
  required?: boolean;
  span2?: boolean;
  children: ReactNode;
}) {
  return (
    <div style={span2 ? { gridColumn: "span 2" } : undefined}>
      <label className="lbl">
        {label} {required && <span className="req">*</span>}
      </label>
      {children}
    </div>
  );
}

const gridFormStyle = {
  padding: "36px 38px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
} as const;

const submitRowStyle = {
  gridColumn: "span 2",
  display: "flex",
  justifyContent: "flex-end",
} as const;

export function CandidaterForm({ formations }: { formations: Formation[] }) {
  const { sent, handleSubmit } = useSent();
  if (sent)
    return (
      <Confirmation
        title="Candidature envoyée !"
        message="Merci. Notre équipe pédagogique vous recontactera sous 5 jours ouvrés."
      />
    );
  return (
    <form className="card rg1" onSubmit={handleSubmit} style={gridFormStyle}>
      <Field label="Nom et prénom" required>
        <input className="fld" required placeholder="Votre nom complet" />
      </Field>
      <Field label="Adresse e-mail" required>
        <input className="fld" required type="email" placeholder="vous@email.com" />
      </Field>
      <Field label="Numéro de téléphone" required>
        <input className="fld" required placeholder="06 00 00 00 00" />
      </Field>
      <Field label="Formation souhaitée" required>
        <select className="fld" required defaultValue="">
          <option value="" disabled>
            Sélectionnez…
          </option>
          {formations.map((f) => (
            <option key={f.id}>{f.title}</option>
          ))}
        </select>
      </Field>
      <Field label="Niveau de formation actuel" required>
        <input className="fld" required placeholder="Ex. Bac, CAP, niveau 3…" />
      </Field>
      <Field label="Avez-vous déjà un employeur ?">
        <select className="fld" defaultValue="">
          <option value="" disabled>
            Sélectionnez…
          </option>
          <option>Oui</option>
          <option>Non</option>
          <option>En recherche</option>
        </select>
      </Field>
      <Field label="Message / motivation" span2>
        <textarea className="fld" rows={4} placeholder="Parlez-nous de votre projet…" />
      </Field>
      <div style={submitRowStyle}>
        <button type="submit" className="btnA gobtn">
          Envoyer ma candidature <span className="ar">→</span>
        </button>
      </div>
    </form>
  );
}

export function EntreprisesForm({ formations }: { formations: Formation[] }) {
  const { sent, handleSubmit } = useSent();
  if (sent)
    return (
      <Confirmation
        title="Demande envoyée !"
        message="Merci. Notre équipe partenariats vous recontactera sous 48 heures ouvrées."
      />
    );
  return (
    <form className="card rg1" onSubmit={handleSubmit} style={gridFormStyle}>
      <Field label="Raison sociale de l'entreprise" required span2>
        <input className="fld" required placeholder="Nom de l'entreprise" />
      </Field>
      <Field label="Nom et prénom du contact" required>
        <input className="fld" required placeholder="Votre nom" />
      </Field>
      <Field label="Fonction" required>
        <input className="fld" required placeholder="Votre fonction" />
      </Field>
      <Field label="Adresse e-mail professionnelle" required>
        <input className="fld" required type="email" placeholder="vous@entreprise.com" />
      </Field>
      <Field label="Numéro de téléphone" required>
        <input className="fld" required placeholder="01 00 00 00 00" />
      </Field>
      <Field label="Formation(s) qui vous intéressent" span2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 4 }}>
          {formations.map((f) => (
            <label
              key={f.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13.5,
              }}
            >
              <input type="checkbox" className="chk" /> {f.title}
            </label>
          ))}
        </div>
      </Field>
      <Field label="Message" span2>
        <textarea className="fld" rows={4} placeholder="Votre besoin de recrutement…" />
      </Field>
      <div style={submitRowStyle}>
        <button type="submit" className="btnA gobtn">
          Envoyer ma demande <span className="ar">→</span>
        </button>
      </div>
    </form>
  );
}

export function FormateurForm() {
  const { sent, handleSubmit } = useSent();
  if (sent)
    return (
      <Confirmation
        title="Candidature envoyée !"
        message="Merci. Notre responsable pédagogique vous contactera pour un échange."
      />
    );
  return (
    <form className="card rg1" onSubmit={handleSubmit} style={gridFormStyle}>
      <Field label="Nom et prénom" required>
        <input className="fld" required placeholder="Votre nom complet" />
      </Field>
      <Field label="Adresse e-mail" required>
        <input className="fld" required type="email" placeholder="vous@email.com" />
      </Field>
      <Field label="Numéro de téléphone" required>
        <input className="fld" required placeholder="06 00 00 00 00" />
      </Field>
      <Field label="Domaine d'expertise" required>
        <select className="fld" required defaultValue="">
          <option value="" disabled>
            Sélectionnez…
          </option>
          <option>Audiovisuel et montage vidéo</option>
          <option>Arts graphiques et design</option>
          <option>Cuisine et arts culinaires</option>
          <option>Service en restauration et hôtellerie</option>
        </select>
      </Field>
      <Field label="Années d'expérience" required>
        <input className="fld" required placeholder="Ex. 8 ans" />
      </Field>
      <Field label="Déjà exercé comme formateur ?">
        <select className="fld" defaultValue="">
          <option value="" disabled>
            Sélectionnez…
          </option>
          <option>Oui</option>
          <option>Non</option>
        </select>
      </Field>
      <Field label="CV (fichier joint)" required span2>
        <label
          style={{
            display: "block",
            border: "1.5px dashed rgba(22,22,22,.25)",
            borderRadius: 11,
            padding: 22,
            textAlign: "center",
            fontSize: 13.5,
            color: "#6b6b6b",
            background: "#ffffff",
            cursor: "pointer",
          }}
        >
          Glissez votre CV ici ou{" "}
          <span style={{ color: "#8d7cff", fontWeight: 600 }}>
            parcourez vos fichiers
          </span>
          <div style={{ fontSize: 11.5, marginTop: 4, color: "#9a9a9a" }}>
            PDF, DOC — 5 Mo max
          </div>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
          />
        </label>
      </Field>
      <Field label="Lettre de motivation ou message" span2>
        <textarea
          className="fld"
          rows={4}
          placeholder="Présentez votre parcours et votre motivation…"
        />
      </Field>
      <div style={submitRowStyle}>
        <button type="submit" className="btnA gobtn">
          Envoyer ma candidature <span className="ar">→</span>
        </button>
      </div>
    </form>
  );
}

export function ContactForm() {
  const { sent, handleSubmit } = useSent();
  if (sent)
    return (
      <Confirmation
        title="Message envoyé !"
        message="Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais."
      />
    );
  return (
    <form
      className="card"
      onSubmit={handleSubmit}
      style={{
        padding: "34px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <Field label="Nom et prénom" required>
        <input className="fld" required placeholder="Votre nom complet" />
      </Field>
      <Field label="Adresse e-mail" required>
        <input className="fld" required type="email" placeholder="vous@email.com" />
      </Field>
      <Field label="Objet" required>
        <select className="fld" required defaultValue="">
          <option value="" disabled>
            Sélectionnez…
          </option>
          <option>Candidature</option>
          <option>Apprenti</option>
          <option>Devenir formateur</option>
          <option>Autre</option>
        </select>
      </Field>
      <Field label="Message" required>
        <textarea className="fld" required rows={5} placeholder="Votre message…" />
      </Field>
      <button
        type="submit"
        className="btnA gobtn"
        style={{ alignSelf: "flex-start" }}
      >
        Envoyer <span className="ar">→</span>
      </button>
    </form>
  );
}
