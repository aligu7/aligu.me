<template>
  <div class="page">
    <h1 class="text-4xl font-bold mb-6">Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.slug" class="mb-4">
        <nuxt-link
          :to="`/blog/${post.slug}`"
          class="text-xl font-semibold text-blue-600 hover:underline"
        >
          {{ post.title }}
        </nuxt-link>
        <p class="text-gray-600">{{ formatDate(post.date) }}</p>
        <p class="text-gray-800">{{ post.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
// useAutoImports from #app is not needed, `queryContent` is auto-imported by Nuxt

// Use useAsyncData to fetch blog posts
const { data: posts, error } = await useAsyncData("content:blog", () =>
  queryContent("blog")
    .where({ _path: { $not: "/blog" } })
    .only(["title", "slug", "date", "description"])
    .sort({ date: -1 })
    .find()
);

// Handle the error case
if (error.value) {
  console.error("Failed to fetch blog posts:", error.value);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>
/* Your styles here */
</style>
