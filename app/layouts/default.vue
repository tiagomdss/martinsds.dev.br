<template>
  <div class="min-h-dvh bg-gray-50 dark:bg-cyber-gradient">
    <NuxtLoadingIndicator color="#00f0ff" :height="4" />
    <TheNavbar />
    <main class="min-h-[calc(100dvh-72px)] relative z-10">
      <slot />
    </main>
    <ContactSection />
    <footer class="relative z-10 px-6 py-6 text-center text-sm text-neutral-600 dark:text-white/70 border-t border-gray-200 dark:border-cyan-500/20 backdrop-blur-sm" style="font-family: 'Rajdhani', sans-serif;">
      © 2026 Copyright - Tiago Martins
    </footer>
  </div>
</template>
