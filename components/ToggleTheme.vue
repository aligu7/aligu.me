<script setup lang="ts">
import { toggleDark } from "~/logics"
</script>

<template>
  <a title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line cursor-pointer />
  </a>
</template>
