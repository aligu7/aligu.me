import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetIcons({}), presetUno(), presetAttributify()],
  rules: [
    ['max-w-8xl', { 'max-width': '130rem' }],
    ['w-fit-content', { width: 'fit-content' }],
  ],
  theme: {
    colors: {
      'primary-light': '#888888',
      primary: '#555555',
      'primary-hover': '#3f3f3f',
    },
  },
  shortcuts: {
    btn: '',
    'btn-primary':
      'w-fit-content flex items-center flex-row gap-1 border-op-50 hover:border-op-100 hover:cursor-pointer border-b-solid border-b border-b-1 border-b-primary-light hover:border-b-primary-hover',
  },
  transformers: [transformerDirectives()],
  safelist: [],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, 'src/**/*.{js,ts}'],
    },
  },
})
