import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetIcons({}), presetUno(), presetAttributify()],
  rules: [
    ['max-w-8xl', { "max-width": "100rem"}],
  ],
  theme: {
    colors: {
      "primary": "#888",
      "primary-hover": "#3f3f3f"
    }
  },
  transformers: [transformerDirectives()],
})
