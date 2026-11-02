<script setup lang="ts">
useSeoMeta({
  title: "Projects - Ali Guliyev",
})

const { data: projects, error } = await useProjects()

const statusOptions = [ALL, "Completed", "In Progress"]
const selectedStatus = ref(ALL)
const selectedTag = ref(ALL)

const tags = computed(() => getUniqueTags(projects.value ?? []))
const filteredProjects = computed(() => {
  const byTag = filterByTag(projects.value ?? [], selectedTag.value)
  return selectedStatus.value === ALL
    ? byTag
    : byTag.filter(p => p.status === selectedStatus.value)
})

useStaggerAnimation(".project-item", filteredProjects)
</script>

<template>
  <div class="page">
    <div class="mb-3 flex items-center justify-between md:mb-6">
      <h1 class="title">
        Projects
      </h1>
      <div class="flex gap-2">
        <Dropdown v-model="selectedStatus" :options="statusOptions" icon="i-mingcute:check-circle-line" />
        <Dropdown v-model="selectedTag" :options="tags" icon="i-mingcute:filter-line" />
      </div>
    </div>

    <p v-if="error" class="py-10 text-center text-red-600">
      Error loading projects: {{ error.message }}
    </p>

    <ul v-else class="list-none">
      <li v-for="project in filteredProjects" :key="project.path" class="project-item stagger-in relative mb-4">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>
