<template>
  <transition name="fade">
    <div 
      v-if="loading"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-obsidian transition-opacity duration-700 pointer-events-none"
    >
      <div class="relative flex flex-col items-center">
        <!-- Modern Computer/Code Icon -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div class="relative size-24 bg-white dark:bg-[#121212] rounded-2xl border border-neutral-200 dark:border-white/10 flex items-center justify-center shadow-xl overflow-hidden mb-6">
            <Icon name="lucide:terminal" class="size-12 text-purple-500 animate-[pulse_2s_ease-in-out_infinite]" />
            
            <!-- Matrix-like scan line overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent h-1/2 w-full animate-[scan_2s_linear_infinite]"></div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2 font-mono text-sm tracking-widest text-neutral-500 dark:text-neutral-400">
            <span class="text-purple-500">&gt;</span>
            <span>INITIALIZING_SYSTEM</span>
            <span class="w-1.5 h-4 bg-purple-500 animate-[blink_1s_step-end_infinite]"></span>
          </div>
          
          <div class="flex gap-1.5">
            <div v-for="i in 3" :key="i" 
                 class="w-1.5 h-1.5 rounded-full bg-purple-500/40 animate-bounce"
                 :style="{ animationDelay: `${(i-1) * 150}ms` }">
            </div>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
