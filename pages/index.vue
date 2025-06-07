<script setup lang="ts">
import { gsap } from "gsap"
import { nextTick, onBeforeUnmount, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
let observer: MutationObserver | null = null

// Function to animate elements
const animatePage = () => {
  const elements = document.querySelectorAll(".skillsRow")
  if (elements.length === 0) return

  gsap.from(elements, {
    opacity: 0,
    y: -10,
    duration: 1,
    stagger: 0.3,
    clearProps: "all",
  })
}

onMounted(async () => {
  await nextTick()
  animatePage() // Run animation on first load
  observer = observeMutations(".skillsRow", animatePage) // Observe dynamic content
})

router.afterEach(async () => {
  await nextTick()
  setTimeout(animatePage, 50) // Delay to ensure elements are available
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  gsap.killTweensOf(".skillsRow")
})
</script>

<template>
  <main class="page">
    <ContentDoc />
    <NuxtLink
      to="/about"
      class="mt-4 w-45 flex items-center gap-x-1 border-b border-b-1 border-b-primary-light border-b-solid hover:border-b-primary-hover"
    >
      <span>Read more about me</span>
      <Icon icon="mingcute:arrow-right-line" class="pt-0.5" />
    </NuxtLink>
    <CurrentProjects class="mt-7" />
  </main>
</template>
