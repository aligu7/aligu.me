/*
 * Cloudflare Pages middleware: resume.aligu.me serves the resume PDF at every
 * path, so the address bar keeps showing resume.aligu.me. Every other host
 * gets the static site as usual.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url)
  if (url.hostname !== "resume.aligu.me")
    return context.next()

  url.pathname = "/resume.pdf"
  url.search = ""
  return context.env.ASSETS.fetch(new Request(url, context.request))
}
