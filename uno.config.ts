import { fileURLToPath } from "node:url"
import { defineConfig, presetAttributify, presetIcons, presetWind3, transformerDirectives } from "unocss"

// Explicit loaders: preset-icons skips its auto node loader when it detects
// VS Code (VSCODE_CWD), which also matches builds run in its terminal
const collections = {
  logos: () => import("@iconify-json/logos/icons.json").then(i => i.default),
  mdi: () => import("@iconify-json/mdi/icons.json").then(i => i.default),
  mingcute: () => import("@iconify-json/mingcute/icons.json").then(i => i.default),
  ri: () => import("@iconify-json/ri/icons.json").then(i => i.default),
}

export default defineConfig({
  presets: [presetWind3(), presetIcons({ collections }), presetAttributify()],
  rules: [
    ["max-w-8xl", { "max-width": "130rem" }],
    ["w-fit-content", { width: "fit-content" }],
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
  content: {
    // Icon classes referenced from markdown/json content (e.g. `i-logos:vue`).
    // Absolute, since relative globs resolve against Vite's root (`app/`)
    filesystem: [fileURLToPath(new URL("./content/**/*.{md,json}", import.meta.url))],
    pipeline: {
      // UnoCSS defaults, plus JSON content (social links)
      include: [/\.(vue|[jt]sx|mdx?|html)($|\?)/, /\/content\/.*\.json$/],
    },
  },
})
