<template>
  <div class="min-h-screen font-sans transition-colors duration-200 relative overflow-hidden bg-gray-50 dark:bg-deep-space">
    <GlobalLoader :loading="isLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Cyberpunk background with animated effects -->
    <div class="fixed inset-0 pointer-events-none z-[-50] bg-gray-50 dark:bg-deep-space transition-colors duration-200">
      <!-- Animated grid pattern -->
      <div class="absolute inset-0 cyber-grid opacity-30 dark:opacity-50"></div>
      
      <!-- Aurora/nebula effects -->
      <div class="absolute inset-0 aurora-bg"></div>
      
      <!-- Floating orbs - cyberpunk style (only visible in dark mode) -->
      <div class="absolute top-[-5rem] left-[-5rem] w-[600px] h-[600px] bg-cyan-400/10 dark:bg-neon-cyan/10 rounded-full blur-[120px] opacity-20 dark:opacity-30 animate-float"></div>
      <div class="absolute top-40 right-0 w-[500px] h-[500px] bg-purple-400/10 dark:bg-neon-purple/10 rounded-full blur-[120px] opacity-15 dark:opacity-25 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-pink-400/10 dark:bg-neon-pink/10 rounded-full blur-[120px] opacity-10 dark:opacity-20 animate-float" style="animation-delay: 4s;"></div>
      <div class="absolute top-[800px] -left-[100px] w-[400px] h-[400px] bg-blue-400/10 dark:bg-neon-blue/10 rounded-full blur-[120px] opacity-15 dark:opacity-25 animate-float" style="animation-delay: 1s;"></div>
      
      <!-- Scan line effect (subtle in light mode) -->
      <div class="scan-line opacity-10 dark:opacity-30"></div>
      
      <!-- Floating particles (subtle in light mode) -->
      <div class="floating-particle w-1 h-1 top-[20%] left-[10%] opacity-30 dark:opacity-100" style="animation-delay: 0s;"></div>
      <div class="floating-particle w-1.5 h-1.5 top-[60%] left-[80%] opacity-30 dark:opacity-100" style="animation-delay: 1s;"></div>
      <div class="floating-particle w-1 h-1 top-[40%] left-[50%] opacity-30 dark:opacity-100" style="animation-delay: 2s;"></div>
      <div class="floating-particle w-2 h-2 top-[80%] left-[20%] opacity-30 dark:opacity-100" style="animation-delay: 3s;"></div>
      <div class="floating-particle w-1 h-1 top-[10%] left-[70%] opacity-30 dark:opacity-100" style="animation-delay: 4s;"></div>
      <div class="floating-particle w-1.5 h-1.5 top-[70%] left-[40%] opacity-30 dark:opacity-100" style="animation-delay: 5s;"></div>
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
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
  ],
  bodyAttrs: { class: 'bg-gray-50 dark:bg-deep-space text-slate-900 dark:text-slate-100' },
})

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

