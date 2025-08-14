<script setup lang="ts">
import { computed, useColorMode, ref } from '#imports'
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
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="text-neutral-900 dark:text-white text-2xl font-semibold tracking-tight">Tiago Martins</NuxtLink>
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-neutral-700 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white transition">Início</NuxtLink>
          <NuxtLink to="/sobre" class="text-neutral-700 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white transition">Sobre</NuxtLink>
          <NuxtLink to="/#portfolio" class="text-neutral-700 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white transition">Portfólio</NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <!-- Mobile menu button -->
          <UButton class="md:hidden" color="white" variant="soft" aria-label="Abrir menu" @click="openMobile = true">
            <Icon name="heroicons:bars-3-20-solid" class="h-6 w-6" />
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

  <!-- Mobile slide-over menu -->
  <USlideover v-model="openMobile" side="right" :ui="{ width: 'w-72' }">
    <div class="p-4 flex items-center justify-between border-b border-neutral-200 dark:border-white/10">
      <span class="font-medium">Menu</span>
      <UButton color="white" variant="soft" aria-label="Fechar menu" @click="openMobile = false">
        <Icon name="heroicons:x-mark-20-solid" class="h-5 w-5" />
      </UButton>
    </div>
    <div class="p-4 flex flex-col gap-2">
      <NuxtLink to="/" class="py-2 px-2 rounded hover:bg-neutral-100 dark:hover:bg-white/10" @click="openMobile = false">Início</NuxtLink>
      <NuxtLink to="/sobre" class="py-2 px-2 rounded hover:bg-neutral-100 dark:hover:bg-white/10" @click="openMobile = false">Sobre</NuxtLink>
      <NuxtLink to="/#portfolio" class="py-2 px-2 rounded hover:bg-neutral-100 dark:hover:bg-white/10" @click="openMobile = false">Portfólio</NuxtLink>
    </div>
  </USlideover>
</template>
