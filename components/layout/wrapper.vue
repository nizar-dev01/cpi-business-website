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
			:class="appStore.cursorState"
			ref="customCursor"
		>
			<div class="nav-icon">
				<icon-arrow-up
					height="20"
					width="20"
					color="black"
				></icon-arrow-up>
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

	const onScreenMouseMove = (e) => {
		const _cursor = customCursor.value
		const _height = _cursor.clientHeight
		const _width = _cursor.clientWidth

		const deltaX = e.x - _width / 2
		const deltaY = e.y - _height / 2
		xTo(deltaX)
		yTo(deltaY)
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
		left: -10px;
		top: -10px;
		z-index: $cursor-z;
		border-radius: 50%;
		border: 1px solid white;
		pointer-events: none;

		height: 20px;
		width: 20px;

		background: white;
		mix-blend-mode: difference;

		// Temporary styles for setting the transition
		// transform: scale(0);
		transition:
			background 0.3s ease-in-out,
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

		&.nav {
			display: block;
			background: white;
			// border-color: black;
			transform: scale(1);
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
	}
</style>