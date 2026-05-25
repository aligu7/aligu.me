<script setup lang="ts">
const isDark = useDark()

const loadingColor = computed(() =>
  isDark.value
    ? "repeating-linear-gradient(to right, #a1a1a1 0%, #c9c9c9 50%, #ffffff 100%)"
    : "repeating-linear-gradient(to right, #616161 0%, #383838 50%, #000000 100%)",
)
</script>

<template>
  <div class="relative">
    <div class="relative">
      <!-- relative makes this a positioned element, so it paints above the fixed BgAnimation canvas -->
      <Navbar />

      <!-- Main content, native body scroll -->
      <div class="min-h-screen">
        <NuxtLoadingIndicator :color="loadingColor" />
        <NuxtPage />

        <!-- Footer after content -->
        <p class="pb-10 pt-5 text-center text-sm text-primary-light">
          2024-PRESENT © Ali Guliyev
        </p>
      </div>

      <ScrollToTop />
    </div>
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
