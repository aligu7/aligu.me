<script setup>
useSeoMeta({
  title: 'Blog Posts',
})

// Fetch blog posts with proper error and loading states
const {
  data: posts,
  error,
  pending,
} = await useAsyncData('blog-posts', () =>
  queryContent('blog')
    .where({ _path: { $ne: '/blog' } })
    .only(['title', 'date', 'description', '_path'])
    .sort({ date: -1 })
    .find(),
)

// Date formatting function
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
    <ul v-else>
      <li v-for="post in posts" :key="post.slug" class="mb-4 relative">
        <div class="flex justify-between items-start">
          <div>
            <NuxtLink :to="post._path" class="text-xl font-semibold text-blue-600 hover:underline">
              {{ post.title }}
            </NuxtLink>
            <p class="text-gray-600">{{ formatDate(post.date) }}</p>
            <p class="text-gray-800">{{ post.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
