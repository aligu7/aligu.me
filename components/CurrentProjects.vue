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
</script>

<template>
  <div v-if="currentProjects.length > 0">
    <div class="flex justify-between items-center mb-3">
      <h1 style="margin: 0" class="text-xl">Current Projects</h1>
      <NuxtLink class="flex items-center gap-0.5" to="projects">
        <span class="text-sm md:text-base">View all projects</span>
        <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
      </NuxtLink>
    </div>

    <ul class="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
      <li class="currentProject-item" v-for="project in currentProjects" :key="project.title">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>

<style>
main .projectInnerContainer {
  @apply h-auto md:h-50;
}
</style>
