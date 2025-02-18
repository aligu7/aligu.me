<script setup>
import { getUniqueValues, filteredCollection, formatDate } from '@/utils/utils'

useSeoMeta({
  title: 'Blog - Ali Guliyev',
})

const selectedTag = ref('All')

const {
  data: posts,
  error,
  pending,
} = await useAsyncData('blog-posts', () =>
  queryContent('blog')
    .where({ _path: { $ne: '/blog' } })
    .only(['title', 'date', 'tags', '_path'])
    .sort({ date: -1 })
    .find(),
)

// Use the utility to extract unique tags
const uniqueTags = computed(() => {
  return posts.value ? getUniqueValues(posts.value, 'tags') : []
})

// Use the utility to filter the posts based on the selected tag
const filteredPosts = computed(() => {
  return posts.value ? filteredCollection(posts.value, 'tags', selectedTag.value) : []
})
</script>

<template>
  <div class="page">
    <div class="flex justify-between items-center mb-3 md:mb-6">
      <h1 class="title">Blog</h1>
      <Dropdown v-model="selectedTag" :options="uniqueTags" />
    </div>

    <!-- Loading state -->
    <div v-if="pending" class="text-center py-10">
      <p>Loading posts...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-10 text-red-600">
      <p>Error loading posts: {{ error.message }}</p>
    </div>

    <!-- Posts list -->
    <ul v-else class="list-none">
      <li v-for="post in filteredPosts" :key="post.title" class="mb-4 relative">
        <NuxtLink :to="post._path">
          <div
            class="group flex justify-between items-start border-primary-op10 border-solid border-1 hover:border-primary-hover rounded-xl p-5 transition-all duration-75">
            <div class="flex flex-col gap-2">
              <p
                class="text-lg md:text-xl font-semibold max-w-2xl text-primary group-hover:text-black dark:group-hover:text-primary-hover transition-all duration-75 mb-1">
                {{ post.title }}
              </p>
              <ul class="list-none flex flex-row flex-wrap items-center gap-2 md:gap-3">
                <li v-for="tag in post.tags" :key="tag">
                  <Tag :name="tag" />
                </li>
              </ul>
              <p
                class="text-black dark:text-white flex flex-row items-center gap-0.5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
                <span>Read</span>
                <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
              </p>
            </div>
            <p class="text-gray-600 dark:text-gray-100 text-xs md:text-base whitespace-nowrap">{{ formatDate(post.date)
              }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
