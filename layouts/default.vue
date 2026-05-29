<script setup lang="ts">
const isDark = useDark()

const loadingColor = computed(() =>
  isDark.value
    ? "repeating-linear-gradient(to right, #a1a1a1 0%, #c9c9c9 50%, #ffffff 100%)"
    : "repeating-linear-gradient(to right, #616161 0%, #383838 50%, #000000 100%)",
)

useHead(() => ({
  meta: [
    {
      name: "theme-color",
      content: isDark.value ? "#050505" : "#ffffff",
    },
  ],
}))
</script>

<template>
  <Navbar />

  <div class="min-h-screen">
    <NuxtLoadingIndicator :color="loadingColor" />
    <NuxtPage />

    <div class="flex items-center justify-center gap-2 pb-10 pt-5 text-center text-sm text-primary-light">
      <NuxtLink rel="" class="flex items-center gap-0.5" to="https://ring.liampas.ca/left">
        <Icon icon="mingcute:arrow-left-line" class="mt-0.5 text-sm" />
      </NuxtLink>
      <span>2024-PRESENT © Ali Guliyev</span>
      <NuxtLink rel="" class="flex items-center gap-0.5" to="https://ring.liampas.ca/right">
        <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
      </NuxtLink>
    </div>
  </div>

  <ScrollToTop />
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(-18px);
}
</style>
