<script setup lang="ts">
const { data } = await useAsyncData("social", () => {
  return queryContent("social").findOne()
})

const socialLinks = computed(() => data.value?.social || [])

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <!-- sm+: fixed + blur. mobile: static, no blur -->
  <nav class="top-0 h-15 w-full flex items-center justify-between px-5 max-w-8xl sm:fixed sm:left-50% sm:top-0 sm:z-99 sm:h-20 md:px-8 sm:bg-[var(--nav-bg)] sm:backdrop-blur-[10px] sm:-translate-x-50%">
    <Logo />

    <!-- Desktop nav (sm and above) -->
    <ul class="hidden items-center justify-between gap-x-2 list-none sm:flex sm:gap-x-3">
      <div class="flex gap-x-1 text-xs sm:gap-x-3 sm:text-base">
        <li>
          <NuxtLink to="/projects">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink target="new" to="/pdf/Ali_Guliyev_Resume.pdf">
            Resume
          </NuxtLink>
        </li>
      </div>
      <li v-for="social in socialLinks" :key="social.icon" class="pt-1.75 md:pt-2">
        <NuxtLink :to="social.link" target="blank">
          <Icon :icon="getIconName(social.icon)" class="text-lg md:text-2xl" />
        </NuxtLink>
      </li>
      <li>
        <ToggleTheme />
      </li>
    </ul>
  </nav>

  <!-- Mobile overlay & slide-in panel -->
  <Teleport to="body">
    <!-- Always-fixed hamburger (mobile only) -->
    <button
      class="mob-hamburger fixed right-5 top-4 z-99 h-[2em] w-[2em] cursor-pointer border-0 bg-transparent p-0 outline-none sm:hidden focus:opacity-75 hover:opacity-75"
      :class="{ open: menuOpen }"
      aria-label="Toggle navigation menu"
      @click="menuOpen = !menuOpen"
    >
      <span class="top-bar hbar absolute right-0 top-0 block h-[12%] w-full origin-top-right rounded-[2px]" />
      <span class="mid-bar hbar absolute right-0 top-[44%] block h-[12%] w-full rounded-[2px]" />
      <span class="bot-bar hbar absolute bottom-0 right-0 block h-[12%] w-full origin-bottom-right rounded-[2px]" />
    </button>

    <!-- Backdrop overlay -->
    <div
      class="mob-overlay fixed inset-0 z-97 bg-black/50 sm:hidden"
      :class="menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeMenu"
    />

    <!-- Slide-in panel -->
    <div
      class="mob-panel fixed bottom-0 right-0 top-0 z-98 w-[22em] flex flex-col items-end justify-center will-change-transform sm:hidden"
      :class="[{ open: menuOpen }, menuOpen ? 'translate-x-0' : 'translate-x-full']"
    >
      <!-- Skewed background -->
      <div
        class="panel-bg absolute inset-0 z-[-1] origin-bottom-right bg-[var(--body-bg)] will-change-transform"
        :style="{ transform: menuOpen ? 'skewX(-15deg) translateX(0)' : 'skewX(-15deg) translateX(100%)' }"
      />

      <!-- Panel links -->
      <div class="flex flex-col items-end gap-[0.25em] px-[2.5em] py-[1em]">
        <NuxtLink
          class="panel-link py-[0.2em] text-[1.5em] font-medium no-underline"
          :class="menuOpen ? 'translate-x-0' : 'translate-x-[150%]'"
          to="/projects"
          @click="closeMenu"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          class="panel-link py-[0.2em] text-[1.5em] font-medium no-underline"
          :class="menuOpen ? 'translate-x-0' : 'translate-x-[150%]'"
          to="/blog"
          @click="closeMenu"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          class="panel-link py-[0.2em] text-[1.5em] font-medium no-underline"
          :class="menuOpen ? 'translate-x-0' : 'translate-x-[150%]'"
          target="_blank"
          to="/pdf/Ali_Guliyev_Resume.pdf"
          @click="closeMenu"
        >
          Resume
        </NuxtLink>

        <!-- Social icons row -->
        <div
          class="panel-socials mt-[1.25em] flex items-center gap-[0.85em]"
          :class="menuOpen ? 'translate-x-0' : 'translate-x-[150%]'"
        >
          <NuxtLink
            v-for="social in socialLinks"
            :key="social.icon"
            class="panel-social-link text-[1.5em]"
            :to="social.link"
            target="_blank"
            @click="closeMenu"
          >
            <Icon :icon="getIconName(social.icon)" />
          </NuxtLink>
          <ToggleTheme />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* ─── Mobile hamburger circle ─── */
.mob-hamburger::before {
  content: "";
  position: absolute;
  width: 3.5em;
  height: 3.5em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--mob-btn-bg);
  transition: background 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: -1;
}

/* ─── Bar color + transitions ─── */
.mob-hamburger .hbar {
  background: var(--mob-btn-bar);
}

.hbar {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

/* Bar open-state transforms */
.open .top-bar {
  width: 141.42%;
  transform: rotate(-45deg) translateY(-50%);
}

.open .mid-bar {
  transform: scale(0.1);
}

.open .bot-bar {
  width: 141.42%;
  transform: rotate(45deg) translateY(50%);
}

/* ─── Element transitions ─── */
.mob-overlay {
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.mob-panel {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.panel-bg {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

/* ─── Panel link colors + transitions ─── */
/* color: var(--primary) overrides the global a:not(.account) { color: var(--primary-light) } rule */
.panel-link {
  color: var(--primary);
  transition:
    color 0.15s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.panel-link:hover,
.panel-link:focus {
  color: var(--primary-hover);
}

/* Staggered entrance delays */
.mob-panel.open .panel-link:nth-child(1) {
  transition-delay: 0s, 100ms;
}
.mob-panel.open .panel-link:nth-child(2) {
  transition-delay: 0s, 150ms;
}
.mob-panel.open .panel-link:nth-child(3) {
  transition-delay: 0s, 200ms;
}

/* ─── Social icons ─── */
.panel-social-link {
  color: var(--primary);
  transition: color 0.15s cubic-bezier(0.19, 1, 0.22, 1);
}

.panel-social-link:hover {
  color: var(--primary-hover);
}

.panel-socials {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.mob-panel.open .panel-socials {
  transition-delay: 260ms;
}
</style>
