<template>
	<section id="section-hero">
		<div class="layout-box">
			<h1 class="hero-title hero-reveal-top">cpi business</h1>
			<h3 class="hero-subtitle hero-reveal-top">
				<span
					class="subtitle-letter text-block"
					v-for="letter in sentenceList"
				>
					{{ letter }}
				</span>
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
	const sentenceList = "Value-driven Ideas / Impactful Experiences / Focused Strategies".split("")

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
		// min-height: 100vh;
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
		line-height: 198.1px;

	}

	.hero-subtitle {
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 400;
		line-height: 71.55px;
		text-align: center;
		color: white;
		margin: 50px 0 84px;
	}

	.hero-call-to-actions {
		display: flex;
		justify-content: center;
	}
</style>