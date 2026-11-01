<script setup lang="ts">
const { y } = useWindowScroll()
const showButton = computed(() => y.value > 300)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <button
    v-show="showButton"
    type="button"
    aria-label="Scroll to top"
    class="fixed bottom-3 right-3 z-50 cursor-pointer rounded-full border-none bg-primary p-2.5 text-lg text-white shadow-lg md:bottom-6 md:right-6 dark:bg-dark-200 hover:bg-primary-hover md:p-3 md:text-xl dark:hover:bg-dark-100"
    @click="scrollToTop"
  >
    <span class="i-mingcute:arrow-up-line block" />
  </button>
</template>
