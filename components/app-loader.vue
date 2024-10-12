<template>
	<div
		class="loader flex-center"
		ref="loaderContainer"
		v-if="showWelcome"
	>
		<div
			class="loader-content-box"
			ref="loaderContentBox"
		>
			<div class="text-slide-container">
				<h1
					class="welcome-title"
					:ref="setWelcomeTitleRef"
				>WELCOME</h1>
				<h1
					class="welcome-title we-are"
					:ref="setWelcomeTitleRef"
				>
					WE ARE
				</h1>
				<h1
					class="welcome-title cpi"
					:ref="setWelcomeTitleRef"
				>
					CPI
				</h1>
			</div>

			<div class="progress-container">
				<div class="progress-bar">
					<div
						class="progress-line"
						ref="progressLine"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const showWelcome = ref(true)
	const welcomeTitle = ref([])
	const setWelcomeTitleRef = el => welcomeTitle.value.push(el)

	const loaderContentBox = ref()
	const loaderContainer = ref()
	const progressLine = ref()

	const isLayoutReady = ref(false)


	const appStore = useAppStore()

	onMounted(() => {
		const {
			$gsap
		} = useNuxtApp()

		window.scrollTo(0, 0)

		const tl = $gsap.timeline({
			defaults: {
				duration: 1,
				delay: 1,
				ease: "power1.inOut",
			}
		})
		const startLabel = "animation-start"
		const middleLabel = "animation-middle"
		const endLabel = "animation-end"
		// Change this to enable actual loading
		tl.add(startLabel)
			.to(welcomeTitle.value[0], // WE
				{
					duration: 0.3,
					y: '-100%',
				},
				startLabel
			)
			.to(welcomeTitle.value[1], // ARE
				{
					duration: 0.3,
					y: '-100%',
				},
				startLabel
			).set(welcomeTitle.value[2], // CPI
				{
					y: '-100%',
				})

			.add(middleLabel)
			.to(welcomeTitle.value[1], // ARE
				{
					duration: 0.3,
					y: '-200%',
					delay: 0
				},
				middleLabel
			)
			.to(welcomeTitle.value[2], // CPI
				{
					y: '-200%',
					duration: 0.3,
					delay: 0
				}, middleLabel)
			// .to(progressLine.value, {
			// 	width: '50%',
			// 	duration: 0.3 * 2,
			// }, startLabel)
			.to(progressLine.value, {
				width: '100%',
				duration: 0.8,
				delay: 0
			})
			.add(endLabel)
			// Finally hide the entire thing
			.to(loaderContentBox.value, {
				y: -100,
				delay: 0,
			}, endLabel)
			.to(loaderContainer.value,
				{
					opacity: 0,
					delay: 0,
					onComplete () {
						showWelcome.value = false
						appStore.initiate()
					}
				}, endLabel)

		setTimeout(() => {
			isLayoutReady.value = true
		}, 0)
	})
</script>
<style lang="scss" scoped>
	$loader-text-height: 125px;

	.loader {
		height: 100vh;
		width: 100vw;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: black;

		.welcome-title {
			color: white;
			text-align: center;
			margin: 0;
			font-size: 100px;
			line-height: $loader-text-height;
			font-weight: 400;

			@include md {
				font-size: 70px;
			}

			@include xs {
				font-size: 50px;
			}

			// &.cpi {
			// 	font-family: 'Newyork';
			// }
		}

		.loader-content-box,
		.text-slide-container {
			height: $loader-text-height;
			position: relative;
		}

		.text-slide-container {
			overflow: hidden;
		}

		.progress-container {
			position: absolute;
			left: 0;
			right: 0;
			top: 125%;

			.progress-bar {
				height: 5px;
				width: 100%;
				background: #ffffff36;
				border-radius: 2px;
				overflow: hidden;
			}

			.progress-line {
				height: 100%;
				width: 0%;
				background: white;
			}
		}
	}
</style>