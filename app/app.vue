<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <div
    ref="reveal"
    class="pointer-events-none fixed inset-0 z-[9999]"
    :style="revealStyle"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { useHead, useColorMode, onMounted, onBeforeUnmount, watch, ref } from '#imports'
useHead({
  htmlAttrs: { lang: 'pt' },
  bodyAttrs: { class: 'antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100' },
})
const colorMode = useColorMode()
const applyTheme = () => {
  if (typeof document === 'undefined') return
  const isDark = colorMode.preference === 'dark'
  document.documentElement.classList.toggle('dark', isDark)
}
onMounted(applyTheme)
watch(() => colorMode.preference, applyTheme)
watch(() => colorMode.value, applyTheme)

const reveal = ref<HTMLDivElement | null>(null)
const revealStyle = ref<Record<string, string>>({ display: 'none' })

function animateReveal(x: number, y: number, next: 'light' | 'dark') {
  if (!reveal.value) return
  const el = reveal.value
  const vw = window.innerWidth
  const vh = window.innerHeight
  const maxR = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y))
  const bg = next === 'dark' ? 'rgb(10 10 10 / 1)' : 'rgb(255 255 255 / 1)'
  el.style.background = bg
  el.style.clipPath = `circle(0px at ${x}px ${y}px)`
  el.style.transition = 'clip-path 500ms ease-out'
  revealStyle.value = { display: 'block' }
  void el.offsetHeight
  requestAnimationFrame(() => {
    el.style.clipPath = `circle(${maxR}px at ${x}px ${y}px)`
  })
  window.setTimeout(() => {
    revealStyle.value = { display: 'none' }
    el.style.transition = ''
    el.style.clipPath = ''
  }, 520)
}

function onThemeToggle(e: CustomEvent<{ x: number; y: number; next: 'light' | 'dark' }>) {
  const { x, y, next } = e.detail
  animateReveal(x, y, next)
}

onMounted(() => {
  window.addEventListener('theme-toggle', onThemeToggle as EventListener)
})
onBeforeUnmount(() => {
  window.removeEventListener('theme-toggle', onThemeToggle as EventListener)
})
</script>
