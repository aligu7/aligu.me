<script setup lang="ts">
defineProps<{
  tags?: string[]
}>()
</script>

<template>
  <ul class="flex flex-row flex-wrap list-none items-center gap-1 md:gap-1.5">
    <li v-for="tag in tags" :key="tag">
      <Tag :name="tag" />
    </li>
  </ul>
</template>
