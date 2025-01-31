<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="px-2.5 py-0.3 bg-primary text-white rounded-full">
    {{ name }}
  </div>
</template>
