<script setup lang="ts">
const { toggleDark } = useThemeToggle()
</script>

<template>
  <button type="button" title="Toggle Color Scheme" aria-label="Toggle color scheme" class="border-0 bg-transparent p-0 text-inherit" @click="toggleDark">
    <span i-ri-sun-line block cursor-pointer text-lg dark:i-ri-moon-line md:text-xl />
  </button>
</template>
