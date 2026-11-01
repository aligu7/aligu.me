<script setup lang="ts">
const { data: projects } = await useProjects()

const currentProjects = computed(() =>
  projects.value?.filter(p => p.status === "In Progress") ?? [])

// Fall back to the two most recent projects when nothing is in progress
const shownProjects = computed(() =>
  currentProjects.value.length ? currentProjects.value : projects.value?.slice(0, 2) ?? [])
</script>

<template>
  <section class="flex flex-col">
    <div class="mb-3 flex items-center justify-between">
      <h2 class="m-0 text-xl">
        {{ currentProjects.length ? 'Current Projects' : 'Recent Projects' }}
      </h2>
      <NuxtLink class="flex items-center gap-0.5" to="/projects">
        <span class="text-sm md:text-base">View all projects</span>
        <span class="i-mingcute:arrow-right-line mt-0.5 text-sm" />
      </NuxtLink>
    </div>

    <ul class="grid list-none gap-4" :class="shownProjects.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'">
      <li v-for="project in shownProjects" :key="project.path" class="h-full">
        <ProjectCard :project="project" />
      </li>
    </ul>
    <p v-if="!shownProjects.length" class="mt-4 text-center text-gray-500 dark:text-gray-400">
      No projects found.
    </p>
  </section>
</template>
