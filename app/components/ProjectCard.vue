<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content"

defineProps<{
  project: Pick<ProjectsCollectionItem, "title" | "description" | "path" | "tags" | "status" | "demo" | "github">
}>()
</script>

<template>
  <article
    class="group relative h-full flex flex-col border-1 border-primary-op10 rounded-xl border-solid p-5 transition-all duration-75 hover:border-primary-hover"
  >
    <div class="flex-1">
      <div class="mb-2 flex items-center justify-between">
        <!-- A <p>, so the home page's `main.page p` sizing still applies -->
        <p class="max-w-2xl text-lg text-primary font-semibold transition-all duration-75 md:text-xl group-hover:text-black dark:group-hover:text-primary-hover">
          <!-- Stretched link: its ::after covers the whole card -->
          <NuxtLink :to="project.path" class="text-inherit after:absolute after:inset-0 after:content-['']">
            {{ project.title }}
          </NuxtLink>
        </p>
        <ProjectStatusBadge :status="project.status" />
      </div>
      <p class="mb-3 text-sm text-primary md:text-base">
        {{ project.description }}
      </p>
      <TagList :tags="project.tags" />
    </div>

    <div class="mt-2 w-full flex flex-row items-center justify-between">
      <ProjectLinks :demo="project.demo" :github="project.github" class="relative z-1 text-sm md:text-base" />
      <p class="flex flex-row items-center gap-0.5 text-black opacity-0 transition-opacity duration-75 dark:text-white group-hover:opacity-100">
        <span>Details</span>
        <span class="i-mingcute:arrow-right-line mt-0.5 text-sm" />
      </p>
    </div>
  </article>
</template>
