<script setup lang="ts">
import { useHead } from '#imports'
useHead({ title: 'Tiago Martins • Frontend, Sistemas, Gestão' })

const projects = [
  { title: 'Escola do CBPF 2025', href: 'https://escola.cbpf.br/', img: 'escola2025.png' },
  { title: 'Convite 75 anos', href: 'https://cbpf.br/convite75/', img: 'convite100anos.png' },
  { title: 'EAFExp • Sobre', href: 'https://eafexp.cbpf.br/2025/', img: 'eafexp2025.png' },
  { title: 'EAFExp 2024', href: 'https://eafexp.cbpf.br/2024/', img: 'eafexp2024.png' },
  { title: 'EAFExp 2025', href: 'https://eafexp.cbpf.br/2025/', img: 'eafexp2025.png' },
  { title: 'Intranet CBPF', href: 'https://intranet.cbpf.br/', img: 'intranet.png' },
  { title: 'Rubin Transients 2025', href: 'https://cbpf.br/rubin_transients2025/', img: 'astronomy.png' },
]
</script>

<template>
  <section class="relative px-6 pt-16 pb-24 sm:pt-24 sm:pb-28">
    <div class="mx-auto max-w-7xl">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs 
            bg-neutral-100 text-neutral-700 border-neutral-200 
            dark:bg-white/5 dark:text-white/80 dark:border-white/10">
            <span class="size-2 rounded-full bg-emerald-400"></span>
            Disponível para projetos e consultoria
          </div>
          <h1 class="mt-6 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-6xl">Frontend, Analista de Sistemas e Gestor de Projetos</h1>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-neutral-700 dark:text-white/80">Crio experiências digitais modernas, acessíveis e performáticas, com foco em resultado e qualidade de código.</p>
          <div class="mt-6 flex flex-wrap items-center gap-3">
            <UButton to="#portfolio" color="white" variant="solid">Ver portfólio</UButton>
            <UButton to="mailto:contato@martinsds.dev.br" color="white" variant="soft">Fale comigo</UButton>
          </div>
          <div class="mt-6 flex flex-wrap gap-2 text-xs">
            <UBadge color="gray" variant="soft">Nuxt</UBadge>
            <UBadge color="gray" variant="soft">Vue</UBadge>
            <UBadge color="gray" variant="soft">Tailwind</UBadge>
            <UBadge color="gray" variant="soft">Acessibilidade</UBadge>
            <UBadge color="gray" variant="soft">Perf</UBadge>
            <UBadge color="gray" variant="soft">Gestão Ágil</UBadge>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="size-56 overflow-hidden rounded-full ring-4 ring-neutral-200 dark:ring-white/10 shadow-2xl">
            <img src="/tiago.jpg" alt="Tiago Martins" class="size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio" class="relative px-6 py-14 sm:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mb-8 flex items-end justify-between gap-6">
        <div>
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">Portfólio</h2>
          <p class="mt-1 text-neutral-700 dark:text-white/70">Alguns projetos selecionados</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="p in projects" :key="p.href" :href="p.href" target="_blank" rel="noopener noreferrer" class="block group">
          <UCard class="transition border 
            border-neutral-200 bg-neutral-50 
            dark:border-white/10 dark:bg-white/5 
            group-hover:border-neutral-300 dark:group-hover:border-white/20 
            group-hover:bg-neutral-100 dark:group-hover:bg-white/10">
            <template #header>
              <div class="flex items-center justify-between gap-3">
                <h3 class="text-lg font-medium text-neutral-900 dark:text-white">{{ p.title }}</h3>
                <span class="text-neutral-600 group-hover:text-neutral-900 dark:text-white/70 dark:group-hover:text-white">
                  <Icon name="heroicons:arrow-top-right-on-square-20-solid" />
                </span>
              </div>
            </template>
            <div class="mt-1 h-28 overflow-hidden rounded-lg">
              <img v-if="p.img" :src="`/portfolio/${p.img}`" :alt="p.title" class="h-28 w-full object-cover" />
              <div v-else class="h-28 rounded-lg bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-white/5 dark:to-white/10" />
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
