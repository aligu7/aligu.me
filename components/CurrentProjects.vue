<script setup lang="ts">
const {
  data: projects,
} = await useAsyncData("projects", () =>
  queryContent("projects")
    .where({ _path: { $ne: "/projects" } })
    .find())

const currentProjects = computed(() => {
  return projects.value ? filteredCollection(projects.value, "tags", "Current Project") : []
})

// Compute grid columns based on number of projects
const gridClass = computed(() => {
  return currentProjects.value.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
})
</script>

<template>
  <div v-if="currentProjects.length > 0" class="flex flex-col">
    <div class="mb-3 flex items-center justify-between">
      <h1 style="margin: 0" class="text-xl">
        Current Projects
      </h1>
      <NuxtLink class="flex items-center gap-0.5" to="projects">
        <span class="text-sm md:text-base">View all projects</span>
        <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
      </NuxtLink>
    </div>

    <ul class="grid gap-4 list-none" :class="[gridClass]">
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
