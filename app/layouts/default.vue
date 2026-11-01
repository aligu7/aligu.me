<template>
  <Navbar />

  <div class="min-h-screen">
    <slot />

    <footer class="flex items-center justify-center gap-2 pb-10 pt-5 text-center text-sm text-primary-light">
      <NuxtLink class="flex items-center gap-0.5" to="https://ring.liampas.ca/left" aria-label="Previous site in the webring">
        <span class="i-mingcute:arrow-left-line mt-0.5 text-sm" />
      </NuxtLink>
      <span>2024-PRESENT © Ali Guliyev</span>
      <NuxtLink class="flex items-center gap-0.5" to="https://ring.liampas.ca/right" aria-label="Next site in the webring">
        <span class="i-mingcute:arrow-right-line mt-0.5 text-sm" />
      </NuxtLink>
    </footer>
  </div>

  <ScrollToTop />
</template>

<style>
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
