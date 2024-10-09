<template>
	<section id="section-hero">
		<div class="layout-box noverflow">
			<h1 class="hero-title hero-reveal-top">cpi business</h1>
			<h3 class="hero-subtitle hero-reveal-top">
				Value-driven Ideas / Impactful Experiences / Focused Strategies
			</h3>
			<div class="hero-call-to-actions hero-reveal-top">
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
		</div>
	</section>
</template>

<script setup>

	onMounted(() => {
		const {
			$gsap
		} = useNuxtApp()

		const revealItems = $gsap.utils.toArray('.hero-reveal-top')
		$gsap.set(
			revealItems,
			{
				y: 150,
				opacity: 0
			}
		)

		const doRevealItems = () => {
			$gsap.to(revealItems, {
				y: 0,
				duration: 1,
				stagger: 0.3,
				delay: 3.2,
				opacity: 1
			})
		}

		doRevealItems()
	})
</script>

<style lang="scss" scoped>
	section#section-hero {
		padding-bottom: 200px;
		border-top: 1px solid transparent;
	}

	h1.hero-title {
		font-family: 'Newyork';
		font-weight: 674;
		font-size: 166px;
		color: white;
		text-align: center;
		margin: 197px 0 0;
		line-height: 198px;

		@include lg {
			font-size: 140px;
		}

		@include xmd {
			font-size: 120px;
			margin-top: 100px;
		}

		@include md {
			font-size: 80px;
			line-height: 90px;
		}
	}

	.hero-subtitle {
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 400;
		line-height: 71.55px;
		text-align: center;
		color: white;
		margin: 50px 0 84px;

		@include lg {
			font-size: 40px;
			margin-top: 10px;
			line-height: 60px;
		}

		@include xmd {
			font-size: 38px;
			margin-top: 0;
		}

		@include md {
			font-size: 30px;
			max-width: 80%;
			margin-top: 30px;
			margin-left: auto;
			margin-right: auto;
			line-height: 45px;
		}
	}

	.hero-call-to-actions {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: -10px;

		.btn-hero-action {
			margin: 10px
		}
	}
</style>