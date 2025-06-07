<script setup lang="ts">
import { getIconName } from "@/utils/utils"

type Skill = {
  name: string
  icon: string
  link: string
}

defineProps<{
  skills: Skill[]
}>()
</script>

<template>
  <div class="skillsRow mt-2.5 flex flex-wrap items-center gap-x-2">
    <ContentSlot :use="$slots.default" />
    <NuxtLink
      v-for="skill in skills"
      :key="skill.name"
      class="my-1 flex cursor-pointer items-center gap-x-1 rounded-3xl bg-gray-100 px-2 py-0.75 text-primary dark:bg-dark hover:bg-gray-200 md:px-3 md:py-1 dark:hover:bg-dark-300"
      :to="skill.link"
      target="_blank"
    >
      <span class="text-xs md:text-sm">{{ skill.name }}</span>
      <Icon :icon="getIconName(skill.icon)" class="h-5 w-5 md:h-6 md:w-6" />
    </NuxtLink>
  </div>
</template>
