<script setup lang="ts">
useSeoMeta({
  title: "Blog - Ali Guliyev",
})

const { data: posts, error } = await useBlogPosts()

const selectedTag = ref(ALL)
const tags = computed(() => getUniqueTags(posts.value ?? []))
const filteredPosts = computed(() => filterByTag(posts.value ?? [], selectedTag.value))

useStaggerAnimation(".blog-item", filteredPosts)
</script>

<template>
  <div class="page">
    <div class="mb-3 flex items-center justify-between md:mb-6">
      <h1 class="title">
        Blog
      </h1>
      <Dropdown v-model="selectedTag" :options="tags" />
    </div>

    <p v-if="error" class="py-10 text-center text-red-600">
      Error loading posts: {{ error.message }}
    </p>

    <ul v-else class="list-none">
      <li v-for="post in filteredPosts" :key="post.path" class="blog-item relative mb-4">
        <BlogPostCard :post="post" />
      </li>
    </ul>
  </div>
</template>
