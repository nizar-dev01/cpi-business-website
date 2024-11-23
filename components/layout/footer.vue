<template>
	<footer
		class="layout-footer"
		:style="`--color-theme: ${color}`"
		:class="{ yellow: color_theme === 'yellow' }"
	>
		<div class="layout-box noverflow">
			<h2 class="footer-text-title">
				<!-- <text-splitter
					text="Talk to us, or ask us anything."
					:scroll-reveal="true"
				/> -->
				Talk to us, or ask us anything.
			</h2>
			<h3
				class="footer-text-content"
				ref="shiningText"
				@mousemove="shineLight"
			>
				<!-- <text-splitter
					text="Our adventures have led us to expand into satellite offices across South-East Asia, but we are proud to be home-grown and call the UAE our home."
					:scroll-reveal="true"
				/> -->
				Our adventures have led us to expand into satellite offices across South-East Asia, but we are proud to
				be home-grown and call the UAE our home.
			</h3>
			<div class="w-100 noverflow">
				<div class="footer-call-to-actions">

					<button-sq
						text="Our Work"
						class="wide"
						@click.prevent="$router.push('/portfolio')"
						:class="{ yellow: color_theme === 'yellow' }"
					/>

					<button-sq
						text="Our Capabilities"
						class="wide"
						:blue="true"
						@click.prevent="$router.push('/services/ip-creation')"
						:class="{ yellow: color_theme === 'yellow' }"
					/>
				</div>
			</div>
			<div
				class="footer-footer"
				:style="`--color-theme: ${color}`"
			>
				<div class="email flex-center">
					{{ emailText }}
					<icon-copy
						class="footer-icon-copy"
						:class="{ 'has-copied': hasCopied }"
						@click.prevent="copyEmail"
					/>
				</div>
				<ul class="strip-list social-links">
					<li v-for="sl in [
						{
							text: 'Instagram',
							link: '#'
						},
						{
							text: 'LinkedIn',
							link: '#'
						},
						{
							text: 'Twitter',
							link: '#'
						}
					]">
						<a
							:href="sl.link"
							class="social-link"
						>
							{{ sl.text }}
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="layout-box relative">
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
		</div>
	</footer>
</template>
<script setup>
	const emailText = ref("support@cipbusiness.com")
	const hasCopied = ref(false)
	const copyEmail = () => {
		navigator.clipboard.writeText(emailText.value);
		hasCopied.value = true

		const _delay = 0.2
		setTimeout(() => {
			hasCopied.value = false
		}, _delay * 1000)
	}
	const shiningText = ref()
	const shineLight = e => {
		const { layerX, layerY } = e
		const bp = `${layerX - 225}px ${layerY - 225}px`
		shiningText.value.style.backgroundPosition = bp
		// console.log(bp)
	}

	// Color Theme
	const appStore = storeToRefs(useAppStore())
	const color = computed(() => appStore.pageTheme.value)
	const color_theme = computed(() => appStore.pageThemeSelector.value)


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
	// footer {
	// 	color: var(--color-theme);
	// }

	.layout-footer {
		background: black;
		// border-radius: 40px 40px 0 0;
		padding: 110px 0 0;
		position: relative;
	}

	.footer-text-title {
		font-size: 33px;
		font-family: 'Denton';
		line-height: 48px;
		font-weight: 400;
		margin: 0 0 30px;
	}

	// footer.yellow {
	// 	.footer-text-content {
	// 		color: $yellow;
	// 		// pointer-events: none;
	// 		background-image: none;
	// 	}

	// }

	.footer-text-content {
		font-size: 47px;
		line-height: 62px;
		font-weight: 400;
		margin: 0 0 56px;
		max-width: 1000px;
		color: rgba(255, 255, 255, 0.15);
		background-clip: text;
		background-image: radial-gradient(circle closest-side at 50% 50%,
				rgb(255, 255, 255) 50%,
				rgb(255, 255, 255) 60%,
				rgba(255, 255, 255, 0.4) 80%,
				transparent 100%);
		backdrop-filter: blur(10px);
		background-repeat: no-repeat;
		background-size: 450px 450px;
		background-position: -450px -450px;

		@include sm {
			font-size: 30px;
			line-height: 45px;
			color: rgba(255, 255, 255, 0.718);
		}
	}

	.footer-call-to-actions {
		margin: 0 -10px 89px;
	}


	.scroll-to-top-button {
		position: absolute;
		bottom: 150px;

		$bhw: 50px;
		width: $bhw;
		height: $bhw;
		right: 0;
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

	.footer-footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		// border-top: 1px solid var(--color-theme);
		border-top: 1px solid white;
		height: 90px;
		overflow: hidden;

		.email {
			font-size: 16px;
			font-weight: 400;
			user-select: none;
			cursor: copy;

			&:hover {
				opacity: 0.9;
			}
		}

		.footer-icon-copy {
			margin-left: 15px;
			// cursor: copy;
			cursor: pointer;
			transition: transform 0.1s ease;

			&.has-copied {
				cursor: none;
			}

			&:active {
				transform: scale(1.3);
			}
		}

		.social-links {
			display: flex;
			justify-content: space-between;
			margin: 0 -19px;

			li {
				margin: 0 19px;
			}

			.social-link {
				font-size: 16px;
				text-decoration: none;
			}
		}
	}
</style>