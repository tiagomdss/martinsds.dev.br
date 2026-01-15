<script setup lang="ts">
import { useHead } from '#imports'

useHead({ title: 'Certificados • Tiago Martins' })

type Cert = { 
  nome: string; 
  plataforma: 'Udemy' | 'Alura' | 'Origamid';
  icon: string;
}

const tecnologias: Cert[] = [
  { nome: 'Nuxt', plataforma: 'Udemy', icon: 'simple-icons:nuxtdotjs' },
  { nome: 'TypeScript', plataforma: 'Udemy', icon: 'simple-icons:typescript' },
  { nome: 'Node.js', plataforma: 'Udemy', icon: 'simple-icons:nodedotjs' },
  { nome: 'Git', plataforma: 'Udemy', icon: 'simple-icons:git' },
  { nome: 'Vite', plataforma: 'Udemy', icon: 'simple-icons:vite' },
  { nome: 'MariaDB', plataforma: 'Udemy', icon: 'simple-icons:mariadb' },
  { nome: 'Nextcloud', plataforma: 'Udemy', icon: 'simple-icons:nextcloud' },
  { nome: 'MVVM', plataforma: 'Udemy', icon: 'heroicons:code-bracket-square-20-solid' },

  { nome: 'Vue', plataforma: 'Alura', icon: 'simple-icons:vuedotjs' },
  { nome: 'JavaScript', plataforma: 'Alura', icon: 'simple-icons:javascript' },
  { nome: 'HTML5', plataforma: 'Alura', icon: 'simple-icons:html5' },
  { nome: 'CSS3', plataforma: 'Alura', icon: 'simple-icons:css3' },
  { nome: 'Java', plataforma: 'Alura', icon: 'mdi:language-java' },
  { nome: 'WordPress', plataforma: 'Alura', icon: 'simple-icons:wordpress' },
  { nome: 'MySQL / SQL', plataforma: 'Alura', icon: 'simple-icons:mysql' },
  { nome: 'Jira', plataforma: 'Alura', icon: 'simple-icons:jira' },

  { nome: 'Tailwind CSS', plataforma: 'Origamid', icon: 'simple-icons:tailwindcss' },
  { nome: 'PHP', plataforma: 'Origamid', icon: 'simple-icons:php' },
  { nome: 'Joomla', plataforma: 'Origamid', icon: 'simple-icons:joomla' },
  { nome: 'MongoDB', plataforma: 'Origamid', icon: 'simple-icons:mongodb' },
  { nome: 'GitHub', plataforma: 'Origamid', icon: 'simple-icons:github' },
  { nome: 'GitLab', plataforma: 'Origamid', icon: 'simple-icons:gitlab' },
  { nome: 'Realm', plataforma: 'Origamid', icon: 'simple-icons:realm' },
  { nome: 'Scrum', plataforma: 'Origamid', icon: 'heroicons:users-20-solid' },
]

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'Udemy': return 'text-purple-600 dark:text-purple-400 border-purple-600/20 bg-purple-50 dark:bg-purple-900/10';
    case 'Alura': return 'text-blue-600 dark:text-blue-400 border-blue-600/20 bg-blue-50 dark:bg-blue-900/10';
    case 'Origamid': return 'text-yellow-600 dark:text-yellow-400 border-yellow-600/20 bg-yellow-50 dark:bg-yellow-900/10';
    default: return 'text-gray-600 border-gray-600/20';
  }
}
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      
      <!-- Header -->
      <div class="mb-16 space-y-4">
        <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Certificados
        </h1>
        <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Abaixo estão listadas as tecnologias em que possuo cursos e certificados obtidos em plataformas reconhecidas.
        </p>
      </div>

      <!-- Section Title with Bar -->
      <div class="flex items-center gap-4 mb-10">
        <div class="w-1.5 h-10 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
          Tecnologias e tópicos
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="t in tecnologias" 
          :key="t.nome" 
          class="relative group bg-white dark:bg-[#121212] overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/5 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] flex items-center justify-between p-5"
        >
          <!-- Left Color Bar -->
          <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-indigo-600 group-hover:w-2 transition-all duration-300"></div>

          <!-- Left Content: Icon + Name -->
          <div class="flex items-center gap-4 pl-4">
             <div class="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center border border-neutral-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
               <Icon :name="t.icon" class="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
             </div>
             <span class="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
               {{ t.nome }}
             </span>
          </div>

          <!-- Right Content: Badge -->
          <span :class="['px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border', getPlatformColor(t.plataforma)]">
            {{ t.plataforma }}
          </span>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
