<script setup lang="ts">
const selectedStatus = ref("All")
const selectedTag = ref("All")

const {
  data: projects,
  error,
  pending,
} = await useAsyncData(
  "projects",
  () =>
    queryContent("projects")
      .where({ _path: { $ne: "/projects" } })
      .only(["title", "demo", "tags", "github", "description", "date", "_path", "status"])
      .find(),
  { server: false },
)

// Status options: All, Completed, Ongoing
const statusOptions = ["All", "Completed", "Ongoing"]

// Tag options
const uniqueTags = computed(() => {
  return projects.value ? getUniqueValues(projects.value, "tags") : []
})

// Filter projects by status and tag
const filteredProjects = computed(() => {
  if (!projects.value) return []
  let filtered = projects.value
  if (selectedStatus.value !== "All")
    filtered = filtered.filter(p => p.status === selectedStatus.value)

  if (selectedTag.value !== "All")
    filtered = filtered.filter(p => (p.tags || []).includes(selectedTag.value))

  return filtered
})

// Sort filtered projects by date (most recent first)
const sortedFilteredProjects = computed(() => {
  return useSortByDate(filteredProjects.value)
})

// Watch for changes in the filtered projects
watch(sortedFilteredProjects, setupAnimationWatcher(sortedFilteredProjects, ".project-item"), { deep: true })

onMounted(() => {
  // Initial animation once projects are loaded

  watch(
    projects,

    () => {
      nextTick(() => {
        animateProjectsAndPosts(".project-item")
      })
    },

    { immediate: true },
  )
})
</script>

<template>
  <div class="page">
    <div class="mb-3 flex items-center justify-between md:mb-6">
      <h1 class="title">
        Projects
      </h1>
      <div class="flex gap-2">
        <Dropdown v-model="selectedStatus" :options="statusOptions" icon="mingcute:check-circle-line" />
        <Dropdown v-model="selectedTag" :options="uniqueTags" icon="mingcute:filter-line" />
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="pending" class="py-10 text-center">
      <p>Loading projects...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="py-10 text-center text-red-600">
      <p>Error loading projects: {{ error.message }}</p>
    </div>

    <!-- Projects list -->
    <ul v-else class="list-none">
      <li v-for="(project) in sortedFilteredProjects" :key="project.title" class="project-item relative mb-4">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>
