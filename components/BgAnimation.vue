<template>
  <div>
    <canvas ref="canvasElement"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const isDark = useDark()
const canvasElement = ref(null)

onMounted(() => {
  const canvas = canvasElement.value
  const ctx = canvas.getContext('2d')

  // Initial resize
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // Matrix effect setup
  let cols = Math.floor(window.innerWidth / 20) + 1
  let ypos = Array(cols).fill(0)

  const initialBackground = () => {
    ctx.fillStyle = isDark.value ? '#000' : '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
  initialBackground()

  const matrix = () => {
    const w = window.innerWidth
    const h = window.innerHeight

    // Update canvas dimensions if needed
    if (canvas.width !== w || canvas.height !== h) resizeCanvas()

    // Set overlay and text color based on theme
    if (isDark.value) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = 'white' // white for dark mode
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = '#000' // Black for light mode
    }

    ctx.font = '10pt monospace'

    // Draw characters
    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128)
      const x = ind * 20
      ctx.globalAlpha = isDark.value ? 0.13 : 0.1 // Adjust opacity
      ctx.fillText(text, x, y)
      ctx.globalAlpha = 1 // Reset opacity

      // Update position
      y > 100 + Math.random() * 10000 ? (ypos[ind] = 0) : (ypos[ind] = y + 20 + (Math.random() * 2 - 1))
    })
  }

  // Theme change handler
  watch(isDark, () => {
    ctx.fillStyle = isDark.value ? '#000' : '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  })

  // Start animation
  setInterval(matrix, 50)
})
</script>

<style scoped>
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
