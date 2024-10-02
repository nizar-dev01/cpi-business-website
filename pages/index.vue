<template>
	<section id="section-hero">
		<div class="layout-box">
			<h1 class="hero-title">cpi business</h1>
			<h3 class="hero-subtitle">
				<span
					class="subtitle-letter text-block"
					v-for="letter in sentenceList"
				>
					{{ letter }}
				</span>
			</h3>
			<div class="hero-call-to-actions">
				<button class="btn-sq">
					<span class="bt-text">
						Our Work
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
				<button class="btn-sq blue">
					<span class="bt-text">
						Our Capabilities
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
	<client-only v-if="0">
		<index-sphere-canvas />
	</client-only>
	<index-about-brief
		data-start="70%"
		data-prevent-reverse-snap="true"
	/>
	<section
		class="demo-snap red"
		:ref="setSnapRef"
	></section>
	<section
		class="demo-snap blue"
		:ref="setSnapRef"
	></section>
	<section
		class="demo-snap yellow"
		:ref="setSnapRef"
	></section>
</template>
<script setup>
	const snapElements = ref([])
	const setSnapRef = el => snapElements.value.push(el.$el || el)
	onMounted(() => {
		const {
			$ScrollTrigger: ScrollTrigger,
			$gsap: gsap,
			// $Observer: Observer,
			$lenis: lenis,
			$createLenisSnap: createLenisSnap
		} = useNuxtApp()

		const snap = createLenisSnap({
			type: 'proximity',
			velocityThreshold: 1,
			lerp: 0.05
		})

		const _ = []

		snapElements.value.forEach(sec => {
			const boundingRect = sec.getBoundingClientRect()
			const clientY = scrollY + boundingRect.y
			snap.add(clientY)

			_.push({
				clientY,
				sec
			})
		})
		console.log(_)

		// debugger

		// const scrollConfig = {
		// 	lerp: 0.1,
		// 	duration: 1
		// }
		// const scrollToSnap = (element, reverse = false) => {
		// 	if (
		// 		!reverse && element || // is forward
		// 		reverse && element && !element?.dataset?.preventReverseSnap // is reverse and snapping is allowed
		// 	) {
		// 		const snap_to = +(element.getBoundingClientRect().y + scrollY).toFixed(2)
		// 		// lenis.stop()
		// 		console.log("Scrolling to : ", snap_to)
		// 		lenis.
		// 			scrollTo(snap_to, scrollConfig)
		// 		// lenis.start()
		// 		console.log("Done scrolling to : ", snap_to, scrollConfig)
		// 		setTimeout(() => {
		// 			if (window.scrollY != snap_to) {
		// 				console.log("Need to scroll again!")
		// 				lenis.
		// 					scrollTo(snap_to, scrollConfig)
		// 			} else {
		// 				console.log("It is done!")
		// 			}
		// 		}, scrollConfig.duration * 1.5)
		// 	} else {
		// 		console.log("Oops", element, reverse)
		// 	}
		// }

		// snapElements.value.forEach(el => {
		// 	const start = (el?.dataset?.start || "95%")
		// 	new ScrollTrigger.create({
		// 		trigger: el,
		// 		start: `top ${start}`,
		// 		end: "bottom top",
		// 		// end: "+=100%",
		// 		markers: true,
		// 		onEnter (e) {
		// 			scrollToSnap(e.trigger)
		// 		},
		// 		onEnterBack (e) {
		// 			scrollToSnap(e.trigger, true)
		// 		},
		// 	})
		// })
	})
	const sentenceList = "Value-driven Ideas / Impactful Experiences / Focused Strategies".split("")
</script>
<style lang="scss">

	.demo-snap {
		height: 100vh;
		// margin-bottom: 10px;

		&.red {
			background: #ce5454;
		}

		&.blue {
			background: #2c5bd3
		}

		&.yellow {
			background: #e3e366;
		}
	}

	// Common
	.layout-box {
		width: 97%;
		max-width: 1569px;
		margin: 0 auto;
	}

	// /Common
	section#section-hero {
		// min-height: 100vh;
		padding-bottom: 200px;
		border-top: 1px solid transparent;
	}

	h1.hero-title {
		font-family: 'Newyork';
		font-weight: 674;
		font-size: 166px;
		color: white;
		text-align: center;
		margin: 197px 0 0;
		line-height: 198.1px;

	}

	.hero-subtitle {
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 400;
		line-height: 71.55px;
		text-align: center;
		color: white;
		margin: 50px 0 84px;
	}

	.btn-sq {
		width: 338px;
		height: 61px;
		border: none;
		border-radius: 5px;
		background: #3D3D3D;
		font-size: 20px;
		color: white;
		font-family: 'Metropolis';
		font-weight: 400;
		margin: 0 18px;
		cursor: pointer;

		&.blue {
			background: #054BF9;
		}

		.bt-text {
			margin-right: 13px;
		}
	}

	.hero-call-to-actions {
		display: flex;
		justify-content: center;
	}

	.text-block {
		display: inline-block;
	}
</style>