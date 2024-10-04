<template>
	<section
		class="snap-wrapper"
		ref="snapWrapper"
	>
		<div
			class="snap-element red"
			:ref="setSnapRef"
		>
			<h1>One</h1>
		</div>
		<div
			class="snap-element blue subsequent"
			:ref="setSnapRef"
		>
			<h1>Two</h1>
		</div>
		<div
			class="snap-element pink subsequent"
			:ref="setSnapRef"
		>
			<h1>Three</h1>
		</div>
		<div
			class="snap-element yellow subsequent"
			:ref="setSnapRef"
		>
			<h1>Four</h1>
		</div>
		<div
			class="snap-element purple subsequent"
			:ref="setSnapRef"
		>
			<h1>Five</h1>
		</div>
		<div
			class="snap-element lime subsequent"
			:ref="setSnapRef"
		>
			<h1>Six</h1>
		</div>
	</section>
</template>
<script setup>
	const snapWrapper = ref()
	const snapElements = ref([])
	const setSnapRef = el => snapElements.value.push(el.$el || el)


	onMounted(() => {
		const {
			$ScrollTrigger: ScrollTrigger,
			$gsap: gsap,
			$Observer: Observer,
			$lenis
		} = useNuxtApp()

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: snapWrapper.value,
				start: "top top",
				pin: true,
				scrub: 1,
				// onEnter () {
				// 	console.log("Destroying lenis")
				// 	$lenis.instance.stop()
				// 	console.log("Lenis is destroyed")
				// },
				// onEnterBack () {
				// 	console.log("Destroying lenis")
				// 	$lenis.instance.stop()
				// 	console.log("Lenis is destroyed")
				// },
				// onLeave () {
				// 	console.log("Initiating Lenis")
				// 	$lenis.instance.start()
				// },
				// onLeaveBack () {
				// 	console.log("Initiating Lenis")
				// 	$lenis.instance.start()
				// }
			}
		})

		snapElements.value.forEach((el, i) => {
			tl
				.addLabel(`hop-${i}`)
				.to((el), {
					left: 0
				})
		})
	})
</script>
<style lang="scss" scoped>

	.snap-wrapper {
		height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.snap-element {
		height: 100%;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 200px;

		h1 {
			font-size: 100px;
			color: black;
			text-align: center;
			margin: 0;
			text-transform: uppercase;
		}

		// margin-bottom: 10px;
		&.subsequent {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 100%;
		}

		&.red {
			background: #ce5454;
			box-sizing: border-box;
		}

		&.blue {
			background: #2c5bd3
		}

		&.pink {
			background: #e366ce;
		}

		&.yellow {
			background: #e3e366;
		}

		&.purple {
			background: #9866e3;
		}

		&.lime {
			background: #b1e366;
		}
	}
</style>