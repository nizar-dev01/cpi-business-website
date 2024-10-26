import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
	compatibilityDate: '2024-10-24',

	devtools: { enabled: true },

	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},

	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	features: {
		inlineStyles: false
	},

	vite: {
		plugins: [
			glsl()
		],
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern', // This gets rid of the "legacy JS API is deprecated" warning
					additionalData: `@use "./assets/style/breakpoints.scss" as *;`,
				},
			},
		},
	},

	vue: {
		compilerOptions: {
			isCustomElement: (tag) => {
				return tag === 'spline-viewer';
			}
		}
	},

	nitro: {
		prerender: {
			crawlLinks: true,
			failOnError: false,
		},
	},

	modules: [
		'@pinia/nuxt'
	]
})