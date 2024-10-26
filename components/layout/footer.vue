<template>
	<footer
		class="layout-footer"
		@mousemove="shineLight"
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
						@mousemove.prevent.stop
						@click.prevent="$router.push('/portfolio')"
					/>

					<button-sq
						text="Our Capabilities"
						class="wide"
						:blue="true"
						@mousemove.prevent.stop
						@click.prevent="$router.push('/services')"
					/>
				</div>
			</div>
			<div class="footer-footer">
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
</script>
<style lang="scss">
	.layout-footer {
		background: black;
		// border-radius: 40px 40px 0 0;
		padding: 110px 0 0;
	}

	.footer-text-title {
		font-size: 33px;
		font-family: 'Newyork';
		line-height: 48px;
		font-weight: 400;
		margin: 0 0 30px;
	}

	.footer-text-content {
		font-size: 47px;
		line-height: 62px;
		font-weight: 400;
		margin: 0 0 56px;
		max-width: 1000px;
		color: rgba(255, 255, 255, 0.15);
		background-clip: text;
		background-image: radial-gradient(circle closest-side at 50% 50%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0.4) 80%, transparent 100%);
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

	.footer-footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
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