import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Observer } from 'gsap/all'

import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {

	// <Setup Lenis>
	class CustomLenis {
		constructor(config = {}) {
			this.config = config
			this.listeners = []
			this.init()
		}

		init (config) {
			this.instance = new Lenis(config)

			this.instance.on('scroll', ScrollTrigger.update)

			const lenis = this.instance
			this.listenLenisRAF = (time) => lenis.raf(time * 1000)

			gsap.ticker.add(this.listenLenisRAF)

			gsap.ticker.lagSmoothing(0)
		}

		destroy () {
			this.instance.destroy()
			gsap.ticker.remove(this.listenLenisRAF)
		}
	}

	const lenis = new CustomLenis({
		wrapper: '.layout-content'
	})
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
			lenis
		},
	}
})