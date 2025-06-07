<script setup lang="ts">
import { gsap } from "gsap"

import { observeMutations } from "@/utils/utils"

const animatePage = () => {
  const tl = gsap.timeline()

  tl.from("h1#about", {
    duration: 1,
    opacity: 0,
    y: -10,
    ease: "power2.out",
  }).from(
    "p",
    {
      duration: 0.5,
      opacity: 0,
      y: -10,
      stagger: 0.15,
      ease: "power2.out",
    },
    "-=0.7",
  )
}

onMounted(() => {
  // Initial animation
  animatePage()

  observeMutations("h1#about", animatePage)
  observeMutations("p", animatePage)
})
</script>

<template>
  <main class="about page">
    <ContentDoc />
  </main>
</template>
