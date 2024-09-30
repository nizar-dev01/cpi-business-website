import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	vite: {
		plugins: [
			glsl()
		],
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern', // This gets rid of the "legacy JS API is deprecated" warning
					// additionalData: `@import "@/assets/style/common.scss";`,
				},
			},
		},
	},
})
