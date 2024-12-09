<template>
	<div
		id="layout-wrapper-container"
		@mousemove="onScreenMouseMove"
		@mouseLeave="toggleCursorView(false)"
		@mouseEnter="toggleCursorView(true)"
		ref="layoutWrapperContainer"
	>
		<slot></slot>
		<aside class="grainy-overlay"></aside>


		<aside
			class="custom-cursor"
			:class="[appStore.cursorState, { idle: isMouseIdle }]"
			ref="customCursor"
		>
			<div class="nav-icon">
				<icon-arrow-up
					height="20"
					width="20"
					color="black"
				></icon-arrow-up>
			</div>
			<div
				class="go-top-box"
				@click="goToTop"
			>
				<span
					class="go-top-text"
					@click="goToTop"
				>
					GO TO TOP
				</span>
			</div>
		</aside>
	</div>
</template>
<script setup>
	const {
		$gsap: gsap,
		$lenis,
		$CustomLenis
	} = useNuxtApp()

	const appStore = useAppStore()


	const customCursor = ref()

	// const customCursorBounds = ref({
	// 	height: 0,
	// 	width: 0
	// })


	let xTo, yTo;

	const isMouseIdle = ref(false)
	const idleWaitTime = 1000 * 2
	let idleTimeout;

	const onScreenMouseMove = (e) => {
		clearTimeout(idleTimeout)
		const _cursor = customCursor.value
		const _height = _cursor.clientHeight
		const _width = _cursor.clientWidth

		const deltaX = e.x //- _width / 2
		const deltaY = e.y //- _height / 2
		xTo(deltaX)
		yTo(deltaY)

		isMouseIdle.value = false
		idleTimeout = setTimeout(() => {
			if (window.scrollY > window.innerHeight)
				isMouseIdle.value = true
		}, idleWaitTime)
	}

	const isCursorVisible = ref(false)
	const toggleCursorView = (value) => {
		if (value === undefined) {
			isCursorVisible.value = !isCursorVisible.value
		} else isCursorVisible.value = value
	}

	const layoutWrapperContainer = ref()
	onMounted(() => {
		$lenis.value = new $CustomLenis({
			content: layoutWrapperContainer.value,
			wrapper: layoutWrapperContainer.value,
		})

		xTo = gsap.quickTo(
			customCursor.value,
			"left",
			{
				duration: 0.3,
				ease: "power3"
			}
		)
		yTo = gsap.quickTo(
			customCursor.value,
			"top",
			{
				duration: 0.3,
				ease: "power3"
			}
		);
	})



	const goToTop = () => {
		isMouseIdle.value = false
		gsap.to(window, {
			duration: 0,
			scrollTo: {
				y: 0
			}
		})
	}
</script>
<style lang="scss">
	$grain-z: 2147483647;
	$cursor-z: 2147483648;

	.grainy-overlay {
		z-index: $grain-z;
		opacity: .05;
		background-image: url('@/assets/images/grain.gif');
		background-position: 0 0;
		background-size: 400px;
		background-attachment: fixed;
		position: fixed;
		inset: 0%;
		pointer-events: none;
		user-select: none;
	}

	.custom-cursor {
		position: fixed;
		left: -200px;
		top: -200px;
		z-index: $cursor-z;
		border-radius: 50%;
		// border: 1px solid white;
		pointer-events: none;
		height: 20px;
		width: 20px;
		transform: translate(-50%, -50%);

		background: white;
		mix-blend-mode: difference;

		.go-top-box {
			opacity: 0;
			visibility: hidden;
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.go-top-text {
				color: white;
				font-size: 12px;
				font-weight: 900;
				user-select: none;
			}
		}

		&.idle:not(.nav) {
			pointer-events: unset;
			mix-blend-mode: unset;
			height: 100px;
			width: 100px;
			background-color: #054BF9;
			cursor: pointer;

			.go-top-box {
				opacity: 1;
				visibility: visible;
				transition-delay: 0.2s;
				transition: all 0.5s ease;
				pointer-events: all;
				background: inherit;
				border-radius: inherit;
			}
		}

		&.nav {
			display: block;
			background: white;
			// border-color: black;
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
			visibility: visible;
			mix-blend-mode: normal;
			height: 10vh;
			width: 10vh;

			.nav-icon {
				opacity: 1;
				visibility: visible;
			}
		}

		transition: background 0.3s ease-in-out,
		border-color 0.3s ease-in-out,
		opacity 0.3s ease-in-out,
		visibility 0.3s ease-in-out,
		height 0.3s ease-in-out,
		width 0.3s ease-in-out,
		transform 0.3s ease-in-out;

		.nav-icon {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
		}

		@include md {
			display: none !important;
		}
	}
</style>