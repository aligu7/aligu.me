<template>
  <article class="mx-auto page">
    <h1>{{ post.title }}</h1>
    <p class="text-gray-600">{{ formatDate(post.date) }}</p>
    <ContentRenderer :value="post" />
  </article>
</template>

<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(
  `
${path}`,
  () => queryContent(path).findOne(),
)

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
