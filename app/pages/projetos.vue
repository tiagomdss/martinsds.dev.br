<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'
import ProjectCard from '~/components/ProjectCard.vue'

useHead({ title: 'Projetos • Tiago Martins' })

const { projects } = useProjects()
</script>

<template>
  <div class="relative px-6 py-24 sm:py-32">
    <!-- Circuit board background -->
    <div class="absolute inset-0 circuit-bg opacity-20 pointer-events-none"></div>
    
    <div class="mx-auto max-w-7xl relative z-10">
      <div class="mb-12">
        <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight" style="font-family: 'Orbitron', sans-serif;">
          Todos os Projetos
        </h1>
        <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl" style="font-family: 'Rajdhani', sans-serif;">
          Uma coleção completa de trabalhos, experimentos e códigos desenvolvidos.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="p in projects" :key="p.href" :project="p" />
      </div>
    </div>
  </div>
</template>
