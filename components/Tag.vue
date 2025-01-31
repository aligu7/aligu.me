<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="px-2.5 py-1.5 bg-primary text-white rounded-full text-xs">
    {{ name }}
  </div>
</template>
