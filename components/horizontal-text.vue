<template>
	<div class="rollingText-track">
		<slot name="subtitle"></slot>
		<div :class="{ 'scale-on-hover': props.scaleOnHover }">
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
	</div>
</template>
<script setup>
	// const props = defineProps(['duration', 'showNavCursor', 'scaleOnHover'])
	const props = defineProps({
		duration: String,
		showNavCursor: {
			type: Boolean,
			default: false
		},
		scaleOnHover: {
			type: Boolean,
			default: false
		}
	})
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
		position: relative;
	}

	.scale-on-hover {
		transform-origin: center;
		transition: transform 0.5s ease-in-out;

		&:hover {
			transform: scale(1.2);
		}
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