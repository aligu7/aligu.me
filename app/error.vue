<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps<{
  error: NuxtError
}>()

const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => is404.value ? "Not found - Ali Guliyev" : "Error - Ali Guliyev",
})
</script>

<template>
  <NuxtLayout>
    <main class="page">
      <h1 class="title">
        {{ is404 ? '404' : error.statusCode }}
      </h1>
      <p class="mb-5 mt-2">
        {{ is404 ? "This page doesn't exist." : 'Something went wrong.' }}
      </p>
      <button type="button" class="btn-primary border-x-0 border-t-0 bg-transparent p-0 text-primary-light" @click="clearError({ redirect: '/' })">
        &gt; &nbsp; cd ~
      </button>
    </main>
  </NuxtLayout>
</template>
