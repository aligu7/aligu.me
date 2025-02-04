<script setup>
import { getUniqueValues, filteredCollection, formatDate } from '@/utils/utils'

useSeoMeta({
  title: 'Projects - Ali Guliyev',
})

const selectedTag = ref('All')

const {
  data: projects,
  error,
  pending,
} = await useAsyncData('projects', () =>
    queryContent('projects')
    .where({ _path: { $ne: '/projects' } })
    .only(['title', 'demo', 'tags', 'github', 'description', '_path'])
    .find(),
)

// Use the utility to extract unique tags
const uniqueTags = computed(() => {
  return projects.value ? getUniqueValues(projects.value, 'tags') : []
})

// Use the utility to filter the posts based on the selected tag
const filteredProjects = computed(() => {
  return projects.value ? filteredCollection(projects.value, 'tags', selectedTag.value) : []
})

// Then sort the filtered projects by the number of tags (descending)
// We use slice() to avoid mutating the original array.
const sortedFilteredProjects = computed(() => {
  return filteredProjects.value ? filteredProjects.value.slice().sort((a, b) => b.tags.length - a.tags.length) : []
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
      <li v-for="project in sortedFilteredProjects" :key="project.title" class="mb-4 relative">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>
