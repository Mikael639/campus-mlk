import {defineType, defineField, defineArrayMember} from 'sanity'
import {MenuIcon} from '@sanity/icons/Menu'

export const navigation = defineType({
  name: 'navigation',
  title: 'Menu de navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Liens du menu',
      type: 'array',
      description: 'Ces liens apparaissent dans le menu du haut ET dans le pied de page.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          fields: [
            defineField({
              name: 'label',
              title: 'Texte du lien',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Destination',
              type: 'string',
              description:
                'Ex. /formations ou /nouvelle-page. Pour une page créée ici, utilisez /suivi-du-slug-de-la-page.',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        }),
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: "Bouton d'appel à l'action — texte",
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: "Bouton d'appel à l'action — destination",
      type: 'string',
    }),
  ],
})
