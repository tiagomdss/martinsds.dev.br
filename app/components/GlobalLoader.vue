<template>
  <transition name="fade">
    <div 
      v-if="loading"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-obsidian transition-opacity duration-700 pointer-events-none"
    >
       <div class="relative flex items-center justify-center size-20 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold text-3xl shadow-2xl animate-bounce">
          TM
       </div>
       <div class="mt-4 flex gap-1">
         <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
         <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
         <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></div>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
