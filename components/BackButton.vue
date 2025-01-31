<script setup lang="ts">
const props = defineProps<{
  path: string
}>()
</script>

<template>
  <NuxtLink class="btn-primary" :to="props.path">
    <span>&gt; &nbsp; cd ..</span>
  </NuxtLink>
</template>

<style scoped>
a {
  @apply no-underline;
}
</style>
