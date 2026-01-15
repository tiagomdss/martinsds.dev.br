<template>
  <div class="bg-white dark:bg-[#121212] rounded-[2rem] overflow-hidden flex flex-col h-full border border-neutral-200 dark:border-white/5 group hover:border-purple-500/30 transition-all duration-200 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
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
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 dark:opacity-50 dark:from-[#121212] transition-opacity duration-200"></div>
    </div>

    <!-- Content Section -->
    <div class="p-7 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight transition-colors duration-200">{{ project.title }}</h3>
      
      <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-5 line-clamp-3 flex-grow font-normal leading-relaxed transition-colors duration-200">
        {{ project.description || 'Um projeto incrível desenvolvido com tecnologias modernas.' }}
      </p>

      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tag in (project.tags || ['Desenv', 'Web'])" 
          :key="tag"
          class="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-[#1E1E1E] text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/5 shadow-sm transition-colors duration-200"
        >
          {{ tag }}
        </span>
      </div>

      <NuxtLink 
        :href="project.href" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full py-3.5 rounded-xl bg-purple-50 dark:bg-[#1a1625] hover:bg-purple-100 dark:hover:bg-[#2d2440] text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-center transition-all duration-200 border border-purple-100 dark:border-white/5 hover:border-purple-200 dark:hover:border-purple-500/30 flex items-center justify-center gap-2 mt-auto"
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
