<script setup lang="ts">
import { Icon } from "@iconify/vue"

const props = defineProps<{
  name: string
}>()

const iconName = computed(() => {
  // Convert 'i-logos:vue' format to 'logos:vue'
  return props.name.startsWith("i-") ? props.name.slice(2) : props.name
})
</script>

<template>
  <Icon :icon="iconName" />
</template>
