import antfu from "@antfu/eslint-config"

export default antfu({
  lessOpinionated: true,
  vue: true,
  unocss: true,
  type: "app",
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: "double",
  },
  ignores: [
    "**/*.yml",
  ],
}, {
  rules: {
    "ts/no-redeclare": "off",
    "style/max-statements-per-line": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "curly": ["error", "multi"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/no-new-array": "off",
  },
})
