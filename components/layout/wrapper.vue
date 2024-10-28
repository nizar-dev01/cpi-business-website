<template>
	<div
		id="layout-wrapper-container"
		@mousemove="onScreenMouseMove"
		@mouseLeave="toggleCursorView(false)"
		@mouseEnter="toggleCursorView(true)"
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
		$gsap: gsap
	} = useNuxtApp()

	const appStore = useAppStore()


	const customCursor = ref()

	const customCursorBounds = ref({
		height: 0,
		width: 0
	})


	let xTo, yTo;

	const onScreenMouseMove = (e) => {
		const deltaX = e.x - customCursorBounds.value.width / 2
		const deltaY = e.y - customCursorBounds.value.height / 2
		xTo(deltaX)
		yTo(deltaY)
	}

	const isCursorVisible = ref(false)
	const toggleCursorView = (value) => {
		if (value === undefined) {
			isCursorVisible.value = !isCursorVisible.value
		} else isCursorVisible.value = value
	}

	onMounted(() => {
		const _cursor = customCursor.value
		customCursorBounds.value.height = _cursor.clientHeight
		customCursorBounds.value.width = _cursor.clientWidth

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
		left: -10vh;
		top: -10vh;
		z-index: $cursor-z;
		height: 10vh;
		width: 10vh;
		border-radius: 50%;
		border: 1px solid white;
		pointer-events: none;
		opacity: 0;
		visibility: hidden;

		// Temporary styles for setting the transition
		// transform: scale(0);
		transition:
			background 0.3s ease-in-out,
			border-color 0.3s ease-in-out,
			opacity 0.3s ease-in-out,
			visibility 0.3s ease-in-out,
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
		}

		&.nav {
			display: block;
			background: white;
			// border-color: black;
			transform: scale(1);
			opacity: 1;
			visibility: visible;
		}
	}
</style>