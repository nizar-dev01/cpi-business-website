<template>
	<section id="careers-hero-section">
		<div class="background-layer">
			<img
				src="@/assets/images/astro.png"
				alt="Image of an astronaut floating in space"
				class="crh-bg-img"
				ref="heroBgImg"
			/>
		</div>
		<div class="content-layer clearfix">
			<h1 class="hero-intro-text">
				Fresher <br>
				than your <br>
				last <br>
				Employer
			</h1>
			<hr class="section-divider">
			<div class="layout-box">
				<div class="container company-info-box">
					<div class="row">
						<div class="col left">
							<h2 class="subtitle">
								Company
							</h2>
						</div>
						<div class="col right">
							<p class="content">
								Our web experiences are based on coheret concepts individually tailored to the use case.
								Ourfocus varies: functionality,storyline, gamification, or other web experiences. Key in
								all our over
								80 projects: efficient user
								guidance, modern design, high-quality programming, and the cutting-edge
								web development tool Webflow.
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr class="section-divider">
		</div>
	</section>
</template>
<script setup>
	const heroBgImg = ref()
	onMounted(() => {
		const {
			$gsap: gsap
		} = useNuxtApp()

		const astronaut = heroBgImg.value
		gsap.to(
			astronaut,
			{
				yPercent: 12,
				scrollTrigger: {
					trigger: astronaut,
					start: "top top",
					end: "bottom top",
					scrub: 0.5,
				}
			}
		)
	})
</script>
<style lang="scss" scoped>
	#careers-hero-section {
		width: 100vw;
		height: auto;
		min-height: 200vh;
		overflow: hidden;
		position: relative;
		background: black;
	}

	.background-layer {
		height: 230vh;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1;
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.1) 50%, rgb(0, 0, 0) 100%);
			z-index: 2;
		}
	}

	.crh-bg-img {
		width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
		position: relative;
	}

	.content-layer {
		width: 100%;
		height: auto;
		position: relative;
		z-index: 2;

		.hero-intro-text {
			font-size: 8vw;
			text-align: center;
			font-family: 'Denton';
			margin-top: 50vh;
			text-transform: uppercase;
			line-height: 8vw;
		}
	}

	.company-info-box {
		margin-bottom: 400px;
	}
</style>