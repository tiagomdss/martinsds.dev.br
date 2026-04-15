<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-deep-space transition-opacity duration-700 pointer-events-none"
    >
      <!-- Circuit board background -->
      <div class="absolute inset-0 circuit-bg opacity-30"></div>
      
      <div class="relative flex flex-col items-center z-10">
        <!-- Futuristic terminal/computer icon -->
        <div class="relative group">
          <!-- Outer glow ring -->
          <div class="absolute -inset-3 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
          
          <!-- Rotating ring -->
          <div class="absolute -inset-2 border-2 border-dashed border-cyan-500/30 rounded-2xl animate-rotate-slow"></div>
          
          <div class="relative size-24 bg-white dark:bg-[#0a0a1a] rounded-2xl border-2 border-cyan-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.3)] overflow-hidden mb-6">
            <Icon name="lucide:terminal" class="size-12 text-neon-cyan animate-[pulse_2s_ease-in-out_infinite] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" />

            <!-- Matrix-like scan line overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent h-1/3 w-full animate-[scan_2s_linear_infinite]"></div>
            
            <!-- Corner accents -->
            <div class="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50"></div>
            <div class="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-500/50"></div>
            <div class="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-500/50"></div>
            <div class="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50"></div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-3">
          <!-- Terminal loading text -->
          <div class="flex items-center gap-2 font-mono text-sm tracking-widest text-neutral-500 dark:text-cyan-400" style="font-family: 'Rajdhani', monospace;">
            <span class="text-neon-cyan">&gt;</span>
            <span class="animate-pulse">INITIALIZING_SYSTEM</span>
            <span class="w-1.5 h-4 bg-neon-cyan animate-[blink_1s_step-end_infinite] shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
          </div>

          <!-- Animated loading dots -->
          <div class="flex gap-1.5">
            <div v-for="i in 3" :key="i"
                 class="w-2 h-2 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple animate-bounce shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                 :style="{ animationDelay: `${(i-1) * 150}ms` }">
            </div>
          </div>
          
          <!-- Progress bar -->
          <div class="mt-4 w-48 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full animate-[loading_1.5s_ease-in-out_infinite] shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<style scoped>
@keyframes scan {
  from { transform: translateY(-100%); }
  to { transform: translateY(200%); }
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes loading {
  0% { width: 0%; margin-left: 0; }
  50% { width: 60%; margin-left: 20%; }
  100% { width: 0%; margin-left: 100%; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
