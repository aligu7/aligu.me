<script setup lang="ts">
import { getIconName } from '@/utils/utils'

// Add console.log to debug
const { data, error } = await useAsyncData('social', () => {
  return queryContent('social').findOne()
})

// Debug logs
console.log('Data:', data.value)
console.log('Error:', error.value)

const socialLinks = computed(() => data.value?.social || [])
</script>

<template>
  <div>
    <nav class="z-99 fixed top-0 left-50% -translate-x-50% w-full h-15 md:h-24 flex items-center justify-between max-w-8xl px-5 md:px-8">
      <Logo />
      <ul class="flex items-center justify-between list-none gap-x-2 md:gap-x-3">
        <div class="flex gap-x-2 md:gap-x-3 text-xs md:text-base">
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink target="new" to="/pdf/Ali_Guliyev_Resume.pdf">Resume</NuxtLink>
          </li>
        </div>
        <li v-for="social in socialLinks" :key="social.icon" class="pt-1.75 md:pt-2">
          <NuxtLink :to="social.link" target="blank">
            <Icon :icon="getIconName(social.icon)" class="text-lg md:text-2xl" />
          </NuxtLink>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
nav {
  backdrop-filter: blur(5px);
  background-color: rgba(var(--nav-bg), 0.7);
}
</style>
