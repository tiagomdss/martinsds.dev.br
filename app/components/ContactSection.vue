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
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-500',
  },
  {
    iconName: 'heroicons:envelope-20-solid',
    title: 'Email',
    value: 'tiago.mds@live.com',
    description: 'Resposta em até 24h',
    link: 'mailto:tiago.mds@live.com',
    colorFrom: 'from-purple-500',
    colorTo: 'to-violet-500',
  },
  {
    iconName: 'heroicons:map-pin-20-solid',
    title: 'Localização',
    value: 'Rio de Janeiro, Brasil',
    description: 'Disponível para remoto',
    link: '#',
    colorFrom: 'from-rose-500',
    colorTo: 'to-pink-500',
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
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16 transition-all duration-700" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
        <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-300 mb-4 bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-sm">
          Contato
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span class="text-slate-900 dark:text-white">Vamos </span>
          <span class="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">conversar</span>
          <span class="text-slate-900 dark:text-white">?</span>
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
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
            class="flex items-start gap-4 p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-lg group block hover:border-purple-500/40 dark:hover:border-purple-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            :style="{ transitionDelay: (0.3 + index * 0.1) + 's', transitionDuration: '0.7s' }"
          >
            <div :class="`p-3 rounded-xl bg-gradient-to-br ${info.colorFrom} ${info.colorTo} shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`">
              <Icon :name="info.iconName" class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-base font-semibold text-slate-900 dark:text-white mb-0.5">{{ info.title }}</h4>
              <p class="text-slate-700 dark:text-slate-300 font-medium text-sm">{{ info.value }}</p>
              <p class="text-slate-400 dark:text-slate-500 text-xs mt-1">{{ info.description }}</p>
            </div>
            <Icon v-if="info.link !== '#'" name="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-purple-500 transition-colors shrink-0 mt-1" />
          </a>

          <!-- Schedule card -->
          <div
            class="p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-lg transition-all duration-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 0.6s"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-purple-500/10 dark:bg-purple-500/20">
                <Icon name="heroicons:clock-20-solid" class="w-5 h-5 text-purple-500" />
              </div>
              <h4 class="text-base font-semibold text-slate-900 dark:text-white">Horários</h4>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-slate-500 dark:text-slate-400">Segunda - Sexta</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">9h - 18h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 dark:text-slate-400">Sábado</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">10h - 14h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 dark:text-slate-400">Domingo</span>
                <span class="font-semibold text-rose-500 dark:text-rose-400">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <div
            class="rounded-3xl p-8 md:p-10 bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-xl backdrop-blur-sm transition-all duration-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 0.4s"
          >
            <div class="flex items-center gap-3 mb-8">
              <Icon name="heroicons:chat-bubble-bottom-center-text-20-solid" class="w-6 h-6 text-purple-500" />
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Envie uma mensagem</h3>
            </div>

            <Transition name="fade" mode="out-in">
              <div v-if="isSubmitted" key="success" class="text-center py-12">
                <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                  <Icon name="heroicons:check-circle-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mensagem Enviada!</h4>
                <p class="text-slate-500 dark:text-slate-400">Obrigado pelo contato. Responderei em breve.</p>
              </div>

              <form v-else key="form" class="space-y-6" @submit.prevent="handleSubmit">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="contact-name" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nome</label>
                    <input
                      id="contact-name"
                      v-model="formData.name"
                      type="text"
                      class="w-full px-5 py-4 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all text-sm"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label for="contact-email" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input
                      id="contact-email"
                      v-model="formData.email"
                      type="email"
                      class="w-full px-5 py-4 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all text-sm"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label for="contact-subject" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Assunto</label>
                  <input
                    id="contact-subject"
                    v-model="formData.subject"
                    type="text"
                    class="w-full px-5 py-4 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all text-sm"
                    placeholder="Sobre o que você quer falar?"
                    required
                  />
                </div>

                <div>
                  <label for="contact-message" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Mensagem</label>
                  <textarea
                    id="contact-message"
                    v-model="formData.message"
                    rows="5"
                    class="w-full px-5 py-4 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                    required
                  />
                </div>

                <div v-if="isError" class="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-sm">
                  {{ errorMessage }}
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
