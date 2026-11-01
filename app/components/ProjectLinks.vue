<script setup lang="ts">
defineProps<{
  demo?: string
  github?: string
}>()
</script>

<template>
  <div class="flex flex-row gap-3">
    <!-- .stop keeps the click from reaching a surrounding card link -->
    <a v-if="demo" class="flex items-center gap-0.5" :href="demo" target="_blank" rel="noopener" @click.stop>
      <span>Live Demo</span>
      <span class="i-mingcute:arrow-right-line mt-0.5 text-sm" />
    </a>
    <a v-if="github" class="flex items-center gap-0.5" :href="github" target="_blank" rel="noopener" @click.stop>
      <span>Github</span>
      <span class="i-mingcute:arrow-right-line mt-0.5 text-sm" />
    </a>
  </div>
</template>
