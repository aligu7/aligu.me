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
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold">Projects</h1>
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
        <NuxtLink :to="project._path">
          <div
            class="group flex justify-between items-start border-primary border-solid border-1 border-opacity-10 hover:border-opacity-100 hover:border-primary-hover rounded-xl p-5 transition-all duration-75">
            <div class="flex flex-col gap-1 w-full">
              <p class="text-xl font-semibold max-w-2xl text-primary group-hover:text-black transition-all duration-75">
                {{ project.title }}
              </p>
              <p>{{ project.description }}</p>
              <ul class="list-none flex flex-row items-center gap-3 mt-2">
                <li v-for="tag in project.tags" :key="tag">
                  <Tag :name="tag" />
                </li>
              </ul>

              <div class="flex flex-row justify-between items-center mt-2 w-full">
                <div class="flex flex-row gap-3 z-50">
                  <!-- Stop the click event from propagating to the NuxtLink -->
                  <a @click.stop class="flex items-center gap-0.5" :href="project.demo" target="_blank">
                    <span>Live Demo</span>
                    <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
                  </a>
                  <a v-if="project.github" @click.stop class="flex items-center gap-0.5" :href="project.github"
                    target="_blank">
                    <span>Github</span>
                    <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
                  </a>
                </div>
                <p
                  class="text-black flex flex-row items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
                  <span>Details</span>
                  <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
