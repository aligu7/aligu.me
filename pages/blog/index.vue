<script setup>
useSeoMeta({
  title: 'Blog Posts',
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

const uniqueTags = computed(() => {
  if (!posts.value) return []
  const tags = posts.value.flatMap((post) => post.tags)
  return ['All', ...new Set(tags)].sort()
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (selectedTag.value === 'All') return posts.value
  return posts.value.filter((post) => post.tags.includes(selectedTag.value))
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="page">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold">Blog</h1>
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
      <li v-for="post in filteredPosts" :key="post.slug" class="mb-4 relative">
        <NuxtLink :to="post._path">
          <div
            class="group flex justify-between items-start border-primary border-solid border-1 border-opacity-10 hover:border-opacity-100 hover:border-primary-hover rounded-xl p-5 transition-all duration-75">
            <div class="flex flex-col gap-2">
              <p class="text-xl font-semibold max-w-2xl text-primary group-hover:text-black transition-all duration-75">
                {{ post.title }}
              </p>
              <ul class="list-none flex flex-row items-center gap-3">
                <li class="text-xs" v-for="tag in post.tags" :key="tag">
                  <Tag :name="tag" />
                </li>
              </ul>
              <p
                class="text-black flex flex-row items-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
                <span>Read</span>
                <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
              </p>
            </div>
            <p class="text-gray-600">{{ formatDate(post.date) }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
