import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'
import {DocumentIcon} from '@sanity/icons/Document'
import {HomeIcon} from '@sanity/icons/Home'
import type {ComponentType} from 'react'

const SINGLETONS = [
  'siteSettings',
  'navigation',
  'homePage',
  'formationsPage',
  'candidaterPage',
  'entreprisesPage',
  'formateurPage',
  'faqPage',
  'contactPage',
]

function singleton(
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon: ComponentType,
) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu du site')
    .items([
      S.listItem()
        .title('Pages du site')
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Pages du site')
            .items([
              singleton(S, 'homePage', 'Accueil', HomeIcon),
              singleton(S, 'formationsPage', 'Nos formations', DocumentIcon),
              singleton(S, 'candidaterPage', 'Candidater', DocumentIcon),
              singleton(S, 'entreprisesPage', 'Entreprises', DocumentIcon),
              singleton(S, 'formateurPage', 'Devenir formateur', DocumentIcon),
              singleton(S, 'faqPage', 'FAQ', DocumentIcon),
              singleton(S, 'contactPage', 'Contact', DocumentIcon),
            ]),
        ),
      S.divider(),
      singleton(S, 'navigation', 'Menu de navigation', DocumentIcon),
      singleton(S, 'siteSettings', 'Coordonnées du site', CogIcon),
      S.divider(),
      S.documentTypeListItem('page').title('Pages libres').icon(DocumentIcon),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !SINGLETONS.includes(listItem.getId() as string) &&
          listItem.getId() !== 'page',
      ),
    ])
