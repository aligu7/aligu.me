<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content"

defineProps<{
  post: Pick<BlogCollectionItem, "title" | "path" | "date" | "tags">
}>()
</script>

<template>
  <NuxtLink :to="post.path">
    <article
      class="group flex items-start justify-between border-1 border-primary-op10 rounded-xl border-solid p-5 transition-all duration-75 hover:border-primary-hover"
    >
      <div class="flex flex-col gap-2">
        <h2
          class="mb-1 max-w-2xl text-lg text-primary font-semibold transition-all duration-75 md:text-xl group-hover:text-black dark:group-hover:text-primary-hover"
        >
          {{ post.title }}
        </h2>
        <TagList :tags="post.tags" />
        <p
          class="mt-4 flex flex-row items-center gap-0.5 text-black opacity-0 transition-opacity duration-75 dark:text-white group-hover:opacity-100"
        >
          <span>Read</span>
          <span class="i-mingcute:arrow-right-line mt-0.5 text-sm" />
        </p>
      </div>
      <time :datetime="String(post.date)" class="whitespace-nowrap text-xs text-gray-600 md:text-base dark:text-gray-100">
        {{ formatDate(post.date) }}
      </time>
    </article>
  </NuxtLink>
</template>
