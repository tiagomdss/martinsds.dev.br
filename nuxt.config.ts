export default defineNuxtConfig({
	css: ['~/assets/global.sass'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-icon', '@nuxtseo/module', '@nuxt/image', 'nuxt-primevue'],
	app: {
		head: {
			templateParams: {
			  separator: '•',
			},
		  },
	},
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: '',
	},
	googleFonts: {
		families: {
			'ADLaM+Display': true,
		},
	},
	i18n: {
		baseUrl: 'https://martinsds.dev.br/',
		defaultLocale: 'pt',
		langDir: 'locales',
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.ts' },
			{ code: 'es', iso: 'es', name: 'Español (ESP)', file: 'es.ts' },
			{ code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.ts' },
		],
	},
	site: {
		url: 'https://martinsds.dev.br/',
		name: 'Tiago Martins',
		description: 'Desenvolvedor Front-End',
		defaultLocale: 'pt',
		identity: {
			type: 'Person',
		},
	},
	linkChecker: {
		enabled: false,
	},
	devtools: {
		enabled: true,
	},
})
