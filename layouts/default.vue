<!-- layouts/default.vue -->
<template>
  <div class="relative">
    <ClientOnly>
      <!-- Background Animation -->
      <BgAnimation class="fixed top-0 left-0 w-full h-full pointer-events-none" style="opacity: 0.07" />

      <!-- Main content with navbar -->
      <div class="absolute top-0 left-0 w-screen h-screen overflow-y-auto">
        <Navbar />

        <NuxtPage />

        <p class="text-center py-5 mb-30 md:mb-5 text-primary-light text-sm">2024-PRESENT © Ali Guliyev</p>
      </div>
    </ClientOnly>
  </div>
</template>
