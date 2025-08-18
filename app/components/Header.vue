<script setup lang="ts">
import { computed, useColorMode, ref, useRoute, useRouter, nextTick } from '#imports'
const colorMode = useColorMode()
const isDark = computed({
  get() { return colorMode.value === 'dark' },
  set() {
    colorMode.preference = (colorMode.preference === 'dark') ? 'light' : 'dark'
  },
})

function onToggleTheme(e: MouseEvent) {
  const next = colorMode.preference === 'dark' ? 'light' : 'dark'
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('theme-toggle', { detail: { x: e.clientX, y: e.clientY, next } }))
  }
  colorMode.preference = next
}

const openMobile = ref(false)

const route = useRoute()
const router = useRouter()

// Portfolio navigation removed from header per request

async function goHome(e?: Event) {
  if (route.path === '/') {
    e?.preventDefault()
    await nextTick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    openMobile.value = false
    return
  }
  await router.push({ path: '/' })
  await router.isReady()
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 50)
  openMobile.value = false
}
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="group flex items-center gap-3 text-neutral-900 dark:text-white text-lg sm:text-xl font-semibold tracking-tight" @click.prevent="goHome">
          <span class="inline-flex h-8 w-8">
            <img :src="isDark ? '/logo-white.png' : '/logo-black.png'" alt="Logo" class="h-8 w-8 rounded-sm object-contain select-none pointer-events-none transition
              group-hover:[filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.45))]
              dark:group-hover:[filter:drop-shadow(0_2px_6px_rgba(255,255,255,0.45))]" />
          </span>
          <span class="leading-none">
            <span class="transition group-hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.35)] dark:group-hover:[text-shadow:0_1px_4px_rgba(255,255,255,0.25)]">T</span>iago
            <span class="ml-1 transition group-hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.35)] dark:group-hover:[text-shadow:0_1px_4px_rgba(255,255,255,0.25)]">M</span>artins
          </span>
        </NuxtLink>
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-neutral-700 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white transition" @click.prevent="goHome">Início</NuxtLink>
          <NuxtLink to="/sobre" class="text-neutral-700 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white transition">Sobre</NuxtLink>
          
          <NuxtLink to="/certificados" class="text-neutral-700 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white transition">Certificados</NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <UButton class="md:hidden" color="white" variant="soft" aria-label="Abrir menu" @click="openMobile = true">
            <Icon name="heroicons:bars-3-20-solid" class="h-6 w-6 text-neutral-900 dark:text-white" />
          </UButton>
          <UButton color="white" variant="soft" @click="onToggleTheme($event)" aria-label="Alternar tema">
            <Icon v-if="!isDark" name="heroicons:moon-20-solid" class="h-6 w-6 text-amber-500" />
            <Icon v-else name="heroicons:sun-20-solid" class="h-6 w-6 text-amber-400" />
          </UButton>
        </div>
      </div>
    </div>
  </nav>
  <div class="h-16" />
  
  <USlideover
    v-model="openMobile"
    side="right"
    class="z-[60]"
    :ui="{
      width: 'w-72',
      overlay: {
        background: 'bg-white/20 dark:bg-white/5',
        backdrop: 'backdrop-blur-md'
      }
    }"
  >
    <div class="min-h-screen bg-white dark:bg-neutral-800">
      <div class="p-4 flex items-center justify-between border-b border-neutral-200 dark:border-white/10 bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <span class="font-medium">Menu</span>
        <UButton color="white" variant="soft" aria-label="Fechar menu" @click="openMobile = false">
          <Icon name="heroicons:x-mark-20-solid" class="h-5 w-5 text-neutral-900 dark:text-white" />
        </UButton>
      </div>
      <div class="p-4 flex flex-col gap-2 text-neutral-900 dark:text-white">
        <NuxtLink to="/" class="py-2 px-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700" @click.prevent="goHome">Início</NuxtLink>
        <NuxtLink to="/sobre" class="py-2 px-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700" @click="openMobile = false">Sobre</NuxtLink>
        
        <NuxtLink to="/certificados" class="py-2 px-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700" @click="openMobile = false">Certificados</NuxtLink>
      </div>
    </div>
  </USlideover>
</template>
