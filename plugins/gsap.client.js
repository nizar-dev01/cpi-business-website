import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Observer } from 'gsap/all'

import Lenis from 'lenis'
import Snap from 'lenis/snap'

export default defineNuxtPlugin((nuxtApp) => {

	// <Setup Lenis>
	const lenis = new Lenis({
		lerp: 0.1
	})

	function createLenisSnap (config = {}) {
		return new Snap(lenis, config)
	}

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)
	// </Setup Lenis>

	// <Register Plugins>
	gsap.registerPlugin(
		ScrollTrigger,
		ScrollToPlugin,
		Observer
	)
	// </Register Plugins>

	return {
		provide: {
			gsap,
			Observer,
			ScrollTrigger,
			lenis,
			createLenisSnap
		},
	}
})