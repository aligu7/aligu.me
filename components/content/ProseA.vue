<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" id="prose-a"><slot /></a>
</template>
