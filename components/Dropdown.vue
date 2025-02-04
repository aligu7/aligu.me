<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: String,
  options: Array,
})

const emit = defineEmits(['update:modelValue'])
const dropdownEl = ref(null)
const isOpen = ref(false)

// Click outside handler
onClickOutside(dropdownEl, () => {
  isOpen.value = false
})

const selectOption = (option) => {
  emit('update:modelValue', option)
  isOpen.value = false
}
</script>

<template>
  <div class="relative" ref="dropdownEl">
    <button @click="isOpen = !isOpen"
      class="bg-transparent group flex items-center gap-2 px-4 py-2 border border-solid border-primary border-opacity-20 hover:border-opacity-100 rounded-xl transition-all duration-200">
      <span class="text-primary">{{ modelValue }}</span>
      <svg class="w-4 h-4 text-primary transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="none"
        stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <ul v-show="isOpen"
        class="z-60 list-none absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-xl shadow-lg border border-solid border-primary border-opacity-20 focus:outline-none z-10">
        <li v-for="option in options" :key="option"
          class="px-4 py-3 text-sm text-primary cursor-pointer hover:bg-gray-50 transition-colors duration-100 first:rounded-t-xl last:rounded-b-xl"
          :class="{ 'bg-gray-100': modelValue === option }" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>
