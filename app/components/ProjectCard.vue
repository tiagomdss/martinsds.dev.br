<template>
  <div class="group relative rounded-[2rem] overflow-hidden flex flex-col h-full border border-cyan-500/20 dark:border-cyan-500/30 bg-white dark:bg-[#0a0a1a] hover:border-cyan-500/50 dark:hover:border-cyan-500/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] hologram-effect">
    <!-- Neon glow effect on hover -->
    <div class="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style="box-shadow: 0 0 20px rgba(0,240,255,0.2), inset 0 0 20px rgba(0,240,255,0.05);"></div>
    
    <!-- Scan line effect -->
    <div class="absolute inset-0 overflow-hidden rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
      <div class="scan-line"></div>
    </div>

    <!-- Image section -->
    <div class="h-56 overflow-hidden relative bg-neutral-100 dark:bg-white/5">
      <transition name="fade">
        <USkeleton v-if="loading" class="absolute inset-0 w-full h-full bg-neutral-100 dark:bg-white/5 z-10" />
      </transition>
      <img
        ref="imgRef"
        :src="imageSrc"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        @load="onLoad"
        @error="onError"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 dark:opacity-70 dark:from-[#0a0a1a] transition-opacity duration-500"></div>
      <!-- Holographic overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <!-- Content Section -->
    <div class="p-7 flex flex-col flex-grow relative z-10">
      <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight transition-colors duration-200" style="font-family: 'Orbitron', sans-serif;">{{ project.title }}</h3>

      <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-5 line-clamp-3 flex-grow font-normal leading-relaxed transition-colors duration-200" style="font-family: 'Rajdhani', sans-serif;">
        {{ project.description || 'Um projeto incrível desenvolvido com tecnologias modernas.' }}
      </p>

      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in (project.tags || ['Desenv', 'Web'])"
          :key="tag"
          class="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-[#1a1a2e] text-neutral-600 dark:text-cyan-300 border border-neutral-200 dark:border-cyan-500/20 shadow-sm transition-all duration-200 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
        >
          {{ tag }}
        </span>
      </div>

      <NuxtLink
        :href="project.href"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full py-3.5 rounded-xl bg-cyan-50 dark:bg-[#0f0f23] hover:bg-cyan-100 dark:hover:bg-[#1a1a3e] text-cyan-600 dark:text-neon-cyan hover:text-cyan-700 dark:hover:text-cyan-300 font-medium text-center transition-all duration-300 border border-cyan-100 dark:border-cyan-500/20 hover:border-cyan-500/50 dark:hover:border-cyan-500/60 flex items-center justify-center gap-2 mt-auto hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
      >
        Ver Projeto
        <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from '#imports'

const props = defineProps<{
  project: {
    title: string
    href: string
    img?: string
    description?: string
    tags?: string[]
  }
}>()

const loading = ref(true)
const hasError = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)

const imageSrc = computed(() => {
  if (props.project.img) {
    return `/portfolio/${props.project.img}`
  }
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(props.project.href)}?w=600&h=400`
})

function onLoad() {
  loading.value = false
}

function onError() {
  hasError.value = true
  loading.value = false
}

onMounted(() => {
  if (imgRef.value?.complete) {
    loading.value = false
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
