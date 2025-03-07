<script setup>
import { getUniqueValues, filteredCollection, formatDate } from '@/utils/utils'

const selectedTag = ref('All')

const {
  data: projects,
  error,
  pending,
} = await useAsyncData(
  'projects',
  () =>
    queryContent('projects')
      .where({ _path: { $ne: '/projects' } })
      .only(['title', 'demo', 'tags', 'github', 'description', 'date', '_path'])
      .find(),
  { server: false },
)

// Use the utility to extract unique tags
const uniqueTags = computed(() => {
  return projects.value ? getUniqueValues(projects.value, 'tags') : []
})

// Use the utility to filter the posts based on the selected tag
const filteredProjects = computed(() => {
  return projects.value ? filteredCollection(projects.value, 'tags', selectedTag.value) : []
})

// Sort filtered projects by date (most recent first)
const sortedFilteredProjects = computed(() => {
  return filteredProjects.value
    ? filteredProjects.value.slice().sort((a, b) => {
      // Convert date to Date objects for comparison
      const dateA = new Date(a.date || '1970-01-01')
      const dateB = new Date(b.date || '1970-01-01')

      // Sort in descending order (most recent first)
      return dateB.getTime() - dateA.getTime()
    })
    : []
})

// Watch for changes in the filtered projects
watch(sortedFilteredProjects, setupAnimationWatcher(sortedFilteredProjects, '.project-item'), { deep: true })

onMounted(() => {
  // Initial animation once projects are loaded

  watch(
    projects,

    () => {
      nextTick(() => {
        animateProjectsAndPosts('.project-item')
      })
    },

    { immediate: true },
  )
})
</script>

<template>
  <div class="page">
    <div class="flex justify-between items-center mb-3 md:mb-6">
      <h1 class="title">Projects</h1>
      <Dropdown v-model="selectedTag" :options="uniqueTags" />
    </div>

    <!-- Loading state -->
    <div v-if="pending" class="text-center py-10">
      <p>Loading projects...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-10 text-red-600">
      <p>Error loading projects: {{ error.message }}</p>
    </div>

    <!-- Projects list -->
    <ul v-else class="list-none">
      <li v-for="(project, index) in sortedFilteredProjects" :key="project.title" class="project-item mb-4 relative">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>
