# MLK Campus — Site institutionnel

Site vitrine du **MLK Campus**, Centre de Formation d'Apprentis (CFA) à Créteil (94).
Développé avec **Next.js (App Router) + Tailwind CSS + TypeScript**, d'après le handoff design v2 (charte graphique officielle).

## Démarrer

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Structure

| Route | Page |
|---|---|
| `/` | Accueil (hero, chiffres clés, vidéo, formations, pourquoi, CTA) |
| `/formations` | Liste des 5 formations |
| `/formations/[slug]` | Fiche formation (5 fiches statiques) |
| `/candidater` | Conditions + formulaire de candidature |
| `/entreprises` | Avantages + formulaire entreprises |
| `/devenir-formateur` | Profil recherché + candidature formateur |
| `/faq` | FAQ accordéon par thème |
| `/contact` | Coordonnées + formulaire |

- `lib/formations.ts`, `lib/faq.ts`, `lib/siteSettings.ts` — récupèrent le contenu depuis Sanity (voir section CMS ci-dessous)
- `components/` — Nav, Footer, FormationCard, FaqAccordion, formulaires
- `app/globals.css` — charte graphique (couleurs, boutons, animations, responsive)

## CMS (Sanity) — contenu éditable sans redéploiement

Le contenu (formations, FAQ, coordonnées) n'est plus codé en dur : il vit dans un projet Sanity et le site va le chercher à chaque requête.

- **Studio d'édition (en ligne, aucune installation requise)** : https://mlk-campus.sanity.studio/
- **Projet Sanity** : `43wv301p`, dataset `production`
- **Studio local** (optionnel, pour un développeur) : dossier `studio/` → `cd studio && npm install && npm run dev` (ouvre sur http://localhost:3333)
- Le site lit les variables `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` depuis `.env.local` (non commité)

**Ce qui est éditable dans le Studio, sans toucher au code :**
- **Les 7 pages du site** (Accueil, Nos formations, Candidater, Entreprises, Devenir formateur, FAQ, Contact) : tous les wordings — titres, intros, listes, libellés de boutons, encadrés
- **Formation** : titre, catégorie, couleur de filière, niveau, certification, présentation, compétences, débouchés, **photo** (avec recadrage intelligent)
- **Groupe de FAQ** : titre du groupe et ses questions/réponses
- **Coordonnées du site** : adresse, email, transport (utilisées sur la page Contact)
- **Photos** : hero de l'accueil et visuel de chaque formation — un upload dans le Studio remplace le bloc hachuré, l'image est optimisée automatiquement (CDN Sanity + next/image)

**Visual Editing (édition en cliquant sur la page)** : le Studio local inclut l'onglet **Présentation** — il affiche le site dans le Studio et chaque texte devient cliquable pour ouvrir le champ correspondant. Pour l'utiliser :
1. Lancer les deux serveurs : `npm run dev` (site, port 3000) et `cd studio && npm run dev` (Studio, port 3333)
2. Ouvrir http://localhost:3333, se connecter, onglet **Présentation**
3. Cliquer sur n'importe quel texte de la page → le champ s'ouvre à droite, la modification s'affiche en direct

Les publications apparaissent sur le site en quelques secondes (Live Content API — pas de redéploiement).

**Modifier le schéma** (ajouter un champ, un type de contenu) : éditer les fichiers dans `studio/schemaTypes/`, puis déployer avec `npx sanity schema deploy` depuis `studio/` (nécessite d'être connecté avec un compte ayant les droits sur le projet — `npx sanity login`).

⚠️ Le compte propriétaire du projet `43wv301p` est différent du compte Google connecté par défaut sur cette machine (`m7mhuac7`, un autre projet Sanity préexistant). Si `npx sanity schema deploy` échoue avec une erreur de permission, il faut se reconnecter avec le bon compte (`npx sanity login`) ou faire ajouter ce compte comme membre du projet via https://sanity.io/manage/project/43wv301p.

## Charte graphique

| Token | Valeur | Usage |
|---|---|---|
| Porcelaine | `#f5f5f3` | Fond de page |
| Graphite | `#161616` | Texte, sections sombres, footer |
| Iris | `#7a5cf0` | **Interactif uniquement** (boutons, liens, hover, focus) |
| Lilas | `#ad8ee8` | **Informatif** (eyebrows, badges non cliquables) |
| Lime | `#cdf24f` | Accents sur fond Graphite |

Couleurs par filière : Safran (Monteur), Lavande (Graphiste), Turquoise (Cuisinier), Bleu ciel (Commis), Corail (Serveur) — définies dans `lib/formations.ts`.

## Vidéo d'introduction

La vidéo de présentation (`public/videos/mlk-campus-film.mp4`, H.264 720p, 6 min 40, ~22 Mo) est intégrée sur l'accueil via `components/VideoSection.tsx`, avec un poster extrait du film (`public/images/video-poster.jpg`). Le fichier est remuxé en `faststart` pour la lecture progressive. Si le poids devient un problème en production, envisager un hébergement YouTube/Vimeo non répertorié ou un CDN.

## Reste à faire (assets cliente)

- **Polices** : les titres utilisent Fraunces (Google Fonts) en équivalent temporaire — remplacer par le kit Adobe Fonts (Typekit) **New Spirit** + Helvetica Neue sur le compte de la cliente (contact : Karine).
- **Photos** : les blocs `.ph` sont des emplacements réservés (hero, cartes formations, campus).
- **Carte** (page contact) : Google Maps/OpenStreetMap centrée sur « 1 rue Martin Luther King, 94000 Créteil ».
- **Backend formulaires** : les 4 formulaires affichent la confirmation côté client ; brancher l'envoi vers le CRM/service email dans `components/forms.tsx` (contact : Anne-Sophie).
