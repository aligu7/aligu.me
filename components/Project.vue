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
          <div class="flex justify-between">
            <p
              class="mb-2 max-w-2xl text-lg text-primary font-semibold transition-all duration-75 md:text-xl group-hover:text-black dark:group-hover:text-primary-hover"
            >
              {{ project.title }}
            </p>
            <!-- Completed green and In Progress yellow tailwind badge, darker in dark mode, In Progress has ping animation left -->
            <div class="flex items-center gap-2">
              <span v-if="project.status === 'In Progress'" class="inline-flex items-center border border-yellow-300 rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 font-medium dark:border-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                <span class="relative mr-1 size-3 flex">
                  <span class="absolute h-full w-full inline-flex rounded-full bg-yellow-400 opacity-75 animate-ping" />
                  <span class="relative size-3 inline-flex rounded-full bg-yellow-500" />
                </span>
                In Progress
              </span>
              <span v-if="project.status === 'Completed'" class="inline-flex items-center border border-green-300 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 font-medium dark:border-green-800 dark:bg-green-700 dark:text-green-100">
                Completed
              </span>
            </div>
          </div>
          <p class="mb-3 text-sm text-primary md:text-base">
            {{ project.description }}
          </p>
          <ul class="flex flex-row flex-wrap items-center gap-1 list-none md:gap-1.5">
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
