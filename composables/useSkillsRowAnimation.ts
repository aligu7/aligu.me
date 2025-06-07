import { gsap } from "gsap"

export const useSkillsRowAnimation = () => {
  const animate = () => {
    const elements = document.querySelectorAll<HTMLElement>(".skillsRow")
    if (!elements.length) return
    gsap.set(elements, { opacity: 0, y: -10 })
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      clearProps: "all",
    })
  }

  onMounted(() => {
    animate()
  })

  onBeforeUnmount(() => {
    gsap.killTweensOf(".skillsRow")
  })
}
