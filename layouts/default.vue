<script setup lang="ts">
const isDark = useDark()

const loadingColor = computed(() =>
  isDark.value
    ? 'repeating-linear-gradient(to right, #a1a1a1 0%, #c9c9c9 50%, #ffffff 100%)'
    : 'repeating-linear-gradient(to right, #616161 0%, #383838 50%, #000000 100%)',
)
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <!-- Background Animation -->
      <BgAnimation class="fixed top-0 left-0 w-full h-full pointer-events-none" />

      <!-- Main content with navbar -->
      <div class="absolute top-0 left-0 w-screen h-screen overflow-y-auto">
        <Navbar />

        <!-- Wrap content in a container -->
        <div class="min-h-screen">
          <NuxtLoadingIndicator :color="loadingColor" />
          <NuxtPage />

          <!-- Footer after content -->
          <p class="text-center py-5 text-primary-light text-sm">2024-PRESENT © Ali Guliyev</p>
        </div>

        <ScrollToTop />
      </div>
    </ClientOnly>
  </div>
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
