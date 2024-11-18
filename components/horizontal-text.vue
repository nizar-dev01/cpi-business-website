<template>
	<div class="rollingText-track">
		<slot name="subtitle"></slot>
		<div
			class="rollingText"
			ref="rollingText"
			@mouseenter="setCursorStateNav"
			@mouseleave="setCursorStateDefault"
		>
			<span class="text-slider-item tsi-1">
				<slot></slot>
			</span>
			<span class="text-slider-item tsi-2">
				<slot></slot>
			</span>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps(['duration', 'showNavCursor'])
	const rollingText = ref(null)

	const appStore = useAppStore()

	const setCursorStateNav = () => {
		if (props.showNavCursor) {
			appStore.setCursorState("nav")
		}
	}
	const setCursorStateDefault = () => {
		if (props.showNavCursor) {
			appStore.setCursorState()
		}
	}
</script>
<style lang="scss" scoped>
	.rollingText-track {
		overflow: hidden;
		position: relative;
	}

	.wrapperRollingText {
		white-space: nowrap;
	}

	.rollingText {
		display: inline-block;
		padding-left: 10px;
		white-space: nowrap;
		position: relative
	}

	.text-slider-item {
		display: inline-block;
	}

	@keyframes sliderFrames {
		0% {
			transform: translate(0%, 0px);
		}

		100% {
			transform: translate(-100%, 0px);
		}
	}

	.text-slider-item {
		animation-name: sliderFrames;
		animation-duration: 50s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>