<template>
	<section id="careers-hero-section">
		<div class="background-layer">
			<img
				src="/img/astro.webp"
				alt="Image of an astronaut floating in space"
				class="crh-bg-img"
				ref="heroBgImg"
				@load="initAnimation"
			/>
		</div>
		<div class="content-layer clearfix">
			<div class="hero-content">
				<h1 class="hero-intro-text">
					Fresher <br>
					than your <br>
					last <br>
					Employer
				</h1>
			</div>
			<hr class="section-divider">
			<div class="layout-box">
				<div class="container company-info-box">
					<div class="row">
						<div class="col left">
							<h2 class="subtitle">
								Company
							</h2>
						</div>
						<div class="col right sm-mt-30">
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
const {
	$gsap: gsap
} = useNuxtApp()

const initAnimation = () => {
	setTimeout(() => {
		const astronaut = heroBgImg.value
		gsap.to(
			astronaut,
			{
				yPercent: -15,
				scrollTrigger: {
					trigger: astronaut,
					start: "top top",
					end: "bottom top",
					scrub: 0.5,
				}
			}
		)
	}, 100)
}
onMounted(() => {

	// This needs to be fixed!
	// The timeout is set because the animation was not getting initiated when the page reloads directly
})
</script>
<style lang="scss" scoped>
#careers-hero-section {
	width: 100vw;
	height: auto;
	min-height: 350vh;
	overflow: hidden;
	position: relative;
	background: black;

	@include xl {
		min-height: 200vh;
	}

	@include lg {
		min-height: 200vh;
	}

	@include md {
		min-height: 100vh;
	}
}

.background-layer {
	height: 315vh;
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
		height: 50%;
		background: linear-gradient(180deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 50%);
		z-index: 2;

		@include xl {
			// display: none;
			background: rgba(0, 0, 0, 0.5);
			height: 100%;
		}
	}

	@include md {
		height: 200vh;
	}
}

.crh-bg-img {
	width: 100%;
	height: auto;
	object-fit: cover;
	display: block;
	position: relative;

	@include md {
		height: 100%;
	}
}

.content-layer {
	width: 100%;
	height: auto;
	position: relative;
	z-index: 2;

	.hero-content {
		height: 180vh;

		@include xxl {
			height: 150vh;
		}

		@include xl {
			height: 100vh;
		}

		@include lg {
			height: 80vh;
		}

		@include xmd {
			height: 40vh;
		}

		@include md {
			height: auto;
		}
	}

	.hero-intro-text {
		font-size: max(8vw, 8vh);
		text-align: center;
		font-family: 'Denton';
		margin-top: 50vh;
		text-transform: uppercase;
		line-height: 100%;

		@include lg {
			color: red;
			margin-top: 30vh;
			margin-bottom: 10vh;
		}
	}
}

.company-info-box {
	margin-bottom: 400px;

	@include md {
		margin-bottom: 200px;
	}
}

.sm-mt-30 {
	@include md {
		margin-top: 30px;
	}
}
</style>