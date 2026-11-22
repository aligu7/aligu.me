/*
 * Cloudflare Pages middleware. The resume lives only at resume.aligu.me:
 * - resume.aligu.me serves the PDF at every path, keeping that URL in the bar
 * - on any other host, the old PDF paths redirect there, so shared links still work
 * Everything else is the static site.
 */
const RESUME_HOST = "resume.aligu.me"
const OLD_RESUME_PATHS = new Set(["/resume.pdf", "/pdf/Ali_Guliyev_Resume.pdf"])

export async function onRequest(context) {
  const url = new URL(context.request.url)

  if (url.hostname === RESUME_HOST) {
    url.pathname = "/resume.pdf"
    url.search = ""
    return context.env.ASSETS.fetch(new Request(url, context.request))
  }

  if (OLD_RESUME_PATHS.has(url.pathname))
    return Response.redirect(`https://${RESUME_HOST}/`, 301)

  return context.next()
}
