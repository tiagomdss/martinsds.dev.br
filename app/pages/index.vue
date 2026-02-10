<script setup lang="ts">
import { useHead, useProjects } from '#imports'

useHead({ title: 'Tiago Martins • Gerente de Operação de TI' })

const { projects } = useProjects()
const featuredProjects = computed(() => projects.slice(0, 3))

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
  <main class="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-neutral-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-200 shadow-sm dark:shadow-[0_0_15px_rgba(0,0,0,0.3)] bg-white/50 dark:bg-white/5 transition-all duration-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            Disponível para projetos e consultoria
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg transition-colors duration-200">
            Gerente de Operação <br/>
            da Tecnologia <br/>
            <span class="text-emerald-700 dark:text-primary drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">da Informação</span>
          </h1>
          
          <p class="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-light transition-colors duration-200">
            Crio experiências digitais modernas, acessíveis e performáticas, com foco em resultado e qualidade de código. Transformo designs complexos em interfaces responsivas.
          </p>

          <div class="glass-panel rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-start border border-neutral-200 dark:border-white/5 shadow-lg dark:shadow-neon bg-white/60 dark:bg-white/5 transition-colors duration-200">
            <Icon name="simple-icons:vuedotjs" class="text-3xl text-green-400 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" title="Vue.js" />
            <Icon name="simple-icons:javascript" class="text-3xl text-yellow-300 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" title="JavaScript" />
            <Icon name="simple-icons:html5" class="text-3xl text-orange-400 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" title="HTML5" />
            <Icon name="simple-icons:css3" class="text-3xl text-blue-400 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" title="CSS3" />
            <Icon name="simple-icons:nodedotjs" class="text-3xl text-green-500 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" title="Node.js" />
            <Icon name="simple-icons:git" class="text-3xl text-orange-500 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" title="Git" />
            
            <div class="flex items-center justify-center w-8 h-8 rounded bg-sky-400/10 text-sky-300 font-bold text-xs hover:scale-110 transition-transform cursor-pointer border border-sky-400/30 shadow-[0_0_10px_rgba(56,189,248,0.2)]" title="Tailwind CSS">TW</div>
            <div class="flex items-center justify-center w-8 h-8 rounded bg-blue-600/10 text-blue-400 font-bold text-xs hover:scale-110 transition-transform cursor-pointer border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]" title="TypeScript">TS</div>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/tiago-martins-041b48156/" target="_blank" class="glass-button px-6 py-3 rounded-lg flex items-center gap-3 text-slate-700 dark:text-white bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-medium shadow-md hover:bg-neutral-100 dark:hover:bg-white/10 group transition-all duration-200">
              <Icon name="simple-icons:linkedin" class="text-xl text-[#0077b5] dark:text-white group-hover:text-primary transition-colors duration-200" />
              LinkedIn
            </a>
            <a href="https://github.com/tiagomdss" target="_blank" class="glass-button px-6 py-3 rounded-lg flex items-center gap-3 text-slate-700 dark:text-white bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-medium shadow-md hover:bg-neutral-100 dark:hover:bg-white/10 group transition-all duration-200">
              <Icon name="simple-icons:github" class="text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200" />
              GitHub
            </a>
            <a href="https://www.instagram.com/eusoutinhoo" target="_blank" class="glass-button px-6 py-3 rounded-lg flex items-center gap-3 text-slate-700 dark:text-white bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-medium shadow-md hover:bg-neutral-100 dark:hover:bg-white/10 group transition-all duration-200">
              <Icon name="simple-icons:instagram" class="text-xl text-[#E4405F] dark:text-white group-hover:text-primary transition-colors duration-200" />
              Instagram
            </a>
            <a href="mailto:tiago@martinsds.dev" class="glass-button px-6 py-3 rounded-lg flex items-center gap-3 text-slate-700 dark:text-white bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-medium shadow-md hover:bg-neutral-100 dark:hover:bg-white/10 group transition-all duration-200">
              <Icon name="heroicons:envelope-20-solid" class="text-xl text-slate-600 dark:text-white group-hover:text-primary transition-colors duration-200" />
              E-mail
            </a>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <span class="px-3 py-1 rounded-md bg-white/60 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-neutral-200 dark:border-white/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors duration-200 cursor-default">Nuxt</span>
            <span class="px-3 py-1 rounded-md bg-white/60 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-neutral-200 dark:border-white/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors duration-200 cursor-default">Vue</span>
            <span class="px-3 py-1 rounded-md bg-white/60 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-neutral-200 dark:border-white/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors duration-200 cursor-default">Tailwind</span>
            <span class="px-3 py-1 rounded-md bg-white/60 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-neutral-200 dark:border-white/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors duration-200 cursor-default">Acessibilidade</span>
            <span class="px-3 py-1 rounded-md bg-white/60 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-neutral-200 dark:border-white/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors duration-200 cursor-default">Perf</span>
            <span class="px-3 py-1 rounded-md bg-white/60 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-neutral-200 dark:border-white/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors duration-200 cursor-default">Gestão Ágil</span>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-4 translate-y-4 animate-pulse"></div>
          <div class="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full glass-panel border-4 border-white/20 dark:border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center group bg-white/50 dark:bg-transparent transition-colors duration-200">
             <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src="/tiago.jpg" alt="Tiago Martins" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
          </div>
          
          <div class="absolute -bottom-4 -right-4 lg:bottom-10 lg:right-10 bg-white dark:bg-[#0f1115] p-4 rounded-2xl shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-neutral-200 dark:border-white/10 animate-bounce transition-colors duration-200" style="animation-duration: 3s;">
            <div class="flex items-center gap-3">
              <div class="bg-blue-900/30 p-2 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Icon name="heroicons:code-bracket-20-solid" class="text-blue-400 text-xl" />
              </div>
              <div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors duration-200">Experiência</p>
                <p class="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-200">8+ Anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="projects">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 relative inline-block drop-shadow-md transition-colors duration-200">
          <span class="gradient-text">Meus Projetos</span>
          <div class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-70 shadow-[0_0_10px_#a855f7]"></div>
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-center max-w-2xl font-light transition-colors duration-200">
          Uma seleção de projetos recentes que demonstram minhas habilidades em design e desenvolvimento frontend.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="p in featuredProjects" :key="p.href" :project="p" />
      </div>

      <div class="mt-12 flex justify-center">
        <NuxtLink to="/projetos">
          <button class="glass-button px-8 py-3 rounded-full text-slate-700 dark:text-white bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-medium shadow-md transition-all duration-200 hover:scale-105 hover:bg-neutral-100 dark:hover:bg-white/10">
            Ver todos os projetos
            <Icon name="heroicons:arrow-right-20-solid" class="ml-2 w-5 h-5 inline-block" />
          </button>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
