<script setup>
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: "plaintext",
  },
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
  }
  catch (error) {
    console.error("Failed to copy:", error)
  }
}
</script>

<template>
  <div class="group relative">
    <code :class="`language-${props.language}`">
      <slot />
    </code>
    <button
      class="absolute right-3 top-2 cursor-pointer border-0 rounded bg-green-300/50 px-2 py-1 text-base text-white opacity-0 hover:bg-green-400/50 group-hover:opacity-100"
      @click="copyCode"
    >
      Copy
    </button>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=fira+code:wght@400;500&display=swap");

pre {
  @apply bg-[#1e1e1e] rounded-lg overflow-x-auto;

  code {
    @apply block text-sm px-5 py-3;
    color: #d4d4d4 !important;
    font-family: "fira code", monospace;

    /* Remove margin from first and last lines */
    .line {
      margin: 5px 0 !important;
      margin-top: -5px !important;
    }

    :deep(.line:first-child) {
      margin-top: 0 !important;
    }

    :deep(.line:last-child) {
      margin-bottom: 0 !important;
    }
  }
}

/* Syntax highlighting */
:deep(.token.comment) {
  color: #6a9955 !important;
}

:deep(.token.keyword) {
  color: #569cd6 !important;
}

:deep(.token.string) {
  color: #ce9178 !important;
}

:deep(.token.number) {
  color: #b5cea8 !important;
}

:deep(.token.function) {
  color: #dcdcaa !important;
}

:deep(.token.operator) {
  color: #d4d4d4 !important;
}

:deep(.token.punctuation) {
  color: #d4d4d4 !important;
}

:deep(.token.class-name) {
  color: #4ec9b0 !important;
}

:deep(.token.property) {
  color: #9cdcfe !important;
}

:deep(.token.parameter) {
  color: #9cdcfe !important;
}
</style>
