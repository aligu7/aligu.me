<script setup lang="ts">
const _props = defineProps<{
  project: any
}>()
</script>

<template>
  <NuxtLink :to="project._path">
    <div class="group relative h-full">
      <div
        class="projectInnerContainer h-full flex flex-col border-1 border-primary-op10 rounded-xl border-solid p-5 transition-all duration-75 hover:border-primary-hover"
      >
        <div class="flex-1">
          <p
            class="mb-2 max-w-2xl text-lg text-primary font-semibold transition-all duration-75 md:text-xl group-hover:text-black dark:group-hover:text-primary-hover"
          >
            {{ project.title }}
          </p>
          <p class="mb-3 text-sm text-primary md:text-base">
            {{ project.description }}
          </p>
          <ul class="flex flex-row flex-wrap items-center gap-2 list-none md:gap-3">
            <li v-for="tag in project.tags" :key="tag">
              <Tag :name="tag" />
            </li>
          </ul>
        </div>

        <div class="mt-2 w-full flex flex-row items-center justify-between">
          <div class="z-50 flex flex-row gap-3">
            <!-- Stop the click event from propagating to the NuxtLink -->
            <a v-if="project.demo" class="flex items-center gap-0.5" :href="project.demo" target="_blank" @click.stop>
              <span class="text-sm md:text-base">Live Demo</span>
              <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
            </a>
            <a v-if="project.github" class="flex items-center gap-0.5" :href="project.github" target="_blank" @click.stop>
              <span class="text-sm md:text-base">Github</span>
              <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
            </a>
          </div>
          <p class="flex flex-row items-center gap-0.5 text-black opacity-0 transition-opacity duration-75 dark:text-white group-hover:opacity-100">
            <span>Details</span>
            <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
