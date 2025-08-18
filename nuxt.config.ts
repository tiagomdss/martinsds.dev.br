export default defineNuxtConfig({
    css: ['~/assets/global.css'],
    srcDir: 'app',
    modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/seo', '@nuxt/image', '@nuxtjs/color-mode'],
	app: {
		head: {
			templateParams: {
			  separator: '•',
			},
			link: [
                { rel: 'icon', type: 'image/png', href: '/logo-icon.png' },
                { rel: 'shortcut icon', type: 'image/png', href: '/logo-icon.png' },
                { rel: 'apple-touch-icon', href: '/logo-icon.png' },
			],
		  },
		pageTransition: { name: 'page', mode: 'default' },
	},
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: '',
		storageKey: 'theme',
		storage: 'cookie',
	},
	googleFonts: {
		display: 'swap',
		families: {
			Montserrat: [400, 500, 600, 700],
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
