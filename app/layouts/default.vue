<template>
  <div class="min-h-dvh bg-gradient-to-br from-sky-600/40 via-fuchsia-700/20 to-rose-900/40 dark:from-blue-900/50 dark:via-indigo-900/20 dark:to-rose-950/60">
    <NuxtLoadingIndicator color="#2563eb" :height="4" />
    <Header />
    <main class="min-h-[calc(100dvh-72px)]">
      <slot />
    </main>
  </div>
</template>
