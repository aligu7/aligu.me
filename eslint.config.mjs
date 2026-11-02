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
    "unicorn/no-new-array": "off",
    "unused-imports/no-unused-vars": "warn",
    // Multi-line comments use /* */ blocks, not stacked // lines
    "style/multiline-comment-style": ["error", "starred-block"],
  },
}, {
  files: ["**/*.md"],
  rules: {
    // Content uses H1s as top-level sections below the page title
    "markdown/no-multiple-h1": "off",
  },
})
