<template>
  <NuxtLink class="btn-primary" @click="$router.back()">
    <span>&gt; &nbsp; cd ..</span>
  </NuxtLink>
</template>

<style scoped>
a {
  @apply no-underline;
}
</style>
