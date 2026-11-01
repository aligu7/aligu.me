<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content"

defineProps<{
  status: ProjectsCollectionItem["status"]
}>()
</script>

<template>
  <span
    v-if="status === 'In Progress'"
    class="inline-flex items-center border border-yellow-300 rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 font-medium dark:border-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
  >
    <span class="relative mr-1 size-3 flex">
      <span class="absolute h-full w-full inline-flex animate-ping rounded-full bg-yellow-400 opacity-75" />
      <span class="relative size-3 inline-flex rounded-full bg-yellow-500" />
    </span>
    In Progress
  </span>
  <span
    v-else
    class="inline-flex items-center border border-green-300 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 font-medium dark:border-green-800 dark:bg-green-700 dark:text-green-100"
  >
    Completed
  </span>
</template>
