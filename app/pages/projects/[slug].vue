<script setup lang="ts">
const { data: project } = await useContentPage("projects")

if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true })
</script>

<template>
  <article v-if="project" class="page mx-auto">
    <BackButton class="mb-2" />
    <div class="flex flex-wrap items-center justify-between gap-1">
      <h1 class="text-4xl">
        {{ project.title }}
      </h1>
      <ProjectStatusBadge :status="project.status" />
    </div>
    <TagList :tags="project.tags" class="mt-2" />
    <ProjectLinks :demo="project.demo" :github="project.github" class="mt-3" />

    <div v-if="project.description" class="mt-3">
      <p class="text-lg text-primary">
        {{ project.description }}
      </p>
      <div class="mt-2 h-0.2 w-full bg-primary-light" />
    </div>

    <ContentRenderer :value="project" class="project" />
    <BackButton class="mt-5" />
  </article>
</template>
