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
    <div class="px-8 pr-4 rounded-full border border-cyan-500/20 dark:border-cyan-500/30 bg-white/90 dark:bg-[#050510]/85 backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex items-center justify-between h-16 w-full relative overflow-hidden">
      <!-- Neon glow border effect -->
      <div class="absolute inset-0 rounded-full border border-cyan-500/10 dark:border-cyan-500/20 pointer-events-none"></div>
      <div class="absolute inset-0 rounded-full pointer-events-none opacity-0 dark:opacity-100" style="box-shadow: 0 0 15px rgba(0,240,255,0.2), inset 0 0 15px rgba(0,240,255,0.1);"></div>

      <NuxtLink to="/" class="flex items-center gap-2 group py-2 mr-8 relative z-10" @click.prevent="goHome">
        <img src="/logo-black.png" alt="Tiago Martins Logo" class="h-10 w-auto transition-opacity duration-300 dark:hidden" />
        <img src="/logo-white.png" alt="Tiago Martins Logo" class="h-10 w-auto transition-opacity duration-300 hidden dark:block" />
        <span class="text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100 hidden sm:block" style="font-family: 'Orbitron', sans-serif;">
          Tiago Martins
        </span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-2 relative z-10">
        <NuxtLink to="/" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-all duration-300 group">
          Início
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#00f0ff] transition-all duration-300"></div>
        </NuxtLink>
        <NuxtLink to="/sobre" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-all duration-300 group">
          Sobre
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#00f0ff] transition-all duration-300"></div>
        </NuxtLink>
        <NuxtLink to="/projetos" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-all duration-300 group">
          Projetos
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#00f0ff] transition-all duration-300"></div>
        </NuxtLink>
        <NuxtLink to="/certificados" class="relative px-6 py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-all duration-300 group">
          Certificados
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-100 group-[.active-glow]:opacity-100 shadow-[0_0_12px_#00f0ff] transition-all duration-300"></div>
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center ml-2 pl-4 border-l border-slate-200/50 dark:border-cyan-500/20 h-8 relative z-10">
        <button
          @click="onToggleTheme"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/5 dark:hover:bg-cyan-500/10 group relative overflow-hidden"
          aria-label="Alternar tema"
          :title="'Modo atual: ' + (colorMode.preference === 'system' ? 'Automático' : (colorMode.preference === 'dark' ? 'Escuro' : 'Claro'))"
        >
          <!-- Glow effect -->
          <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 dark:opacity-100 transition-opacity duration-300" style="box-shadow: 0 0 15px rgba(0,240,255,0.3);"></div>
          
          <div v-if="colorMode.preference === 'light'" class="relative w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 group-hover:border-orange-300 transition-colors">
             <Icon name="heroicons:sun-20-solid" class="text-orange-500 w-5 h-5" />
          </div>
          <div v-else-if="colorMode.preference === 'dark'" class="relative w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors">
            <Icon name="heroicons:moon-20-solid" class="text-neon-cyan w-5 h-5 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
          </div>
          <div v-else class="relative w-8 h-8 rounded-full bg-slate-100 dark:bg-cyan-500/5 flex items-center justify-center border border-slate-200 dark:border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
            <Icon name="heroicons:computer-desktop-20-solid" class="text-slate-600 dark:text-cyan-400 w-5 h-5" />
          </div>
        </button>
      </div>

      <button
        class="md:hidden ml-4 p-2 text-slate-900 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors relative z-10"
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
        overlay: { background: 'bg-black/70 backdrop-blur-sm' },
        base: 'bg-white dark:bg-deep-space border-l border-cyan-500/20'
      }"
    >
      <div class="h-full flex flex-col bg-white dark:bg-deep-space text-slate-900 dark:text-white">
        <div class="p-6 flex items-center justify-between border-b border-slate-200 dark:border-cyan-500/20">
          <span class="font-bold text-lg" style="font-family: 'Orbitron', sans-serif;">Menu</span>
          <button @click="openMobile = false" class="p-2 text-slate-500 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">
            <Icon name="heroicons:x-mark-20-solid" class="w-6 h-6" />
          </button>
        </div>
        <div class="flex-1 p-6 flex flex-col gap-2 overflow-y-auto">
          <NuxtLink to="/" class="px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" @click="openMobile = false">Início</NuxtLink>
          <NuxtLink to="/sobre" class="px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" @click="openMobile = false">Sobre</NuxtLink>
          <NuxtLink to="/projetos" class="px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" @click="openMobile = false">Projetos</NuxtLink>
          <NuxtLink to="/certificados" class="px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" @click="openMobile = false">Certificados</NuxtLink>

          <div class="mt-6 pt-6 border-t border-slate-200 dark:border-cyan-500/20">
            <p class="px-4 text-xs font-semibold text-slate-400 uppercase mb-3" style="font-family: 'Rajdhani', sans-serif;">Tema</p>
            <div class="grid grid-cols-3 gap-2 px-2">
              <button
                @click="colorMode.preference = 'light'"
                class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-300"
                :class="colorMode.preference === 'light' ? 'bg-cyan-100 dark:bg-cyan-900/30 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'border-transparent hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-400'"
              >
                <Icon name="heroicons:sun-20-solid" class="w-5 h-5" />
                <span class="text-xs font-medium">Claro</span>
              </button>
              <button
                @click="colorMode.preference = 'dark'"
                class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-300"
                :class="colorMode.preference === 'dark' ? 'bg-cyan-100 dark:bg-cyan-900/30 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'border-transparent hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-400'"
              >
                <Icon name="heroicons:moon-20-solid" class="w-5 h-5" />
                <span class="text-xs font-medium">Escuro</span>
              </button>
               <button
                @click="colorMode.preference = 'system'"
                class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-300"
                :class="colorMode.preference === 'system' ? 'bg-cyan-100 dark:bg-cyan-900/30 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'border-transparent hover:bg-slate-100 dark:hover:bg-cyan-500/10 text-slate-600 dark:text-slate-400'"
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
