export function useProjects() {
  const projects = [
    {
      title: 'Treinamento Nuxt 4',
      description: 'Plataforma oficial de ensino do framework Nuxt 4. Inclui documentação interativa e exemplos práticos.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://treinamento-nuxt4.vercel.app/',
      img: ''
    },
    {
      title: 'APF',
      description: 'Sistema de gestão administrativa para controle de processos e fluxos de trabalho internos.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://apf-khaki.vercel.app/',
      img: ''
    },
    {
      title: '4Vibes',
      description: 'Aplicação de streaming de música e descoberta de artistas independentes com interface imersiva.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://4vibes.vercel.app/',
      img: ''
    },
    {
      title: 'Site NTL',
      description: 'Website institucional para a empresa NTL, focado em performance e SEO otimizado.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://site-ntl.vercel.app/',
      img: ''
    },
    {
      title: 'Escola do CBPF 2025',
      description: 'Portal de inscrições e gestão de eventos para a Escola do Centro Brasileiro de Pesquisas Físicas.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://escola.cbpf.br/',
      img: 'escola2025.png'
    },
    {
      title: 'Convite 75 anos',
      description: 'Landing page comemorativa com animações interativas para o aniversário da instituição.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://cbpf.br/convite75/',
      img: 'convite100anos.png'
    },
    {
      title: 'EAFExp 2024',
      description: 'Sistema de submissão de trabalhos e gerenciamento de participantes para o evento anual.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://eafexp.cbpf.br/2024/',
      img: 'eafexp2024.png'
    },
    {
      title: 'EAFExp 2025',
      description: 'Versão atualizada do sistema de gestão do evento com novas features de networking.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://eafexp.cbpf.br/2025/',
      img: 'eafexp2025.png'
    },
    {
      title: 'Rubin Transients 2025',
      description: 'Dashboard para visualização de dados astronômicos em tempo real do observatório Rubin.',
      tags: ['Vuejs', 'NodeJs', 'Typescript', 'Nginx', 'Tailwind'],
      href: 'https://cbpf.br/rubin_transients2025/',
      img: 'astronomy.png'
    },
  ]

  return {
    projects
  }
}
