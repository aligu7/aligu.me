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
    <BackButton path="/blog" class="mb-2" />
    <h1 class="text-4xl">{{ post.title }}</h1>
    <ul class="list-none flex flex-row items-center gap-3 mt-2">
      <li v-for="tag in post.tags" :key="tag">
        <Tag :name="tag" />
      </li>
    </ul>
    <p class="text-gray-600 mt-2">{{ formatDate(post.date) }}</p>
    <ContentRenderer :value="post" class="blog post" />
    <BackButton path="/blog" class="mt-2" />
  </article>
  <div v-else class="text-center py-10">
    <p>Loading...</p>
  </div>
</template>
