import type { MaybeRefOrGetter } from "vue"

/** Sets the page title and description, mirrored into the Open Graph and Twitter tags. */
export function usePageSeo(title: MaybeRefOrGetter<string>, description: MaybeRefOrGetter<string | undefined>) {
  useSeoMeta({
    title,
    ogTitle: title,
    twitterTitle: title,
    description,
    ogDescription: description,
    twitterDescription: description,
  })
}
