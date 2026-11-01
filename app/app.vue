<script setup lang="ts">
const isDark = useDark()

const loadingColor = computed(() =>
  isDark.value
    ? "repeating-linear-gradient(to right, #a1a1a1 0%, #c9c9c9 50%, #ffffff 100%)"
    : "repeating-linear-gradient(to right, #616161 0%, #383838 50%, #000000 100%)",
)

useHead({
  meta: [
    { name: "theme-color", content: () => isDark.value ? "#050505" : "#ffffff" },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator :color="loadingColor" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
