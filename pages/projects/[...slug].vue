<script setup>
const { path } = useRoute()
const { data: project } = await useAsyncData(`content:${path}`, () => queryContent(path).findOne())

watchEffect(() => {
  if (project?.value) {
    useSeoMeta({
      title: `${project.value.title} - Ali Guliyev`,
    })
  }
})
</script>

<template>
  <div>
    <article v-if="project" class="page mx-auto">
      <BackButton class="mb-2" />
      <h1 class="text-4xl">
        {{ project.title }}
      </h1>
      <ul class="mt-2 flex flex-row flex-wrap items-center gap-3 list-none">
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
