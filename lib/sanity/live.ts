import { defineLive } from "next-sanity/live";
import { client } from "./client";
import { token } from "./token";

/*
  Live Content API : sanityFetch remplace client.fetch partout.
  - En production : cache + invalidation automatique à chaque publication.
  - En mode brouillon (Presentation Tool) : contenu draft + stega (click-to-edit).
*/
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
