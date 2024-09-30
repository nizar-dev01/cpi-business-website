<template>
	<section id="section-hero">
		<div class="layout-box">
			<h1 class="hero-title">cpi business</h1>
			<h3 class="hero-subtitle">
				<span
					class="subtitle-letter text-block"
					v-for="letter in sentenceList"
				>
					{{ letter }}
				</span>
			</h3>
			<div class="hero-call-to-actions">
				<button class="btn-sq">
					<span class="bt-text">
						Our Work
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
				<button class="btn-sq blue">
					<span class="bt-text">
						Our Capabilities
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
	<index-about-brief />
	<client-only>
		<index-sphere-canvas />
	</client-only>
</template>
<script setup>
	onMounted(() => {
		// const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
		// gsap.from('.subtitle-letter.text-block', {
		// 	y: 20,
		// 	stagger: 1,
		// 	duration: 0.5
		// })
	})
	// onBeforeMount(() => {
	// 	window.scrollTo(0, 0)
	// })
	const sentenceList = "Value-driven Ideas / Impactful Experiences / Focused Strategies".split("")
</script>
<style lang="scss">

	// Common
	.layout-box {
		width: 97%;
		max-width: 1569px;
		margin: 0 auto;
	}

	// /Common
	section#section-hero {
		min-height: 100vh;
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

	.btn-sq {
		width: 338px;
		height: 61px;
		border: none;
		border-radius: 5px;
		background: #3D3D3D;
		font-size: 20px;
		color: white;
		font-family: 'Metropolis';
		font-weight: 400;
		margin: 0 18px;
		cursor: pointer;

		&.blue {
			background: #054BF9;
		}

		.bt-text {
			margin-right: 13px;
		}
	}

	.hero-call-to-actions {
		display: flex;
		justify-content: center;
	}

	.text-block {
		display: inline-block;
	}
</style>