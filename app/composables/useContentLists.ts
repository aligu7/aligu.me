/**
 * Project cards for listings, most recent first.
 * Shares one cache entry between the home page and /projects.
 */
export function useProjects() {
  return useAsyncData("projects", () =>
    queryCollection("projects")
      .select("title", "description", "path", "date", "tags", "status", "demo", "github")
      .order("date", "DESC")
      .all())
}

/** Blog post cards for listings, most recent first. */
export function useBlogPosts() {
  return useAsyncData("blog-posts", () =>
    queryCollection("blog")
      .select("title", "path", "date", "tags")
      .order("date", "DESC")
      .all())
}

export function useSocialLinks() {
  const { data } = useAsyncData("social", () => queryCollection("social").first())
  return computed(() => data.value?.social ?? [])
}
