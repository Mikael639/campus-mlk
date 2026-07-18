import {defineType, defineField, defineArrayMember} from 'sanity'
import {BookIcon} from '@sanity/icons/Book'

export const formation = defineType({
  name: 'formation',
  title: 'Formation',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cat',
      title: 'Catégorie',
      type: 'string',
      description: 'Ex. Audiovisuel, Arts graphiques, Restauration…',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Couleur de la filière',
      type: 'string',
      description: 'Code couleur hexadécimal, ex. #f6c231',
      validation: (rule) =>
        rule
          .required()
          .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)
          .error('Doit être un code couleur hexadécimal, ex. #f6c231'),
    }),
    defineField({
      name: 'level',
      title: 'Niveau (badge court)',
      type: 'string',
      description: 'Ex. Niveau 3, Niveau 5',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'levelEq',
      title: 'Niveau (équivalence)',
      type: 'string',
      description: 'Ex. Niveau 5 — équivalent BTS',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cert',
      title: 'Certification',
      type: 'string',
      description: 'Ex. Titre Professionnel Graphiste — Niveau 5',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short',
      title: 'Description courte',
      type: 'string',
      description: 'Utilisée sur les cartes de la page d\'accueil',
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: 'tagline',
      title: 'Accroche',
      type: 'text',
      rows: 2,
      description: 'Utilisée sur la liste des formations et la fiche formation',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'presentation',
      title: 'Présentation',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Compétences acquises',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'debouches',
      title: 'Débouchés',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Photo de la formation',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Les formations sont triées par ce nombre, du plus petit au plus grand',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'cat',
      media: 'image',
    },
  },
})
