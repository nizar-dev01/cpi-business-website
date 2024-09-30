import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'
import { Observer } from 'gsap/all'

export default defineNuxtPlugin((nuxtApp) => {
	if (process.client) {
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollToPlugin,
			Draggable,
			Observer
		)
	}

	return {
		provide: {
			gsap,
			Observer,
			ScrollTrigger
		},
	}
})