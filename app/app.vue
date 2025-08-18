<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
useHead({
  htmlAttrs: { lang: 'pt' },
  bodyAttrs: { class: 'antialiased transition-colors duration-300 bg-white dark:bg-neutral-950' },
})
</script>

