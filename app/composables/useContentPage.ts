import type { Collections } from "@nuxt/content"

/**
 * Loads the page of `collection` matching the current route and sets its SEO meta.
 *
 * Everything is registered synchronously so it stays inside the Nuxt context;
 * await the result in `<script setup>` and handle a missing page there.
 */
export function useContentPage<T extends "blog" | "projects">(collection: T) {
  const route = useRoute()
  const result = useAsyncData(`${collection}:${route.path}`, () =>
    queryCollection(collection).path(route.path).first() as Promise<Collections[T] | null>)

  usePageSeo(
    () => `${result.data.value?.title} - Ali Guliyev`,
    () => result.data.value?.description,
  )

  return result
}
