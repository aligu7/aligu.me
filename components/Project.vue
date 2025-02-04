<script setup lang="ts">
const props = defineProps<{
  project: any
}>()
</script>

<template>
  <NuxtLink :to="project._path">
    <div
      class="group flex justify-between items-start border-primary border-solid border-1 border-opacity-10 hover:border-opacity-100 hover:border-primary-hover rounded-xl p-5 transition-all duration-75">
      <div class="projectInnerContainer flex flex-col justify-between gap-1 w-full">
        <div>
          <p
            class="text-lg md:text-xl font-semibold max-w-2xl text-primary group-hover:text-black transition-all duration-75 mb-1">
            {{ project.title }}
          </p>
          <p class="text-sm md:text-base">{{ project.description }}</p>
          <ul class="list-none flex flex-row flex-wrap items-center gap-2 md:gap-3 mt-2">
            <li v-for="tag in project.tags" :key="tag">
              <Tag :name="tag" />
            </li>
          </ul>
        </div>

        <div class="flex flex-row justify-between items-center mt-2 w-full">
          <div class="flex flex-row gap-3 z-50">
            <!-- Stop the click event from propagating to the NuxtLink -->
            <a @click.stop class="flex items-center gap-0.5" :href="project.demo" target="_blank">
              <span>Live Demo</span>
              <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
            </a>
            <a v-if="project.github" @click.stop class="flex items-center gap-0.5" :href="project.github"
              target="_blank">
              <span>Github</span>
              <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
            </a>
          </div>
          <p
            class="text-black flex flex-row items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
            <span>Details</span>
            <Icon icon="mingcute:arrow-right-line" class="text-sm mt-0.5" />
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
