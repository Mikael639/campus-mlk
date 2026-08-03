import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Coordonnées du site',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
      initialValue: '1 rue Martin Luther King, 94000 Créteil',
    }),
    defineField({
      name: 'email',
      title: 'Email de contact',
      type: 'string',
      validation: (rule) => rule.email(),
      initialValue: 'campus@mlkgrandparis.com',
    }),
    defineField({
      name: 'transport',
      title: 'Transport',
      type: 'string',
      initialValue: 'Tramway T9 (Créteil-Préfecture) · RER D (Créteil-Pompadour)',
    }),
    defineField({
      name: 'footerText',
      title: 'Pied de page — texte de présentation',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socials',
      title: 'Réseaux sociaux',
      description:
        'Laissez vide pour masquer une icône. Seuls les réseaux renseignés apparaissent dans le pied de page.',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'facebook', title: 'Facebook (URL)', type: 'url'}),
        defineField({name: 'twitter', title: 'X / Twitter (URL)', type: 'url'}),
        defineField({name: 'linkedin', title: 'LinkedIn (URL)', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram (URL)', type: 'url'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Coordonnées du site'}
    },
  },
})
