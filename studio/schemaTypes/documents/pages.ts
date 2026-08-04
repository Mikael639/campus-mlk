import {defineType, defineField, defineArrayMember} from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'
import {DocumentIcon} from '@sanity/icons/Document'

/* Contenus éditoriaux des pages du site — un document unique par page. */

export const homePage = defineType({
  name: 'homePage',
  title: 'Page : Accueil',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({name: 'heroBadge', title: 'Pastille du hero', type: 'string'}),
    defineField({name: 'heroTitleStart', title: 'Titre — début', type: 'string'}),
    defineField({
      name: 'heroWordLogo',
      title: 'Titre — mot avec logomark',
      type: 'string',
      description: 'Le premier « o » de ce mot est remplacé par le logomark violet',
    }),
    defineField({name: 'heroTitleMiddle', title: 'Titre — mot de liaison', type: 'string'}),
    defineField({name: 'heroTitleAccent', title: 'Titre — mot en violet italique', type: 'string'}),
    defineField({name: 'heroText', title: 'Texte du hero', type: 'text', rows: 3}),
    defineField({name: 'heroCta1', title: 'Bouton principal', type: 'string'}),
    defineField({name: 'heroCta2', title: 'Bouton secondaire', type: 'string'}),
    defineField({
      name: 'heroImage',
      title: 'Photo du hero',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Texte alternatif', type: 'string'})],
    }),
    defineField({
      name: 'stats',
      title: 'Chiffres clés',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({name: 'n', title: 'Chiffre', type: 'string'}),
            defineField({name: 'label', title: 'Libellé', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'promesse',
      title: 'Promesse (3 engagements courts sous le hero)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.max(3),
    }),
    defineField({name: 'videoTitle', title: 'Titre de la section vidéo', type: 'string'}),
    defineField({name: 'videoText', title: 'Texte de la section vidéo', type: 'text', rows: 3}),
    defineField({name: 'videoLabel', title: 'Libellé du bouton vidéo', type: 'string'}),
    defineField({name: 'formationsTitle', title: 'Titre de la section formations', type: 'string'}),
    defineField({name: 'pourquoiBadge', title: 'Pourquoi — pastille', type: 'string'}),
    defineField({name: 'pourquoiTitle', title: 'Pourquoi — titre', type: 'string'}),
    defineField({
      name: 'engagements',
      title: 'Pourquoi — engagements (6)',
      description:
        'Affichés en étoile autour du logomark. Les couleurs suivent la charte, dans l’ordre de la liste.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'engagement',
          fields: [
            defineField({name: 'title', title: 'Titre', type: 'string'}),
            defineField({name: 'text', title: 'Description', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'title', subtitle: 'text'}},
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({name: 'ctaTitle', title: 'CTA final — titre', type: 'string'}),
    defineField({name: 'ctaText', title: 'CTA final — texte', type: 'string'}),
    defineField({name: 'ctaButton', title: 'CTA final — bouton', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Accueil'})},
})

export const formationsPage = defineType({
  name: 'formationsPage',
  title: 'Page : Nos formations',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'string'}),
    defineField({name: 'intro1', title: 'Introduction — paragraphe 1', type: 'text', rows: 3}),
    defineField({name: 'intro2', title: 'Introduction — paragraphe 2', type: 'text', rows: 2}),
    defineField({name: 'highlight', title: 'Phrase mise en avant (violet)', type: 'string'}),
    defineField({name: 'ctaTitle', title: 'Carte contact — titre', type: 'string'}),
    defineField({name: 'ctaText', title: 'Carte contact — texte', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Nos formations'})},
})

export const candidaterPage = defineType({
  name: 'candidaterPage',
  title: 'Page : Candidater',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'string'}),
    defineField({name: 'intro1', title: 'Introduction — paragraphe 1', type: 'text', rows: 3}),
    defineField({name: 'intro2', title: 'Introduction — paragraphe 2', type: 'text', rows: 2}),
    defineField({name: 'conditionsTitle', title: 'Conditions — titre', type: 'string'}),
    defineField({name: 'conditionsText', title: 'Conditions — texte', type: 'text', rows: 2}),
    defineField({
      name: 'conditionsItems',
      title: 'Conditions — liste',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'selectionTitle', title: 'Sélection — titre', type: 'string'}),
    defineField({
      name: 'selectionSteps',
      title: 'Sélection — étapes',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'goodToKnow', title: 'Encadré « Bon à savoir »', type: 'text', rows: 2}),
    defineField({name: 'formTitle', title: 'Formulaire — titre', type: 'string'}),
    defineField({name: 'formText', title: 'Formulaire — texte', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Candidater'})},
})

export const entreprisesPage = defineType({
  name: 'entreprisesPage',
  title: 'Page : Entreprises',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'string'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 3}),
    defineField({name: 'avantagesIntro', title: 'Avantages — introduction', type: 'text', rows: 2}),
    defineField({
      name: 'avantages',
      title: 'Avantages — liste (5)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'avantagesCard', title: 'Avantages — carte sombre', type: 'string'}),
    defineField({name: 'accTitle', title: 'Accompagnement — titre', type: 'string'}),
    defineField({name: 'accText', title: 'Accompagnement — texte', type: 'text', rows: 2}),
    defineField({
      name: 'accItems',
      title: 'Accompagnement — liste',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'formTitle', title: 'Formulaire — titre', type: 'string'}),
    defineField({name: 'formText', title: 'Formulaire — texte', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Entreprises'})},
})

export const formateurPage = defineType({
  name: 'formateurPage',
  title: 'Page : Devenir formateur',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'string'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 3}),
    defineField({name: 'profilTitle', title: 'Profil — titre', type: 'string'}),
    defineField({name: 'profilText', title: 'Profil — texte', type: 'text', rows: 2}),
    defineField({
      name: 'profilItems',
      title: 'Profil — liste',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'modTitle', title: 'Modalités — titre', type: 'string'}),
    defineField({name: 'modText', title: 'Modalités — texte', type: 'text', rows: 2}),
    defineField({name: 'statut', title: 'Modalités — statut', type: 'string'}),
    defineField({name: 'remuneration', title: 'Modalités — rémunération', type: 'string'}),
    defineField({name: 'lieu', title: 'Modalités — lieu', type: 'string'}),
    defineField({name: 'acces', title: 'Modalités — accès', type: 'string'}),
    defineField({
      name: 'domaines',
      title: 'Domaines de recrutement',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'formTitle', title: 'Formulaire — titre', type: 'string'}),
    defineField({name: 'formText', title: 'Formulaire — texte', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Devenir formateur'})},
})

export const faqPage = defineType({
  name: 'faqPage',
  title: 'Page : FAQ',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'string'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 2}),
    defineField({name: 'ctaTitle', title: 'Carte contact — titre', type: 'string'}),
    defineField({name: 'ctaText', title: 'Carte contact — texte', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'FAQ'})},
})

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Page : Contact',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'string'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 2}),
  ],
  preview: {prepare: () => ({title: 'Contact'})},
})
