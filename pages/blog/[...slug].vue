<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`content:${path}`, () => queryContent(path).findOne())

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="post" class="mx-auto page">
    <BackButton />
    <h1>{{ post.title }}</h1>
    <p class="text-gray-600">{{ formatDate(post.date) }}</p>
    <ContentRenderer :value="post" />
  </article>
  <div v-else class="text-center py-10">
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.page * {
  @apply my-2;
}
</style>
