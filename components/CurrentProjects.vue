<script setup lang="ts">
import { getUniqueValues, filteredCollection } from '@/utils/utils'

const {
  data: projects,
  error,
  pending,
} = await useAsyncData('projects', () =>
  queryContent('projects')
    .where({ _path: { $ne: '/projects' } })
    .find(),
)

const currentProjects = computed(() => {
  return projects.value ? filteredCollection(projects.value, 'tags', 'Current Project') : []
})

// Compute grid columns based on number of projects
const gridClass = computed(() => {
  return currentProjects.value.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
})
</script>

<template>
  <div v-if="currentProjects.length > 0" class="flex flex-col">
    <div class="flex justify-between items-center mb-3">
      <h1 style="margin: 0" class="text-xl">Current Projects</h1>
      <NuxtLink class="flex items-center gap-0.5" to="projects">
        <span class="text-sm md:text-base">View all projects</span>
        <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
      </NuxtLink>
    </div>

    <ul :class="['list-none grid gap-4', gridClass]">
      <li v-for="project in currentProjects" :key="project.title" class="currentProject-item">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.currentProject-item {
  @apply h-full;
}
</style>
