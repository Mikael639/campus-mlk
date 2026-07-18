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
  ],
  preview: {
    prepare() {
      return {title: 'Coordonnées du site'}
    },
  },
})
