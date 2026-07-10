// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Automatic Page Transitions
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          innerHTML: `(function(){var s=localStorage.getItem('vueuse-color-scheme');if(s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "author", content: "Ali Guliyev" },
        { property: "og:site_name", content: "Ali Guliyev" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: ["@unocss/nuxt", "@nuxt/content", "@nuxthq/studio", "@vueuse/nuxt"],
  nitro: {
    preset: "cloudflare-pages",
  },
  content: {
    documentdriven: true,
    preview: {
      api: "https://api.nuxt.studio",
    },
    highlight: {
      theme: "github-dark",
      preload: ["js", "python", "vue", "html", "css"],
    },
    markdown: {
      rehypeplugins: [
        [
          "remark-slug",
          "rehype-pretty-code",
          {
            theme: "one-dark-pro", // or 'github-dark'
            keepbackground: true,
            onvisithighlightedline(node) {
              node.children = node.children.filter(child => !(child.type === "text" && /^\s*$/.test(child.value)))
            },
          },
        ],
      ],
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 2007,
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },

  plugins: ["~/plugins/iconify.ts"],
})
