<script setup lang="ts">
import { useHead } from '#imports'
useHead({ title: 'Tiago Martins • Frontend, Sistemas, Gestão' })

const projects = [
  { title: 'Escola do CBPF 2025', href: 'https://escola.cbpf.br/', img: 'escola2025.png' },
  { title: 'Convite 75 anos', href: 'https://cbpf.br/convite75/', img: 'convite100anos.png' },
  { title: 'EAFExp • Sobre', href: 'https://eafexp.cbpf.br/2025/', img: 'eafexp2025.png' },
  { title: 'EAFExp 2024', href: 'https://eafexp.cbpf.br/2024/', img: 'eafexp2024.png' },
  { title: 'EAFExp 2025', href: 'https://eafexp.cbpf.br/2025/', img: 'eafexp2025.png' },
  { title: 'Intranet CBPF', href: '/', img: 'intranet.png' },
  { title: 'Rubin Transients 2025', href: 'https://cbpf.br/rubin_transients2025/', img: 'astronomy.png' },
]

const stackIcons = [
  'simple-icons:nuxtdotjs',
  'simple-icons:vuedotjs',
  'simple-icons:tailwindcss',
  'simple-icons:typescript',
  'simple-icons:javascript',
  'simple-icons:html5',
  'simple-icons:css3',
  'simple-icons:nodedotjs',
  'simple-icons:git',
  'simple-icons:github',
  'simple-icons:vite',
  'mdi:language-java',
  'simple-icons:php',
  'simple-icons:wordpress',
  'simple-icons:joomla',
  'simple-icons:mysql',
  'simple-icons:mongodb',
  'simple-icons:mariadb',
  'simple-icons:gitlab',
  'simple-icons:nextcloud',
  'simple-icons:jira',
  'simple-icons:realm',
]
</script>

<template>
  <section class="relative px-6 pt-16 pb-24 sm:pt-24 sm:pb-28">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs 
            bg-neutral-100 text-neutral-700 border-neutral-200 
            dark:bg-white/5 dark:text-white/80 dark:border-white/10">
            <span class="size-2 rounded-full bg-emerald-400"></span>
            Disponível para projetos e consultoria
          </div>
          <div class="mt-6 flex justify-center md:hidden">
            <div class="w-40 h-40 overflow-hidden rounded-full ring-4 ring-neutral-200 dark:ring-white/10 shadow-2xl">
              <img src="/tiago.jpg" alt="Tiago Martins" class="size-full object-cover" />
            </div>
          </div>
          <h1 class="mt-6 max-w-full text-xl sm:text-4xl md:text-6xl font-semibold leading-snug sm:leading-tight tracking-tight text-neutral-900 dark:text-white break-words whitespace-normal hyphens-auto [word-break:anywhere] md:[word-break:normal]">Frontend, Analista de Sistemas e Gestor de Projetos</h1>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-neutral-700 dark:text-white/80">Crio experiências digitais modernas, acessíveis e performáticas, com foco em resultado e qualidade de código.</p>

          <div class="mt-6 rounded-lg border px-3 py-2 
            border-neutral-200 bg-neutral-50 
            dark:border-white/10 dark:bg-white/5 hidden sm:block">
            <div class="marquee overflow-hidden" aria-label="Tecnologias e ferramentas que utilizo">
              <div class="marquee-track" aria-hidden="true">
                <span class="marquee-item"><Icon name="simple-icons:nuxtdotjs" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:vuedotjs" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:tailwindcss" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:typescript" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:javascript" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:html5" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:css3" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:nodedotjs" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:git" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:github" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:vite" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="mdi:language-java" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:php" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:wordpress" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:joomla" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:mysql" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:mongodb" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:mariadb" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:gitlab" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:nextcloud" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:jira" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:realm" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item">
                  <span class="px-2 py-1 text-xs rounded bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white/80">MVVM</span>
                </span>
                <span class="marquee-item">
                  <span class="px-2 py-1 text-xs rounded bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white/80">Scrum</span>
                </span>
                <span class="marquee-item"><Icon name="simple-icons:nuxtdotjs" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:vuedotjs" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:tailwindcss" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:typescript" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:javascript" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:html5" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:css3" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:nodedotjs" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:git" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:github" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:vite" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="mdi:language-java" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:php" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:wordpress" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:joomla" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:mysql" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:mongodb" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:mariadb" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:gitlab" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:nextcloud" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:jira" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item"><Icon name="simple-icons:realm" class="h-7 w-7 sm:h-9 sm:w-9 text-neutral-700 dark:text-white/80" /></span>
                <span class="marquee-item">
                  <span class="px-2 py-1 text-xs rounded bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white/80">MVVM</span>
                </span>
                <span class="marquee-item">
                  <span class="px-2 py-1 text-xs rounded bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white/80">Scrum</span>
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:hidden">
            <div class="grid grid-cols-1 gap-3 items-center">
              <div class="rounded-lg border px-3 py-3 
                border-neutral-200 bg-neutral-50 
                dark:border-white/10 dark:bg-white/5">
                <div class="overflow-hidden" aria-label="Tecnologias e ferramentas que utilizo (mobile)">
                  <div class="flex items-center space-x-6 w-max marquee-linear" aria-hidden="true">
                    <template v-for="i in 3" :key="i">
                      <Icon v-for="icon in stackIcons" :key="`${i}-${icon}`" :name="icon" class="w-12 h-12 text-neutral-700 dark:text-white/80" />
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full flex flex-col gap-2 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href="https://www.linkedin.com/in/tiago-martins-041b48156/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
                border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200
                dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" class="h-5 w-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/tiagomdss"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
                border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200
                dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="GitHub"
            >
              <Icon name="mdi:github" class="h-5 w-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/eusoutinhoo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
                border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200
                dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" class="h-5 w-5" />
              <span>Instagram</span>
            </a>

            <a
              href="mailto:tiago@martinsds.dev"
              class="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
                border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200
                dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Enviar e-mail"
            >
              <Icon name="heroicons:envelope-20-solid" class="h-5 w-5" />
              <span>E-mail</span>
            </a>
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
        <div class="hidden md:flex justify-center">
          <div class="size-56 overflow-hidden rounded-full ring-4 ring-neutral-200 dark:ring-white/10 shadow-2xl">
            <img src="/tiago.jpg" alt="Tiago Martins" class="size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative px-6 py-14 sm:py-20">
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
