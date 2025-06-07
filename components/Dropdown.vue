<script setup>
import { ref } from "vue"

const props = defineProps({
  modelValue: String,
  options: Array,
})

const emit = defineEmits(["update:modelValue"])
const dropdownEl = ref(null)
const isOpen = ref(false)

// Click outside handler
onClickOutside(dropdownEl, () => {
  isOpen.value = false
})

const selectOption = (option) => {
  emit("update:modelValue", option)
  isOpen.value = false
}
</script>

<template>
  <div ref="dropdownEl" class="relative">
    <button
      class="group flex items-center gap-2 border-1 border-primary-op10 rounded-xl border-solid bg-transparent px-4 py-2 transition-all duration-200 hover:border-primary-hover"
      @click="isOpen = !isOpen"
    >
      <span class="text-primary">{{ modelValue }}</span>
      <svg
        class="h-4 w-4 text-primary transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <ul
        v-show="isOpen"
        class="absolute right-0 z-10 z-60 mt-2 w-48 origin-top-right border-1 border-primary-op10 rounded-xl border-solid bg-white shadow-lg list-none dark:bg-dark-400 focus:outline-none"
      >
        <li
          v-for="option in options"
          :key="option"
          class="cursor-pointer px-4 py-3 text-sm text-primary-hover transition-colors duration-100 first:rounded-t-xl last:rounded-b-xl hover:bg-gray-50 dark:hover:bg-dark-800"
          :class="{ 'bg-gray-100 dark:bg-dark-700': modelValue === option }"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>
