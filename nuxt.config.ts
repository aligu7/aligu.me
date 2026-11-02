// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content", "@vueuse/nuxt"],

  devtools: { enabled: true },

  app: {
    // Automatic page transitions
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          /*
           * Before first paint: mark JS as enabled (hides .stagger-in until it animates)
           * and apply the stored color scheme to avoid a flash
           */
          innerHTML: `(function(){document.documentElement.classList.add('js');var s=localStorage.getItem('vueuse-color-scheme');if(s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
        { name: "author", content: "Ali Guliyev" },
        { property: "og:site_name", content: "Ali Guliyev" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },

  components: [
    // Components used from markdown (MDC) must be global
    { path: "~/components/content", global: true },
    "~/components",
  ],

  css: ["~/assets/styles/main.scss"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
          langs: ["js", "ts", "python", "vue", "html", "css", "shell", "json"],
        },
      },
    },
    experimental: {
      // Use Node's built-in `node:sqlite` at build time, no native addon needed
      sqliteConnector: "native",
    },
  },

  devServer: {
    host: "0.0.0.0",
    port: 2007,
  },

  compatibilityDate: "2026-11-01",

  nitro: {
    // Fully prerendered site, deployed as static assets to Cloudflare
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      /*
       * Emit `/projects.html` rather than `/projects/index.html`, so Cloudflare
       * serves `/projects` directly instead of redirecting to `/projects/`
       */
      autoSubfolderIndex: false,
    },
  },
})
