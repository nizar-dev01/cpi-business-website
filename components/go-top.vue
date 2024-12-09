<template>
	<div
		class="scroll-to-top-button"
		@mouseenter="toggleArrow(0)"
		@mouseleave="toggleArrow(1)"
	>
		<div class="ripple one"></div>
		<div class="ripple two"></div>
		<div class="content"></div>

		<div
			class="arrow-icon"
			@click="goToTop"
		>
			<div
				class="active"
				ref="upArrowActive"
			>
				<font-awesome-icon :icon="['fas', 'arrow-up']" />
			</div>
			<div
				class="passive"
				ref="upArrowPassive"
			>
				<font-awesome-icon :icon="['fas', 'arrow-up']" />
			</div>
		</div>
	</div>
</template>
<script setup>

	const {
		$gsap
	} = useNuxtApp()

	const upArrowActive = ref()
	const upArrowPassive = ref()
	let is_animation_running = false
	const toggleArrow = () => {
		if (is_animation_running == true) return
		is_animation_running = true
		const a_arrow = upArrowActive.value
		const p_arrow = upArrowPassive.value

		// Set initial values
		$gsap.set(a_arrow, {
			y: 0
		})
		$gsap.set(p_arrow, {
			y: 50
		})

		const _duration = 0.5
		// Run the animation
		$gsap.to(a_arrow, {
			y: -50,
			duration: _duration
		})
		$gsap.to(p_arrow, {
			y: 0,
			duration: _duration,
			onComplete () {
				is_animation_running = false
			}
		})
	}

	const goToTop = () => {
		$gsap.to(window, {
			duration: 0,
			scrollTo: {
				y: 0
			}
		})
	}
</script>
<style lang="scss">
	.scroll-to-top-button {
		$bhw: 50px;
		width: $bhw;
		height: $bhw;
		border-radius: 50%;
		z-index: 1;

		@include md {
			bottom: 120px;
		}

		@keyframes pulse {
			0% {
				transform: scale(1)
			}

			25% {
				transform: scale(1.1)
			}

			50% {
				transform: scale(1)
			}

			75% {
				transform: scale(0.9)
			}

			100% {
				transform: scale(1)
			}
		}

		$blue: #054BF9;

		&:hover {
			cursor: pointer;

			.content {
				animation: pulse 0.5s;

				background: $blue;
				color: white;
			}

			.ripple {

				background: $blue;
				color: white;

				&.one,
				&.two {
					opacity: 0;
					transform: scale(2);
				}

				&.one {
					transition: all 1.2s ease-in-out 0s;
				}

				&.two {
					transition: all 1.2s ease-in-out 0.2s;
				}
			}
		}


		.ripple,
		.content,
		.arrow-icon {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			width: inherit;
			height: inherit;
			border-radius: inherit;
			pointer-events: none;
			color: $blue;
			display: flex;
			justify-content: center;
			align-items: center;
			background: white;
			color: $blue;

			&:hover {
				background: $blue;
				color: white;
			}
		}

		.arrow-icon {
			pointer-events: all !important;
			overflow: hidden;

			.active,
			.passive {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				top: 0;
				height: 100%;
				width: 100%;
				line-height: 50px;
				text-align: center;
			}

			.active {
				transform: translateY(0);
			}

			.passive {
				transform: translateY(-50px);
			}
		}

		.ripple {
			z-index: 1;
			transition-property: scale, opacity;
			opacity: 0.2;
		}

		.content {
			z-index: 2;
		}

		.arrow-icon {
			z-index: 3;
		}
	}

</style>