export default defineNuxtConfig({
	css: ['~/assets/global.css'],
	srcDir: 'app',
	modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/seo', '@nuxt/image', '@nuxtjs/color-mode'],
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
		storageKey: 'theme',
		storage: 'cookie',
	},
	// color mode is provided by @nuxt/ui
	googleFonts: {
		families: {
			'ADLaM+Display': true,
		},
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
