<script setup lang="ts">
import { toggleDark } from '~/logics'
</script>

<template>
  <a title="Toggle Color Scheme" @click="toggleDark">
    <div cursor-pointer i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
