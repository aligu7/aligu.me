<template>
  <NuxtLink class="logo" to="/">
    <svg class="w-18 h-18" viewBox="0 0 737 874" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="animated-path"
        d="M109.501 662.071C124.001 551.071 -18.7825 642.071 39.5008 705.071C83.9529 760.937 163.439 765.093 208.001 705.07C257.001 639.071 298.284 507.82 264.501 402.071C210.284 248.07 261.5 150.23 303 104.73M303 104.73C364 32.7296 455.284 61.5704 486.284 90.0704C561.881 159.57 439.236 270.437 394.784 214.57M303 104.73C277.732 163.432 335 327 398.618 421.73M308.284 641.57C298.784 705.07 370.984 757.127 427.784 683.57C453.196 650.662 448.433 617.947 453.5 569M453.5 569C457.664 528.773 444.653 492.5 415.5 448C386.347 403.5 407.942 436.124 398.618 421.73M453.5 569C453.5 569 519.942 555.07 562.613 507.82C605.284 460.57 642.784 460.57 642.784 460.57M398.618 421.73C462.658 343.23 516.784 363.57 577.784 301.57"
        stroke="black" stroke-width="35" />
      <circle class="animated-circle" cx="606.784" cy="696.07" r="53" stroke="black" stroke-width="30" />
    </svg>
  </NuxtLink>
</template>

<style scoped lang="scss">
svg {
  margin-top: 10px;
  margin-left: -10px;
}

.animated-path {
  stroke-dasharray: 2000;
  /* Adjust based on path length */
  stroke-dashoffset: 2000;
  /* Start hidden */
  animation: drawPath 5s infinite alternate;
  /* Infinite alternate animation */
}

@keyframes drawPath {
  0% {
    stroke-dashoffset: 2000;
    /* Start hidden */
  }

  50% {
    stroke-dashoffset: 0;
    /* Draw path */
  }

  100% {
    stroke-dashoffset: 2000;
    /* Erase path */
  }
}

.animated-circle {
  stroke-dasharray: 330;
  /* Approximate circumference of the circle (2πr) */
  stroke-dashoffset: 330;
  /* Start hidden */
  animation: drawCircle 5s infinite alternate;
  /* Infinite alternate animation */
}

@keyframes drawCircle {
  0% {
    stroke-dashoffset: 330;
    /* Start hidden */
  }

  50% {
    stroke-dashoffset: 0;
    /* Draw circle */
  }

  100% {
    stroke-dashoffset: 330;
    /* Erase circle */
  }
}
</style>
