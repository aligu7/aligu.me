import { queryCollection } from "@nuxt/content/server"

/**
 * Every indexable page, for search engines. Prerendered to a static /sitemap.xml
 * (see `nitro.prerender.routes`), so new content is picked up on each build.
 */
export default defineEventHandler(async (event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  const [projects, posts] = await Promise.all([
    queryCollection(event, "projects").select("path").all(),
    queryCollection(event, "blog").select("path").all(),
  ])

  const paths = ["/", "/projects", "/blog", ...projects.map(p => p.path), ...posts.map(p => p.path), "/resume.pdf"]
  const urls = paths.map(path => `  <url><loc>${siteUrl}${path}</loc></url>`).join("\n")

  setResponseHeader(event, "content-type", "application/xml")
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
