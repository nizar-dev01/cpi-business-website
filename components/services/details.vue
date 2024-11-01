<template>
	<section id="services-details-section">
		<div class="layout-box">
			<!-- Why Us -->
			<div class="container">
				<div class="row">
					<div class="col left">
						<h2 class="subtitle">
							Why us
						</h2>
					</div>
					<div class="col right">
						<p class="content">
							Our web experiences are based on coheret concepts individually tailored to the use case.
							Ourfocus varies: functionality,storyline, gamification, or other web experiences. Key in all
							our over
							80 projects: efficient user guidance, modern design, high-quality programming, and the
							cutting-edge web development tool Webflow.
						</p>
					</div>
				</div>
			</div>
			<!-- /Why Us -->

			<!-- What we Offer -->
			<div class="container what-we-offer">
				<div class="row">
					<div class="col left">
						<h2 class="subtitle">
							What we offer
						</h2>
					</div>
					<div class="col right">
						<accordion />
					</div>
				</div>
			</div>
			<!-- /What we Offer -->

			<!-- We Offer Text -->
			<h2 class="we-offer-text">
				<text-splitter
					text="We offer a diverse range of capabilities, from content creation to event design, and everything in between"
					:expose="true"
					ref="splitter"
				/>
			</h2>
			<!-- /We Offer Text -->
		</div>
	</section>
</template>
<script setup>
	const splitter = ref()
	onMounted(() => {
		const {
			$gsap
		} = useNuxtApp()
		const { characters, container } = splitter.value.elements
		$gsap.to(characters, {
			color: 'white',
			stagger: 0.1,
			// duration: 0.001,
			scrollTrigger: {
				trigger: container,
				start: "center center",
				end: "+=2000",
				scrub: true,
				pin: true,
				anticipatePin: 1
			}
		})
	})
</script>
<style lang="scss" scoped>
	#services-details-section {
		z-index: 2;
		position: relative;
		border-top: 1px solid rgba(255, 255, 255, 0.189);
		padding: 60px 0 0;

		&::before {
			content: '';
			display: table;
			clear: both;
			height: 0;
		}
	}

	.container {
		width: 100%;

		&.what-we-offer {
			margin-top: 140px;
		}

		.row {
			margin: -10px;
			display: flex;
			flex-wrap: wrap;

			.col {
				padding: 10px;

				&.left {
					width: 40%;
				}

				&.right {
					width: 60%;
				}
			}
		}
	}

	.subtitle {
		margin: 0;
		font-size: 33px;
		font-weight: 600;
		font-family: 'Newyork';
	}

	.content {
		margin: 0;
		font-size: 33px;
		line-height: 54px;
		font-weight: 400;
		max-width: 90%;
	}

	.we-offer-text {
		font-size: 91px;
		line-height: 113px;
		text-align: center;
		font-weight: 400;
		margin: 40vh 0 40vh;
		color: rgba(255, 255, 255, 0.15);
	}
</style>