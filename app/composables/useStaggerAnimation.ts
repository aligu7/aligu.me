import type { MaybeRefOrGetter } from "vue"
import { gsap } from "gsap"

type StaggerOptions = {
  duration?: number
  stagger?: number
  y?: number
  ease?: string
}

/**
 * Fades in the elements matching `selector` with a staggered move-up,
 * on mount and again whenever `source` changes (e.g. after filtering).
 */
export function useStaggerAnimation(
  selector: string,
  source?: MaybeRefOrGetter<unknown>,
  { duration = 0.3, stagger = 0.2, y = 20, ease = "power2.out" }: StaggerOptions = {},
) {
  function animate() {
    const elements = document.querySelectorAll(selector)
    if (!elements.length)
      return
    gsap.fromTo(elements, { opacity: 0, y }, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      clearProps: "all",
    })
  }

  onMounted(animate)
  if (source)
    watch(() => toValue(source), () => nextTick(animate), { deep: true })
  onBeforeUnmount(() => gsap.killTweensOf(selector))
}
