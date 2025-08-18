<script setup lang="ts">
import { useHead } from '#imports'
useHead({ title: 'Certificados • Tiago Martins' })

type Cert = { nome: string; plataforma: 'Udemy' | 'Alura' | 'Origamid' }

const tecnologias: Cert[] = [
  { nome: 'Nuxt', plataforma: 'Udemy' },
  { nome: 'TypeScript', plataforma: 'Udemy' },
  { nome: 'Node.js', plataforma: 'Udemy' },
  { nome: 'Git', plataforma: 'Udemy' },
  { nome: 'Vite', plataforma: 'Udemy' },
  { nome: 'MariaDB', plataforma: 'Udemy' },
  { nome: 'Nextcloud', plataforma: 'Udemy' },
  { nome: 'MVVM', plataforma: 'Udemy' },

  { nome: 'Vue', plataforma: 'Alura' },
  { nome: 'JavaScript', plataforma: 'Alura' },
  { nome: 'HTML5', plataforma: 'Alura' },
  { nome: 'CSS3', plataforma: 'Alura' },
  { nome: 'Java', plataforma: 'Alura' },
  { nome: 'WordPress', plataforma: 'Alura' },
  { nome: 'MySQL / SQL', plataforma: 'Alura' },
  { nome: 'Jira', plataforma: 'Alura' },

  { nome: 'Tailwind CSS', plataforma: 'Origamid' },
  { nome: 'PHP', plataforma: 'Origamid' },
  { nome: 'Joomla', plataforma: 'Origamid' },
  { nome: 'MongoDB', plataforma: 'Origamid' },
  { nome: 'GitHub', plataforma: 'Origamid' },
  { nome: 'GitLab', plataforma: 'Origamid' },
  { nome: 'Realm', plataforma: 'Origamid' },
  { nome: 'Scrum', plataforma: 'Origamid' },
]
</script>

<template>
  <section class="relative px-6 pt-16 pb-24 sm:pt-24 sm:pb-28">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Certificados</h1>
      <p class="mt-3 text-neutral-700 dark:text-white/80">
        Abaixo estão listadas, em texto simples (sem links), as tecnologias em que possuo cursos e/ou certificados
        obtidos em plataformas como Udemy, Alura ou Origamid.
      </p>

      <div class="mt-8">
        <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">Tecnologias e tópicos</h2>
        <ul class="mt-4 grid grid-cols-1 gap-2 text-neutral-800 dark:text-white/80 sm:grid-cols-2">
          <li v-for="t in tecnologias" :key="t.nome" class="leading-7">
            • {{ t.nome }} — certificado: {{ t.plataforma }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
