<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`content:${path}`, () => queryContent(path).findOne())

watchEffect(() => {
  if (post?.value) {
    useSeoMeta({
      title: `${post.value.title} - Ali Guliyev`,
    })
  }
})

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
    <BackButton path="/blog" />
    <h1 class="text-4xl">{{ post.title }}</h1>
    <p class="text-gray-600 mt-2">{{ formatDate(post.date) }}</p>
    <ContentRenderer :value="post" class="post" />
  </article>
  <div v-else class="text-center py-10">
    <p>Loading...</p>
  </div>
</template>

<style lang="scss">
.post {
  * {
    @apply my-2;
  }

  h1 {
    @apply mt-8 mb-4;
  }
}
</style>
