<script setup lang="ts">
import { animateItemsWithStagger, observeMutations } from '@/utils/utils'
import { gsap } from 'gsap'

const animatePage = () => {
  const tl = gsap.timeline()

  tl.from('h1#about', {
    duration: 1,
    opacity: 0,
    y: -10,
    ease: 'power2.out',
  }).from(
    'p',
    {
      duration: 0.5,
      opacity: 0,
      y: -10,
      stagger: 0.15,
      ease: 'power2.out',
    },
    '-=0.7',
  )
}

onMounted(() => {
  // Initial animation
  animatePage()

  observeMutations('h1#about', animatePage)
  observeMutations('p', animatePage)
})
</script>

<template>
  <main class="page">
    <ContentDoc />
  </main>
</template>
