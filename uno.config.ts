import transformerDirectives from "@unocss/transformer-directives"
import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from "unocss"

export default defineConfig({
  presets: [presetMini(), presetIcons({}), presetUno(), presetAttributify()],
  rules: [
    ["max-w-8xl", { "max-width": "130rem" }],
    ["w-fit-content", { width: "fit-content" }],
    ["text-xxs", { "font-size": "0.65rem" }],
  ],
  theme: {
    colors: {
      "primary-light": "var(--primary-light)",
      "primary": "var(--primary)",
      "primary-op10": "var(--primary-op10)",
      "primary-hover": "var(--primary-hover)",
    },
  },
  shortcuts: {
    "btn-primary":
      "w-fit-content flex items-center flex-row gap-1 border-op-50 hover:border-op-100 hover:cursor-pointer border-b-solid border-b border-b-1 border-b-primary-light hover:border-b-primary-hover",
  },
  transformers: [transformerDirectives()],
  safelist: [],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, "src/**/*.{js,ts}"],
    },
  },
})
