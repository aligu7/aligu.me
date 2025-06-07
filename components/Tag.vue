<script setup lang="ts">
const _props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="rounded-full bg-primary px-2 py-1 text-xs text-white dark:bg-gray-900 md:px-2.5 md:py-1.5 md:text-sm">
    {{ name }}
  </div>
</template>
