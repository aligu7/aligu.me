<script setup>
const { path } = useRoute()
const { data: project } = await useAsyncData(`content:${path}`, () => queryContent(path).findOne())

useSeoMeta({
  title: `${project.value.title} - Ali Guliyev`,
})
</script>

<template>
  <div>
    <article v-if="project" class="page mx-auto">
      <BackButton class="mb-2" />
      <div class="flex items-center justify-between gap-3">
        <h1 class="text-4xl">
          {{ project.title }}
        </h1>
        <div class="flex items-center gap-2">
          <span v-if="project.status === 'Ongoing'" class="inline-flex items-center border border-yellow-300 rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 font-medium dark:border-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
            <span class="relative mr-1 size-3 flex">
              <span class="absolute h-full w-full inline-flex rounded-full bg-yellow-400 opacity-75 animate-ping" />
              <span class="relative size-3 inline-flex rounded-full bg-yellow-500" />
            </span>
            Ongoing
          </span>
          <span v-if="project.status === 'Completed'" class="inline-flex items-center border border-green-300 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 font-medium dark:border-green-800 dark:bg-green-700 dark:text-green-100">
            Completed
          </span>
        </div>
      </div>
      <ul class="mt-2 flex flex-row flex-wrap items-center gap-1.5 list-none">
        <li v-for="tag in project.tags" :key="tag">
          <Tag :name="tag" />
        </li>
      </ul>

      <div class="mt-3 flex flex-row gap-3">
        <a v-if="project.demo" class="flex items-center gap-0.5" :href="project.demo" target="_blank">
          <span>Live Demo</span>
          <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
        </a>
        <a v-if="project.github" class="flex items-center gap-0.5" :href="project.github" target="_blank">
          <span>Github</span>
          <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
        </a>
      </div>

      <!-- Description Section with Thin Line Below -->
      <div v-if="project.description" class="mt-3">
        <p class="text-lg text-primary">
          {{ project.description }}
        </p>
        <div class="mt-2 h-0.2 w-full bg-primary-light" />
      </div>

      <ContentRenderer :value="project" class="project" />
      <BackButton class="mt-5" />
    </article>
    <div v-else class="py-10 text-center">
      <p>Loading...</p>
    </div>
  </div>
</template>
