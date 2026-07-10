<script setup>
const showButton = ref(false)
const scrollContainer = ref(null)
const isWindow = ref(false)

const handleScroll = () => {
  if (isWindow.value) {
    showButton.value = window.scrollY > 300
  } else if (scrollContainer.value) {
    showButton.value = scrollContainer.value.scrollTop > 300
  }
}

const scrollToTop = () => {
  if (isWindow.value) {
    window.scrollTo({ top: 0, behavior: "smooth" })
  } else if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: "smooth" })
  }
}

onMounted(() => {
  // Prefer a dedicated scroll container; otherwise fall back to window scrolling.
  scrollContainer.value = document.querySelector(".overflow-y-auto")
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", handleScroll)
  } else {
    isWindow.value = true
    window.addEventListener("scroll", handleScroll)
  }
  handleScroll()
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", handleScroll)
  } else {
    window.removeEventListener("scroll", handleScroll)
  }
})
</script>

<template>
  <button
    v-show="showButton"
    class="fixed bottom-3 right-3 z-50 cursor-pointer rounded-full border-none bg-primary p-2.5 text-lg text-white shadow-lg md:bottom-6 md:right-6 dark:bg-dark-200 hover:bg-primary-hover md:p-3 md:text-xl dark:hover:bg-dark-100"
    @click="scrollToTop"
  >
    <div class="i-mingcute:arrow-up-line" />
  </button>
</template>
