<script setup lang="ts">
useSeoMeta({
  title: 'Ali Guliyev',
})
</script>

<template>
  <main class="page">
    <ContentDoc />

    <NuxtLink to="/about"
      class="w-45 flex items-center gap-x-1 mt-4 border-b border-b-primary-light hover:border-b-primary-hover border-b-solid border-b-1">
      <span>Read more about me</span>
      <Icon icon="mingcute:arrow-right-line" class="pt-0.5" />
    </NuxtLink>

    <CurrentProjects class="mt-7" />
  </main>
</template>
