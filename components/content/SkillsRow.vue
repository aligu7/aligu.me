<script setup lang="ts">
import { getIconName } from '@/utils/utils'

interface Skill {
  name: string
  icon: string
  link: string
}

defineProps<{
  skills: Skill[]
}>()
</script>

<template>
  <div class="skillsRow flex flex-wrap items-center gap-x-2 mt-2.5">
    <ContentSlot :use="$slots.default" />
    <NuxtLink v-for="skill in skills" :key="skill.name"
      class="flex items-center my-1 gap-x-1 bg-gray-1 px-2 md:px-3 py-0.75 md:py-1 cursor-pointer hover:bg-gray-2 rounded-3xl"
      :to="skill.link" target="_blank">
      <span class="text-xs md:text-sm">{{ skill.name }}</span>
      <Icon :icon="getIconName(skill.icon)" class="w-5 h-5 md:w-6 md:h-6" />
    </NuxtLink>
  </div>
</template>
