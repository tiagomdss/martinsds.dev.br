<script setup lang="ts">
import { useHead } from '#imports'

useHead({ title: 'Sobre • Tiago Martins' })

const skills = [
  'Nuxt', 'Vuejs', 'TypeScript', 'Tailwind CSS', 'Java', 'PHP', 'JavaScript', 'Scrum'
]

const finalEducation = [
  {
    title: 'MBA em Gestão de TI com ênfase em Gestão',
    institution: 'Universidade Veiga de Almeida (UVA)',
    period: '2026 - Presente',
    description: 'Especialização focada em metodologias ágeis, liderança técnica e gestão de produtos digitais. Desenvolvimento de competências para liderar times de alta performance e otimizar fluxos de entrega de valor.',
    tags: ['Liderança', 'Scrum Master', 'PMBOK'],
    icon: 'heroicons:academic-cap-20-solid',
    status: 'Início 2026'
  },
  {
    title: 'Gestão de Tecnologia da Informação',
    institution: 'Concluido em 2020',
    period: '2018 - 2020',
    description: 'Fundamentação teórica sólida em algoritmos, estruturas de dados e engenharia de software. Trabalho de conclusão de curso com ênfase em "Otimização de Performance em Single Page Applications".',
    tags: ['Algoritmos', 'Sistemas Distribuídos'],
    icon: 'heroicons:building-library-20-solid',
  }
]
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 transition-colors duration-200">
    <!-- Circuit board background -->
    <div class="absolute inset-0 circuit-bg opacity-20 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">

        <div class="lg:col-span-7 space-y-10">
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight" style="font-family: 'Orbitron', sans-serif;">
              Sobre
            </h1>
            <p class="text-xl font-medium text-neon-cyan dark:text-neon-cyan animate-neon-flicker" style="font-family: 'Rajdhani', sans-serif;">
              Gerente de Operação da Tecnologia da Informação
            </p>
          </div>

          <div class="prose dark:prose-invert text-slate-700 dark:text-slate-300 leading-relaxed text-lg max-w-2xl" style="font-family: 'Rajdhani', sans-serif;">
            <p>
              Olá! Sou Tiago Martins. Atuo como <strong class="text-slate-900 dark:text-white">Gerente de Operação da Tecnologia da Informação</strong>, com foco em excelência operacional e liderança técnica.
              Gosto de criar experiências digitais modernas, acessíveis e performáticas, unindo visão estratégica e qualidade de entrega.
            </p>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white border-b border-cyan-500/20 dark:border-cyan-500/30 pb-2" style="font-family: 'Orbitron', sans-serif;">Experiência</h3>
            <p class="text-slate-700 dark:text-slate-400 leading-relaxed" style="font-family: 'Rajdhani', sans-serif;">
              Atuo em projetos web com <strong class="text-slate-900 dark:text-white">Nuxt/Vue, Tailwind</strong> e boas práticas de <strong class="text-slate-900 dark:text-white">Acessibilidade e Perf</strong>,
              além de colaborar em processos ágeis (Scrum) e apoiar a área de <strong class="text-slate-900 dark:text-white">DevOps</strong> na melhoria de pipelines.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300" style="font-family: 'Rajdhani', sans-serif;">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
                <span><strong class="text-slate-900 dark:text-white">Operações de TI</strong> — gestão de infraestrutura, performance e continuidade.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300" style="font-family: 'Rajdhani', sans-serif;">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-purple shrink-0 shadow-[0_0_10px_rgba(176,38,255,0.8)]"></span>
                <span><strong class="text-slate-900 dark:text-white">Gestão Ágil</strong> — facilitação de cerimônias, remoção de impedimentos e planejamento.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300" style="font-family: 'Rajdhani', sans-serif;">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-pink shrink-0 shadow-[0_0_10px_rgba(255,42,109,0.8)]"></span>
                <span><strong class="text-slate-900 dark:text-white">DevOps</strong> — apoio em CI/CD, logging, monitoramento e boas práticas.</span>
              </li>
            </ul>
          </div>

          <div class="space-y-6">
            <h3 class="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest" style="font-family: 'Rajdhani', sans-serif;">Habilidades</h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="skill in skills" :key="skill"
                class="px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-white/5 text-slate-800 dark:text-cyan-300 border border-cyan-500/20 dark:border-cyan-500/30 hover:border-cyan-500/80 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all cursor-default shadow-sm">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-8">

          <div class="flex gap-4 justify-end">
            <a href="https://www.linkedin.com/in/tiago-martins-041b48156/" target="_blank" class="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-cyan-500/20 dark:border-cyan-500/30 hover:bg-slate-50 dark:hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] group">
              <Icon name="simple-icons:linkedin" class="w-5 h-5 text-[#0077b5] dark:text-cyan-400" />
              <span class="font-bold" style="font-family: 'Orbitron', sans-serif;">LinkedIn</span>
            </a>
            <a href="mailto:tiago@martinsds.dev" class="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-cyan-500/20 dark:border-cyan-500/30 hover:bg-slate-50 dark:hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] group">
              <Icon name="heroicons:envelope-20-solid" class="w-5 h-5 text-slate-600 dark:text-cyan-400" />
              <span class="font-bold" style="font-family: 'Orbitron', sans-serif;">Fale comigo</span>
            </a>
          </div>

          <div class="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.2)] border-2 border-cyan-500/30 dark:border-cyan-500/40 bg-white dark:bg-[#0a0a1a]">
            <img src="/tiago.jpg" alt="Tiago Martins" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105 hologram-effect" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <!-- Holographic overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-50 pointer-events-none"></div>

            <div class="absolute bottom-8 left-8 right-8 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyan-500/30 flex items-center gap-4 group hover:border-cyan-500/60 transition-all">
               <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                 <Icon name="heroicons:code-bracket-20-solid" class="w-6 h-6" />
               </div>
               <div>
                 <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest" style="font-family: 'Rajdhani', sans-serif;">Experiência</p>
                 <p class="text-lg font-extrabold text-white" style="font-family: 'Orbitron', sans-serif;">8+ Anos no mercado</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-40 space-y-12">
        <div class="space-y-4">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight" style="font-family: 'Orbitron', sans-serif;">
            Educação e Qualificações
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg" style="font-family: 'Rajdhani', sans-serif;">
            Minha trajetória acadêmica, cursos intensivos e certificações profissionais.
          </p>
        </div>

        <div class="relative pl-12 md:pl-20 border-l-2 border-cyan-500/20 dark:border-cyan-500/30 space-y-16">

          <div v-for="(item, index) in finalEducation" :key="index" class="relative group">

            <div class="absolute -left-[calc(3rem+1px)] md:-left-[calc(5rem+1px)] top-0 flex items-center justify-center">
               <div class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-deep-space border-4 border-slate-100 dark:border-cyan-500/20 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all">
                 <div class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center transition-transform group-hover:scale-110">
                   <Icon :name="item.icon" class="w-4 h-4 md:w-5 md:h-5 text-neon-cyan" />
                 </div>
               </div>
               <div v-if="index === 0" class="absolute w-14 h-14 md:w-20 md:h-20 bg-cyan-500/20 rounded-full animate-ping opacity-25"></div>
            </div>

            <div class="relative bg-white dark:bg-[#0a0a1a] rounded-3xl p-8 border border-cyan-500/20 dark:border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.2)] hover:border-cyan-500/50 transition-all duration-500 group-hover:-translate-y-1 overflow-hidden max-w-5xl">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

              <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                <div class="space-y-4 flex-1">
                  <div class="space-y-1">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight underline decoration-cyan-500/30 decoration-4 underline-offset-4" style="font-family: 'Orbitron', sans-serif;">
                      {{ item.title }}
                    </h3>
                    <p class="text-lg font-semibold text-neon-cyan dark:text-neon-cyan" style="font-family: 'Rajdhani', sans-serif;">
                      {{ item.institution }}
                    </p>
                  </div>

                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-3xl font-medium" style="font-family: 'Rajdhani', sans-serif;">
                    {{ item.description }}
                  </p>

                  <div class="flex flex-wrap gap-2 pt-2">
                    <span v-for="tag in item.tags" :key="tag"
                      class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-cyan-300 text-xs font-bold border border-cyan-500/20 dark:border-cyan-500/30 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="shrink-0 flex flex-col items-end gap-2">
                  <span class="px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-bold border border-cyan-500/30 dark:border-cyan-500/40 whitespace-nowrap shadow-[0_0_10px_rgba(0,240,255,0.2)]" style="font-family: 'Rajdhani', sans-serif;">
                    {{ item.period }}
                  </span>
                  <div v-if="item.status" class="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">
                    <span class="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_rgba(5,217,232,0.8)]"></span>
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  will-change: background-color;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.max-w-7xl {
  opacity: 1 !important;
}

.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
