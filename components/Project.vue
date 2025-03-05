<script setup lang="ts">
const props = defineProps<{
  project: any
}>()
</script>

<template>
  <NuxtLink :to="project._path">
    <div class="group relative h-full">
      <div
        class="projectInnerContainer border-primary-op10 border-solid border-1 hover:border-primary-hover rounded-xl p-5 transition-all duration-75 h-full flex flex-col"
      >
        <div class="flex-1">
          <p
            class="text-lg md:text-xl font-semibold max-w-2xl text-primary group-hover:text-black dark:group-hover:text-primary-hover transition-all duration-75 mb-2"
          >
            {{ project.title }}
          </p>
          <p class="text-primary text-sm md:text-base mb-3">{{ project.description }}</p>
          <ul class="list-none flex flex-row flex-wrap items-center gap-2 md:gap-3">
            <li v-for="tag in project.tags" :key="tag">
              <Tag :name="tag" />
            </li>
          </ul>
        </div>

        <div class="flex flex-row justify-between items-center mt-2 w-full">
          <div class="flex flex-row gap-3 z-50">
            <!-- Stop the click event from propagating to the NuxtLink -->
            <a @click.stop v-if="project.demo" class="flex items-center gap-0.5" :href="project.demo" target="_blank">
              <span class="text-sm md:text-base">Live Demo</span>
              <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
            </a>
            <a v-if="project.github" @click.stop class="flex items-center gap-0.5" :href="project.github" target="_blank">
              <span class="text-sm md:text-base">Github</span>
              <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
            </a>
          </div>
          <p class="text-black dark:text-white flex flex-row items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
            <span>Details</span>
            <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
