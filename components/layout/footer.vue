<template>
	<footer class="layout-footer">
		<div class="layout-box noverflow">
			<h2 class="footer-text-title">
				<text-splitter
					text="Talk to us, or ask us anything."
					:scroll-reveal="true"
				/>
			</h2>
			<h3 class="footer-text-content">
				<text-splitter
					text="Our adventures have led us to expand into satellite offices across South-East Asia, but we are proud to be home-grown and call the UAE our home."
					:scroll-reveal="true"
				/>
			</h3>
			<div class="footer-call-to-actions">
				<button class="btn-sq btn-hero-action">
					<span class="bt-text">
						Our Work
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
				<button class="btn-sq blue btn-hero-action">
					<span class="bt-text">
						Our Capabilities
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
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
</script>
<style lang="scss">
	.layout-footer {
		background: black;
		border-radius: 40px 40px 0 0;
		min-height: 100px;
		padding: 175px 0 0;
	}

	.footer-text-title {
		font-size: 53px;
		font-family: 'Newyork';
		line-height: 70px;
		font-weight: 400;
		margin: 0 0 30px;
	}

	.footer-text-content {
		font-size: 75px;
		line-height: 101px;
		font-weight: 500;
		margin: 0 0 90px;
	}

	.footer-call-to-actions {
		margin: 0 -18px 142px;
	}

	.footer-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid white;
		height: 190px;
		overflow: hidden;

		.email {
			font-size: 26px;
			font-weight: 400;
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
				transform: scale(1.2);
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
				font-size: 26px;
				text-decoration: none;
			}
		}
	}
</style>