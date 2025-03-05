<!-- layouts/default.vue -->
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
  transition: all 0.7s;
}

.page-enter-from {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(-20px);
}
</style>
