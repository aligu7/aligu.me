<script setup lang="ts">
const { data: post } = await useContentPage("blog")

if (!post.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true })
</script>

<template>
  <article v-if="post" class="page mx-auto">
    <BackButton class="mb-2" />
    <h1 class="text-3xl md:text-4xl">
      {{ post.title }}
    </h1>
    <TagList :tags="post.tags" class="mt-1.5 md:mt-2" />
    <time :datetime="String(post.date)" class="mt-2 block text-sm text-gray-600 md:text-base dark:text-gray-100">
      {{ formatDate(post.date) }}
    </time>
    <ContentRenderer :value="post" class="post" />
    <BackButton class="mt-5" />
  </article>
</template>
