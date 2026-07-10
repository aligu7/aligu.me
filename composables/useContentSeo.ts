import type { Ref } from "vue"

interface ContentPage {
  title: string
  description?: string
}

/**
 * Applies SEO meta tags reactively from a content page reference.
 * Watches for changes and sets title, OG, and Twitter meta tags.
 */
export function useContentSeo(page: Ref<ContentPage | null | undefined>) {
  watch(
    page,
    (p) => {
      if (!p) {
        return
      }

      useSeoMeta({
        title: p.title,
        ogTitle: p.title,
        twitterTitle: p.title,
        description: p.description,
        ogDescription: p.description,
        twitterDescription: p.description,
      })
    },
    { immediate: true },
  )
}
