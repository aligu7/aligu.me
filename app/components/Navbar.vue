<script setup lang="ts">
const navLinks = useNavLinks()
const socialLinks = useSocialLinks()
</script>

<template>
  <!-- sm+: fixed + blur. mobile: static, no blur -->
  <nav class="top-0 h-15 w-full flex items-center justify-between px-5 max-w-8xl sm:fixed sm:left-50% sm:top-0 sm:z-99 sm:h-20 sm:bg-[var(--nav-bg)] md:px-8 sm:backdrop-blur-[10px] sm:-translate-x-50%">
    <Logo />

    <!-- Desktop nav (sm and above) -->
    <div class="hidden items-center justify-between gap-x-2 sm:flex sm:gap-x-3">
      <ul class="flex list-none gap-x-1 text-xs sm:gap-x-3 sm:text-base">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to" :target="link.external ? '_blank' : undefined">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex list-none items-center gap-x-2 sm:gap-x-3">
        <li v-for="social in socialLinks" :key="social.link" class="flex">
          <NuxtLink :to="social.link" target="_blank" :aria-label="social.label" class="flex">
            <span class="block text-lg md:text-2xl" :class="social.icon" />
          </NuxtLink>
        </li>
        <li class="flex">
          <ToggleTheme />
        </li>
      </ul>
    </div>
  </nav>

  <MobileMenu :nav-links="navLinks" :social-links="socialLinks" />
</template>
