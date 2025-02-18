<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="px-2 py-1 md:px-2.5 md:py-1.5 bg-primary dark:bg-gray-900 text-white rounded-full text-xs md:text-sm">
    {{ name }}
  </div>
</template>
