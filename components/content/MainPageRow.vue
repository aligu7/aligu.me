<script setup lang="ts">
type item = {
  name?: string
  icon: string
  isCustomIcon?: boolean
  link: string
}

defineProps<{
  items: item[]
}>()
</script>

<template>
  <div class="mainPageItemsRow mt-2.5 flex flex-wrap items-center gap-x-2">
    <ContentSlot :use="$slots.default" />
    <NuxtLink
      v-for="item in items"
      :key="item.name"
      :class="[item.name ? 'my-1 flex cursor-pointer items-center gap-x-1 rounded-3xl bg-gray-100 px-2 py-0.75 text-primary dark:bg-dark hover:bg-gray-200 md:px-3 md:py-1 dark:hover:bg-dark-300' : 'mx-0.5 sm:mx-1']"
      :to="item.link"
      target="_blank"
    >
      <span v-if="item.name" class="text-xs md:text-sm">{{ item.name }}</span>
      <img v-if="item.isCustomIcon" :src="item.icon">
      <Icon v-else class="icon" :icon="getIconName(item.icon)" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.icon {
  @apply h-5 w-5 md:h-6 md:w-6;
}
</style>
