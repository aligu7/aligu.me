<script setup lang="ts">
const router = useRouter()
const route = useRoute()

// Where "cd .." leads when there is no in-app history (e.g. direct page load)
const fallbackPath = computed(() => {
  if (route.path.startsWith("/projects/"))
    return "/projects"
  if (route.path.startsWith("/blog/"))
    return "/blog"
  return "/"
})

function handleClick(e: MouseEvent) {
  // Vue Router records the previous in-app entry in history.state.back
  if (window.history.state?.back) {
    e.preventDefault()
    router.back()
  }
}
</script>

<template>
  <NuxtLink :to="fallbackPath" class="btn-primary no-underline" @click="handleClick">
    <span>&gt; &nbsp; cd ..</span>
  </NuxtLink>
</template>
