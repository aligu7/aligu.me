<script setup lang="ts">
import { getIconName } from "@/utils/utils"

// Add console.log to debug
const { data, error } = await useAsyncData("social", () => {
  return queryContent("social").findOne()
})

// Debug logs
console.log("Data:", data.value)
console.log("Error:", error.value)

const socialLinks = computed(() => data.value?.social || [])
</script>

<template>
  <div>
    <nav class="fixed left-50% top-0 z-99 h-15 w-full flex items-center justify-between px-5 max-w-8xl md:h-24 -translate-x-50% md:px-8">
      <Logo />
      <ul class="flex items-center justify-between gap-x-2 list-none md:gap-x-3">
        <div class="flex gap-x-1 text-xxs md:gap-x-3 md:text-base">
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects">
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">
              Blog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="new" to="/pdf/Ali_Guliyev_Resume.pdf">
              Resume
            </NuxtLink>
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
