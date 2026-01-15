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
    period: '2016 - 2020',
    description: 'Fundamentação teórica sólida em algoritmos, estruturas de dados e engenharia de software. Trabalho de conclusão de curso com ênfase em "Otimização de Performance em Single Page Applications".',
    tags: ['Algoritmos', 'Sistemas Distribuídos'],
    icon: 'heroicons:building-library-20-solid',
  }
]
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
        
        <div class="lg:col-span-7 space-y-10">
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sobre
            </h1>
            <p class="text-xl font-medium text-purple-600 dark:text-purple-400">
              Frontend • Analista de Sistemas • Gestão de Projetos
            </p>
          </div>
          
          <div class="prose dark:prose-invert text-slate-700 dark:text-slate-300 leading-relaxed text-lg max-w-2xl">
            <p>
              Olá! Sou Tiago Martins. Trabalho com desenvolvimento <strong>Frontend</strong>, análise e desenho de <strong>Sistemas</strong> e <strong>Gestão de Projetos</strong>. 
              Gosto de criar experiências digitais modernas, acessíveis e performáticas, com foco em resultado, qualidade de código e boa comunicação com stakeholders.
            </p>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Experiência</h3>
            <p class="text-slate-700 dark:text-slate-400 leading-relaxed">
              Atuo em projetos web com <strong class="text-slate-900 dark:text-white">Nuxt/Vue, Tailwind</strong> e boas práticas de <strong class="text-slate-900 dark:text-white">Acessibilidade e Perf</strong>, 
              além de colaborar em processos ágeis (Scrum) e apoiar a área de <strong class="text-slate-900 dark:text-white">DevOps</strong> na melhoria de pipelines.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                <span><strong class="text-slate-900 dark:text-white">Frontend e Sistemas</strong> — desenvolvimento de interfaces e integrações.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                <span><strong class="text-slate-900 dark:text-white">Gestão Ágil</strong> — facilitação de cerimônias, remoção de impedimentos e planejamento.</span>
              </li>
              <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                <span><strong class="text-slate-900 dark:text-white">DevOps</strong> — apoio em CI/CD, logging, monitoramento e boas práticas.</span>
              </li>
            </ul>
          </div>

          <div class="space-y-6">
            <h3 class="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Habilidades</h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="skill in skills" :key="skill" 
                class="px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all cursor-default shadow-sm">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-8">
          
          <div class="flex gap-4 justify-end">
            <a href="https://www.linkedin.com/in/tiago-martins-041b48156/" target="_blank" class="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-lg group">
              <Icon name="simple-icons:linkedin" class="w-5 h-5 text-[#0077b5] dark:text-white" />
              <span class="font-bold">LinkedIn</span>
            </a>
            <a href="mailto:tiago@martinsds.dev" class="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-lg group">
              <Icon name="heroicons:envelope-20-solid" class="w-5 h-5 text-slate-600 dark:text-white" />
              <span class="font-bold">Fale comigo</span>
            </a>
          </div>

          <div class="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121212]">
            <img src="/tiago.jpg" alt="Tiago Martins" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            
            <div class="absolute bottom-8 left-8 right-8 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-4 group">
               <div class="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/40 group-hover:scale-110 transition-transform">
                 <Icon name="heroicons:code-bracket-20-solid" class="w-6 h-6" />
               </div>
               <div>
                 <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest">Experiência</p>
                 <p class="text-lg font-extrabold text-white">8+ Anos no mercado</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-40 space-y-12">
        <div class="space-y-4">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Educação e Qualificações
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg">
            Minha trajetória acadêmica, cursos intensivos e certificações profissionais.
          </p>
        </div>

        <div class="relative pl-12 md:pl-20 border-l-2 border-slate-200 dark:border-white/10 space-y-16">
          
          <div v-for="(item, index) in finalEducation" :key="index" class="relative group">
            
            <div class="absolute -left-[calc(3rem+1px)] md:-left-[calc(5rem+1px)] top-0 flex items-center justify-center">
               <div class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-obsidian border-4 border-slate-100 dark:border-[#151515] flex items-center justify-center z-10 shadow-xl group-hover:border-purple-500/50 transition-colors">
                 <div class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center transition-transform group-hover:scale-110">
                   <Icon :name="item.icon" class="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400" />
                 </div>
               </div>
               <div v-if="index === 0" class="absolute w-14 h-14 md:w-20 md:h-20 bg-purple-500/20 rounded-full animate-ping opacity-25"></div>
            </div>

            <div class="relative bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 group-hover:-translate-y-1 overflow-hidden max-w-5xl">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                <div class="space-y-4 flex-1">
                  <div class="space-y-1">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight underline decoration-purple-500/30 decoration-4 underline-offset-4">
                      {{ item.title }}
                    </h3>
                    <p class="text-lg font-semibold text-purple-600 dark:text-purple-400">
                      {{ item.institution }}
                    </p>
                  </div>
                  
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-3xl font-medium">
                    {{ item.description }}
                  </p>
                  
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span v-for="tag in item.tags" :key="tag" 
                      class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-white/10 group-hover:border-purple-500/40 transition-colors">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="shrink-0 flex flex-col items-end gap-2">
                  <span class="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold border border-purple-200 dark:border-purple-500/30 whitespace-nowrap shadow-sm">
                    {{ item.period }}
                  </span>
                  <div v-if="item.status" class="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
