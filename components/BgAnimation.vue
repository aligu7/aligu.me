<template>
  <div>
    <canvas ref="canvasElement" width="500" height="500"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = useDark()

watch(isDark, () => {
  console.log(isDark.value)
})

const canvasElement = ref(null)

onMounted(() => {
  const canvas = canvasElement.value
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')
  let cols = Math.floor(window.innerWidth / 20) + 1
  let ypos = Array(cols).fill(0)

  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  function matrix() {
    const w = window.innerWidth
    const h = window.innerHeight

    if (canvas.width !== w) {
      canvas.width = w
      cols = Math.floor(window.innerWidth / 20) + 1
      ypos = Array(cols).fill(0)
    }
    if (canvas.height !== h) {
      canvas.height = h
    }

    ctx.fillStyle = '#fff1'
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = '#000'
    ctx.font = '10pt monospace'

    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128)
      const x = ind * 20
      ctx.fillText(text, x, y)
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0
      else ypos[ind] = y + 20
    })
  }

  setInterval(matrix, 50)
})
</script>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
