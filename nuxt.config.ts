// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@unocss/nuxt', '@nuxt/content'],
  content: {
    documentDriven: true
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  plugins: ['~/plugins/iconify.ts'],
})