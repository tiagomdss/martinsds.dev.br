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
  const current = colorMode.preference
  let next = 'light'
  
  if (current === 'system') next = 'light'
  else if (current === 'light') next = 'dark'
  else if (current === 'dark') next = 'system'
  
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('theme-toggle', { detail: { x: e.clientX, y: e.clientY, next } }))
  }
  colorMode.preference = next
}

const openMobile = ref(false)

const route = useRoute()
const router = useRouter()

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
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[95vw] sm:max-w-5xl z-50 transition-all duration-300">
    <div class="px-8 pr-4 rounded-full border border-neutral-200/50 dark:border-white/10 bg-white/90 dark:bg-[#050505]/80 backdrop-blur-xl shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-between h-16 w-full">
      
      <NuxtLink to="/" class="flex items-center gap-2 group py-2 mr-8" @click.prevent="goHome">
        <img src="/logo-black.png" alt="Tiago Martins Logo" class="h-10 w-auto transition-opacity duration-300 dark:hidden" />
        <img src="/logo-white.png" alt="Tiago Martins Logo" class="h-10 w-auto transition-opacity duration-300 hidden dark:block" />
        <span class="text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100 hidden sm:block">
          Tiago Martins
        </span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-2">
        <NuxtLink to="/" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group" active-class="text-slate-900 dark:text-white font-bold active-glow">
          Início
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#a855f7] transition-all duration-300"></div>
        </NuxtLink>
        <NuxtLink to="/sobre" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group" active-class="text-slate-900 dark:text-white font-bold active-glow">
          Sobre
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#a855f7] transition-all duration-300"></div>
        </NuxtLink>
        <NuxtLink to="/projetos" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group" active-class="text-slate-900 dark:text-white font-bold active-glow">
          Projetos
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#a855f7] transition-all duration-300"></div>
        </NuxtLink>
        <NuxtLink to="/certificados" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group" active-class="text-slate-900 dark:text-white font-bold active-glow">
          Certificados
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#a855f7] transition-all duration-300"></div>
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center ml-2 pl-4 border-l border-neutral-200 dark:border-white/10 h-8">
        <button 
          @click="onToggleTheme" 
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 group"
          aria-label="Alternar tema"
          :title="'Modo atual: ' + (colorMode.preference === 'system' ? 'Automático' : (colorMode.preference === 'dark' ? 'Escuro' : 'Claro'))"
        >
          <div v-if="colorMode.preference === 'light'" class="relative w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 group-hover:border-orange-300 transition-colors">
             <Icon name="heroicons:sun-20-solid" class="text-orange-500 w-5 h-5" />
          </div>
          <div v-else-if="colorMode.preference === 'dark'" class="relative w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors">
            <Icon name="heroicons:moon-20-solid" class="text-yellow-400 w-5 h-5 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
          </div>
          <div v-else class="relative w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/20 transition-colors">
            <Icon name="heroicons:computer-desktop-20-solid" class="text-slate-600 dark:text-slate-300 w-5 h-5" />
          </div>
        </button>
      </div>

      <button 
        class="md:hidden ml-4 p-2 text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-primary transition-colors"
        @click="openMobile = true"
        aria-label="Abrir menu"
      >
        <Icon name="heroicons:bars-3-20-solid" class="w-6 h-6" />
      </button>

    </div>

    <USlideover
      v-model="openMobile"
      side="right"
      class="z-[60]"
      :ui="{
        width: 'w-72',
        overlay: { background: 'bg-black/60 backdrop-blur-sm' },
        base: 'bg-white dark:bg-obsidian border-l border-neutral-200 dark:border-white/10'
      }"
    >
      <div class="h-full flex flex-col bg-white dark:bg-obsidian text-slate-900 dark:text-white">
        <div class="p-6 flex items-center justify-between border-b border-neutral-200 dark:border-white/10">
          <span class="font-bold text-lg">Menu</span>
          <button @click="openMobile = false" class="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Icon name="heroicons:x-mark-20-solid" class="w-6 h-6" />
          </button>
        </div>
        <div class="flex-1 p-6 flex flex-col gap-2 overflow-y-auto">
          <NuxtLink to="/" class="px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" @click="openMobile = false">Início</NuxtLink>
          <NuxtLink to="/sobre" class="px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" @click="openMobile = false">Sobre</NuxtLink>
          <NuxtLink to="/projetos" class="px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" @click="openMobile = false">Projetos</NuxtLink>
          <NuxtLink to="/certificados" class="px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" @click="openMobile = false">Certificados</NuxtLink>
          
          <div class="mt-6 pt-6 border-t border-neutral-200 dark:border-white/10">
            <p class="px-4 text-xs font-semibold text-slate-400 uppercase mb-3">Tema</p>
            <div class="grid grid-cols-3 gap-2 px-2">
              <button 
                @click="colorMode.preference = 'light'"
                class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all"
                :class="colorMode.preference === 'light' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300' : 'border-transparent hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'"
              >
                <Icon name="heroicons:sun-20-solid" class="w-5 h-5" />
                <span class="text-xs font-medium">Claro</span>
              </button>
              <button 
                @click="colorMode.preference = 'dark'"
                class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all"
                :class="colorMode.preference === 'dark' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300' : 'border-transparent hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'"
              >
                <Icon name="heroicons:moon-20-solid" class="w-5 h-5" />
                <span class="text-xs font-medium">Escuro</span>
              </button>
               <button 
                @click="colorMode.preference = 'system'"
                class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all"
                :class="colorMode.preference === 'system' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300' : 'border-transparent hover:bg-neutral-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'"
              >
                <Icon name="heroicons:computer-desktop-20-solid" class="w-5 h-5" />
                <span class="text-xs font-medium">Auto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </USlideover>
  </nav>
</template>
