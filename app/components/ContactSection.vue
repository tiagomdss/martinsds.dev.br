<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)
const isError = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  isError.value = false
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    })

    isSubmitted.value = true
    setTimeout(() => {
      isSubmitted.value = false
      formData.name = ''
      formData.email = ''
      formData.subject = ''
      formData.message = ''
    }, 5000)
  } catch (err: any) {
    console.error(err)
    isError.value = true
    errorMessage.value = err.data?.message || err.message || 'Erro ao enviar mensagem. Verifique a conexão ou tente novamente mais tarde.'
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = [
  {
    iconName: 'heroicons:phone-20-solid',
    title: 'Telefone / WhatsApp',
    value: '(21) 97378-1313',
    description: 'Horário comercial',
    link: 'https://wa.me/5521973781313',
    colorFrom: 'from-neon-green',
    colorTo: 'to-cyan-500',
  },
  {
    iconName: 'heroicons:envelope-20-solid',
    title: 'Email',
    value: 'tiago.mds@live.com',
    description: 'Resposta em até 24h',
    link: 'mailto:tiago.mds@live.com',
    colorFrom: 'from-neon-purple',
    colorTo: 'to-neon-cyan',
  },
  {
    iconName: 'heroicons:map-pin-20-solid',
    title: 'Localização',
    value: 'Rio de Janeiro, Brasil',
    description: 'Disponível para remoto',
    link: '#',
    colorFrom: 'from-neon-pink',
    colorTo: 'to-neon-purple',
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([entry]) => {
  if (entry && entry.isIntersecting) isVisible.value = true
}, { rootMargin: '-100px' })
</script>

<template>
  <section id="contato" ref="sectionRef" class="py-24 lg:py-32 px-6 relative overflow-hidden z-10">
    <!-- Circuit board background -->
    <div class="absolute inset-0 circuit-bg opacity-20 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">

      <!-- Section Header -->
      <div class="text-center mb-16 transition-all duration-700" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
        <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-neon-cyan dark:text-neon-cyan mb-4 bg-white/60 dark:bg-cyan-500/5 border border-cyan-500/30 dark:border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)] hologram-effect" style="font-family: 'Rajdhani', sans-serif;">
          Contato
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style="font-family: 'Orbitron', sans-serif;">
          <span class="text-slate-900 dark:text-white">Vamos </span>
          <span class="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-neon-flicker">conversar</span>
          <span class="text-slate-900 dark:text-white">?</span>
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto" style="font-family: 'Rajdhani', sans-serif;">
          Estou disponível para projetos, consultoria e novas oportunidades
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-8">

        <!-- Contact Info Cards -->
        <div class="lg:col-span-2 space-y-4">
          <a
            v-for="(info, index) in contactInfo"
            :key="info.title"
            :href="info.link"
            :target="info.link.startsWith('http') ? '_blank' : undefined"
            :rel="info.link.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="flex items-start gap-4 p-5 rounded-2xl bg-white/60 dark:bg-[#0a0a1a]/80 border border-cyan-500/20 dark:border-cyan-500/30 shadow-lg group block hover:border-cyan-500/60 dark:hover:border-cyan-500/70 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 hologram-effect"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            :style="{ transitionDelay: (0.3 + index * 0.1) + 's', transitionDuration: '0.7s' }"
          >
            <div :class="`p-3 rounded-xl bg-gradient-to-br ${info.colorFrom} ${info.colorTo} shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]`">
              <Icon :name="info.iconName" class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-base font-semibold text-slate-900 dark:text-white mb-0.5" style="font-family: 'Orbitron', sans-serif;">{{ info.title }}</h4>
              <p class="text-slate-700 dark:text-cyan-300 font-medium text-sm" style="font-family: 'Rajdhani', sans-serif;">{{ info.value }}</p>
              <p class="text-slate-400 dark:text-slate-500 text-xs mt-1">{{ info.description }}</p>
            </div>
            <Icon v-if="info.link !== '#'" name="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4 text-slate-400 dark:text-cyan-400 group-hover:text-neon-cyan transition-colors shrink-0 mt-1" />
          </a>

          <!-- Schedule card -->
          <div
            class="p-5 rounded-2xl bg-white/60 dark:bg-[#0a0a1a]/80 border border-cyan-500/20 dark:border-cyan-500/30 shadow-lg hologram-effect transition-all duration-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 0.6s"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                <Icon name="heroicons:clock-20-solid" class="w-5 h-5 text-neon-cyan" />
              </div>
              <h4 class="text-base font-semibold text-slate-900 dark:text-white" style="font-family: 'Orbitron', sans-serif;">Horários</h4>
            </div>
            <div class="space-y-2 text-sm" style="font-family: 'Rajdhani', sans-serif;">
              <div class="flex justify-between">
                <span class="text-slate-500 dark:text-slate-400">Segunda - Sexta</span>
                <span class="font-semibold text-slate-800 dark:text-cyan-300">9h - 18h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 dark:text-slate-400">Sábado</span>
                <span class="font-semibold text-slate-800 dark:text-cyan-300">10h - 14h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 dark:text-slate-400">Domingo</span>
                <span class="font-semibold text-neon-pink dark:text-neon-pink">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <div
            class="rounded-3xl p-8 md:p-10 bg-white/60 dark:bg-[#0a0a1a]/80 border border-cyan-500/20 dark:border-cyan-500/30 shadow-xl backdrop-blur-sm hologram-effect transition-all duration-700 relative overflow-hidden"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 0.4s"
          >
            <!-- Neon border glow -->
            <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style="box-shadow: 0 0 20px rgba(0,240,255,0.1), inset 0 0 20px rgba(0,240,255,0.05);"></div>
            
            <div class="flex items-center gap-3 mb-8 relative z-10">
              <Icon name="heroicons:chat-bubble-bottom-center-text-20-solid" class="w-6 h-6 text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white" style="font-family: 'Orbitron', sans-serif;">Envie uma mensagem</h3>
            </div>

            <Transition name="fade" mode="out-in">
              <div v-if="isSubmitted" key="success" class="text-center py-12 relative z-10">
                <div class="w-20 h-20 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,240,255,0.4)] animate-float">
                  <Icon name="heroicons:check-circle-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2" style="font-family: 'Orbitron', sans-serif;">Mensagem Enviada!</h4>
                <p class="text-slate-500 dark:text-slate-400" style="font-family: 'Rajdhani', sans-serif;">Obrigado pelo contato. Responderei em breve.</p>
              </div>

              <form v-else key="form" class="space-y-6 relative z-10" @submit.prevent="handleSubmit">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="contact-name" class="block text-sm font-semibold text-slate-700 dark:text-cyan-300 mb-2" style="font-family: 'Rajdhani', sans-serif;">Nome</label>
                    <input
                      id="contact-name"
                      v-model="formData.name"
                      type="text"
                      class="w-full px-5 py-4 bg-white dark:bg-[#0f0f23] border border-slate-200 dark:border-cyan-500/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all text-sm hover:border-cyan-500/40"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label for="contact-email" class="block text-sm font-semibold text-slate-700 dark:text-cyan-300 mb-2" style="font-family: 'Rajdhani', sans-serif;">Email</label>
                    <input
                      id="contact-email"
                      v-model="formData.email"
                      type="email"
                      class="w-full px-5 py-4 bg-white dark:bg-[#0f0f23] border border-slate-200 dark:border-cyan-500/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all text-sm hover:border-cyan-500/40"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label for="contact-subject" class="block text-sm font-semibold text-slate-700 dark:text-cyan-300 mb-2" style="font-family: 'Rajdhani', sans-serif;">Assunto</label>
                  <input
                    id="contact-subject"
                    v-model="formData.subject"
                    type="text"
                    class="w-full px-5 py-4 bg-white dark:bg-[#0f0f23] border border-slate-200 dark:border-cyan-500/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all text-sm hover:border-cyan-500/40"
                    placeholder="Sobre o que você quer falar?"
                    required
                  />
                </div>

                <div>
                  <label for="contact-message" class="block text-sm font-semibold text-slate-700 dark:text-cyan-300 mb-2" style="font-family: 'Rajdhani', sans-serif;">Mensagem</label>
                  <textarea
                    id="contact-message"
                    v-model="formData.message"
                    rows="5"
                    class="w-full px-5 py-4 bg-white dark:bg-[#0f0f23] border border-slate-200 dark:border-cyan-500/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all text-sm resize-none hover:border-cyan-500/40"
                    placeholder="Descreva seu projeto ou necessidade..."
                    required
                  />
                </div>

                <div v-if="isError" class="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 text-sm">
                  {{ errorMessage }}
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hologram-effect" style="font-family: 'Orbitron', sans-serif;"
                >
                  <template v-if="isSubmitting">
                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </template>
                  <template v-else>
                    <Icon name="heroicons:paper-airplane-20-solid" class="w-5 h-5" />
                    Enviar Mensagem
                  </template>
                </button>
              </form>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
