<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const lastRoute = useLastRoute()

// Computed destination based on current path if it's a direct load
const fallbackPath = computed(() => {
  if (route.path.startsWith("/projects/")) return "/projects"
  if (route.path.startsWith("/blogs/")) return "/blogs"
  return "/" // fallback if unknown
})

function handleClick(e: MouseEvent) {
  if (lastRoute.value?.name) {
    // Came from another Nuxt route → cancel NuxtLink default nav and go back
    e.preventDefault()
    router.back()
  }
}
</script>

<template>
  <NuxtLink :to="fallbackPath" class="btn-primary" @click="handleClick">
    <span>&gt; &nbsp; cd ..</span>
  </NuxtLink>
</template>

<style scoped>
a {
  @apply no-underline;
}
</style>
