<template>
  <div class="min-h-screen font-sans transition-colors duration-200 relative overflow-hidden bg-gray-50 dark:bg-obsidian">
    <GlobalLoader :loading="isLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Background overlay for additional texture/color control -->
    <div class="fixed inset-0 pointer-events-none z-[-50] bg-gray-50 dark:bg-obsidian transition-colors duration-200">
      <div class="absolute top-[-5rem] left-[-5rem] w-[600px] h-[600px] bg-purple-300/30 dark:bg-nebula-purple rounded-full blur-[90px] opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-300/20 dark:bg-nebula-blue rounded-full blur-[90px] opacity-20"></div>
      <div class="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-purple-200/20 dark:bg-purple-900 rounded-full blur-[90px] opacity-20"></div>
      <div class="absolute top-[800px] -left-[100px] w-[400px] h-[400px] bg-indigo-200/20 dark:bg-indigo-900 rounded-full blur-[90px] opacity-25"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, onMounted, ref } from '#imports'

const colorMode = useColorMode()

colorMode.preference = 'system'

useHead({
  htmlAttrs: { lang: 'pt' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
  ],
  bodyAttrs: { class: 'bg-gray-50 dark:bg-obsidian text-slate-900 dark:text-slate-100' },
})

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

