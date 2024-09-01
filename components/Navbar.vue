<template>
  <div>
    <nav class="h-25 flex items-center justify-between max-w-8xl mx-auto px-8">
      <NuxtLink class="logo" to="/">
        <svg width="50px">
          <text class="text-4xl" x="0%" y="60%">Ag</text>
        </svg>
      </NuxtLink>
      <ul class="flex items-center justify-between list-none gap-x-4">
        <li><NuxtLink to="/about"> About</NuxtLink></li>
        <li><NuxtLink to="/blog"> Blog</NuxtLink></li>
        <li><NuxtLink to="/projects"> Projects</NuxtLink></li>
        <li>
          <NuxtLink target="blank">
            <div class="icon i-mdi-github"></div
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink target="blank">
            <div class="icon i-mingcute:linkedin-fill"></div
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink target="blank">
            <div class="icon i-mingcute:social-x-line"></div
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink target="blank">
            <div class="icon i-mingcute:discord-fill"></div
          ></NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.icon {
  @apply text-2xl;
}

svg {
  @apply font-[Pacifico-Regular];

  text {
    animation: stroke 5s infinite alternate;
    stroke-width: 0.5;
    @apply stroke-dark-1;
  }
}

@keyframes stroke {
  0% {
    fill: #488a1400;
    @apply stroke-dark-1;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 0.5;
  }
  40% {
    fill: transparent;
    @apply stroke-dark-1;
    stroke-width: 1.5;
  }
  60% {
    @apply fill-dark-1;
    stroke: #365fa000;
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
  100% {
    @apply fill-dark-1;
  }
}
</style>
