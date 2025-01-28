// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxthub/core', '@nuxthq/studio'],
  content: {
    documentDriven: true,
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  plugins: ['~/plugins/iconify.ts'],
})
