import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetIcons({}), presetUno(), presetAttributify()],
  rules: [['max-w-8xl', { 'max-width': '130rem' }]],
  theme: {
    colors: {
      primary: '#555555',
      'primary-hover': '#3f3f3f',
    },
  },
  transformers: [transformerDirectives()],
  safelist: [],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, 'src/**/*.{js,ts}'],
    },
  },
})
