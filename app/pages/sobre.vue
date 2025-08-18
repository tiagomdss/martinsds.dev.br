<script setup lang="ts">
import { useHead } from '#imports'
useHead({ title: 'Sobre • Tiago Martins' })
</script>

<template>
  <section class="px-6 py-14 sm:py-20">
    <div class="mx-auto max-w-3xl">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">Sobre</h1>
          <p class="mt-1 text-neutral-700 dark:text-white/70">Frontend • Analista de Sistemas • Gestão de Projetos</p>
        </div>
        <div class="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/tiago-martins-041b48156/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
              border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200
              dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            aria-label="LinkedIn"
          >
            <Icon name="mdi:linkedin" class="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:tiago@martinsds.dev"
            class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
              border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200
              dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            aria-label="E-mail"
          >
            <Icon name="heroicons:envelope-20-solid" class="h-5 w-5" />
            <span>Fale comigo</span>
          </a>
        </div>
      </div>

      <div class="prose mt-8 dark:prose-invert transition-none">
        <p>
          Olá! Sou Tiago Martins. Trabalho com desenvolvimento <strong>Frontend</strong>, análise e desenho de <strong>Sistemas</strong> e
          <strong>Gestão de Projetos</strong>. Gosto de criar experiências digitais modernas, acessíveis e performáticas, com foco em
          resultado, qualidade de código e boa comunicação com stakeholders.
        </p>

        <h2>Experiência</h2>
        <p>
          Atuo em projetos web com <strong>Nuxt/Vue</strong>, <strong>Tailwind</strong> e boas práticas de <strong>Acessibilidade</strong> e
          <strong>Perf</strong>, além de colaborar em processos ágeis (Scrum) e apoiar a área de <strong>DevOps</strong> na melhoria de pipelines,
          observabilidade e monitoramento.
        </p>

        <ul>
          <li><strong>Frontend e Sistemas</strong> — desenvolvimento de interfaces e integrações.</li>
          <li><strong>Gestão Ágil</strong> — facilitação de cerimônias, remoção de impedimentos e planejamento.</li>
          <li><strong>DevOps</strong> — apoio em CI/CD, logging, monitoramento e boas práticas.</li>
        </ul>

        <h2>Habilidades</h2>
        <ul>
          <li>Nuxt, Vue, TypeScript, Java, PHP, JavaScript</li>
          <li>WordPress, Joomla</li>
          <li>SQL/MySQL, MongoDB, MariaDB</li>
          <li>Git, GitHub, GitLab, Nextcloud</li>
          <li>Realm, MVVM (padrões e arquitetura)</li>
          <li>Tailwind CSS, Acessibilidade, SEO</li>
          <li>Arquitetura Frontend, Boas práticas de performance</li>
          <li>Gestão de Projetos, Scrum, Jira, métricas e previsibilidade</li>
        </ul>

        <h2>Contato</h2>
        <p>
          Quer trocar uma ideia sobre um projeto ou consultoria? Entre em contato por e‑mail em
          <a href="mailto:tiago@martinsds.dev">tiago@martinsds.dev</a> ou me chame no
          <a href="https://www.linkedin.com/in/tiago-martins-041b48156/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </div>
  </section>
</template>

