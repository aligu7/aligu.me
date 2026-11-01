<script setup lang="ts">
const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
  class?: string
}>()

const { copy, copied } = useClipboard({ copiedDuring: 1500 })
</script>

<template>
  <div class="group relative">
    <pre :class="props.class"><slot /></pre>
    <button
      type="button"
      class="absolute right-3 top-2 cursor-pointer border-0 rounded bg-green-300/50 px-2 py-1 text-base text-white opacity-0 hover:bg-green-400/50 group-hover:opacity-100"
      @click="copy(props.code ?? '')"
    >
      {{ copied ? 'Copied' : 'Copy' }}
    </button>
  </div>
</template>

<style scoped>
pre {
  --at-apply: rounded-lg overflow-x-auto;
}

pre :deep(code) {
  --at-apply: block text-sm px-5 py-3;
  font-family: "Fira Code", monospace;
}
</style>
