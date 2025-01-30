<script setup lang="ts">
const props = defineProps<{
  path: string
}>()

const path = props.path.split('/')[1]
</script>

<template>
  <NuxtLink class="btn-secondary" :to="props.path">
    <div class="i-mingcute:arrow-left-line"></div>
    <span>Back to {{ path[0].toUpperCase() + path.slice(1, path.length) }}</span>
  </NuxtLink>
</template>

<style scoped>
a {
  @apply no-underline;
}
</style>
