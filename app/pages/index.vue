<script setup lang="ts">
const { data: page } = await useAsyncData("home", () =>
  queryCollection("pages").path("/").first())

useSeoMeta({
  title: "Ali Guliyev",
  description: () => page.value?.description,
})

useStaggerAnimation(".main-page-row", undefined, { duration: 1, stagger: 0.2, y: -10 })
</script>

<template>
  <main class="page">
    <ContentRenderer v-if="page" :value="page" />
    <CurrentOrLatestProjects class="mt-7" />
  </main>
</template>
