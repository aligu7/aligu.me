// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilitydate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxthub/core', '@nuxthq/studio'],

  content: {
    documentdriven: true,
    preview: {
      api: 'https://api.nuxt.studio',
    },
    highlight: {
      theme: 'github-dark',
      preload: ['js', 'python', 'vue', 'html', 'css'],
    },
    markdown: {
      rehypeplugins: [
        [
          'remark-slug',
          'rehype-pretty-code',
          {
            theme: 'one-dark-pro', // or 'github-dark'
            keepbackground: true,
            onvisithighlightedline(node) {
              node.children = node.children.filter((child) => !(child.type === 'text' && /^\s*$/.test(child.value)))
            },
          },
        ],
      ],
    },
  },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  plugins: ['~/plugins/iconify.ts'],
  compatibilityDate: '2025-01-30',
})