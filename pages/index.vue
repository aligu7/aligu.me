<script setup lang="ts">
import { useMainPageItemsRowAnimation } from "~/composables/useMainPageItemsRowAnimation"

useMainPageItemsRowAnimation()
</script>

<template>
  <main class="page">
    <ContentDoc />
    <NuxtLink
      to="/about"
      class="mt-4 w-45 flex items-center gap-x-1 border-b border-b-1 border-b-primary-light border-b-solid hover:border-b-primary-hover"
    >
      <span>Read more about me</span>
      <Icon icon="mingcute:arrow-right-line" class="pt-0.5" />
    </NuxtLink>
    <CurrentProjects class="mt-7" />
  </main>
</template>
