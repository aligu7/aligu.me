<template>
  <button v-show="showButton" @click="scrollToTop"
    class="hover:bg-primary-hover cursor-pointer rounded-full border-none bg-primary text-white text-lg md:text-xl fixed bottom-3 right-3 md:bottom-6 md:right-6 p-2.5 md:p-3 shadow-lg z-50">
    <div class="i-mingcute:arrow-up-line"></div>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const scrollContainer = ref(null)

const handleScroll = () => {
  if (scrollContainer.value) {
    // Check scrollTop of the container rather than window.scrollY
    showButton.value = scrollContainer.value.scrollTop > 300
  }
}

const scrollToTop = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  // Grab the scrollable container. Make sure the selector uniquely identifies your container.
  scrollContainer.value = document.querySelector('.overflow-y-auto')
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>
