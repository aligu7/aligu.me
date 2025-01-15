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
  <div class="flex items-center gap-x-2">
    <ContentSlot :use="$slots.default" />
    <NuxtLink
      v-for="skill in skills"
      :key="skill.name"
      class="flex items-center gap-x-1 bg-gray-1 px-3 py-1 cursor-pointer hover:bg-gray-2 rounded-3xl"
      :to="skill.link"
      target="_blank"
    >
      <span class="text-sm">{{ skill.name }}</span>
      <Icon :icon="getIconName(skill.icon)" width="1.5em" height="1.5em" />
    </NuxtLink>
  </div>
</template>
