<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`content:${path}`, () => queryContent(path).findOne())

watchEffect(() => {
  if (post?.value)
    useSeoMeta({
      title: `${post.value.title} - Ali Guliyev`,
    })
})
</script>

<template>
  <div>
    <article v-if="post" class="page mx-auto">
      <BackButton class="mb-2" />
      <h1 class="text-3xl md:text-4xl">
        {{ post.title }}
      </h1>
      <ul class="mt-1.5 flex flex-row items-center gap-2 list-none md:mt-2 md:gap-3">
        <li v-for="tag in post.tags" :key="tag">
          <Tag :name="tag" />
        </li>
      </ul>
      <p class="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-100">
        {{ formatDate(post.date) }}
      </p>
      <ContentRenderer :value="post" class="post" />
      <BackButton class="mt-5" />
    </article>
    <div v-else class="py-10 text-center">
      <p>Loading...</p>
    </div>
  </div>
</template>
