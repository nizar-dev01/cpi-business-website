<template>
	<section id="index-section-hero">
		<div class="layout-box">
			<h1 class="hero-title hero-reveal-top">creativity <br> set in motion</h1>
			<h3 class="hero-subtitle hero-reveal-top">
				Welcome to the home of purpose-driven thinkers, ambition-led doers and imagination-fuelled dreamers.
			</h3>
			<div class="call-to-action-btn-container hero-reveal-top">
				<button-sq
					text="Our Work"
					class="btn-hero-action wide"
					@click.prevent="$router.push('/portfolio')"
				/>
				<button-sq
					text="Our Capabilities"
					class="btn-hero-action wide"
					:blue="true"
					@click.prevent="$router.push('/services/ip-creation')"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
const appStore = useAppStore()

let _animation = [];

onMounted(() => {
	// const {
	// 	$gsap
	// } = useNuxtApp()

	// const revealItems = $gsap.utils.toArray('.hero-reveal-top')
	// $gsap.set(
	// 	revealItems,
	// 	{
	// 		y: 150,
	// 		opacity: 0
	// 	}
	// )

	// const doRevealItems = () => {
	// 	_animation = $gsap.to(revealItems, {
	// 		y: 0,
	// 		duration: 1,
	// 		stagger: 0.3,
	// 		delay: 0,
	// 		opacity: 1
	// 	})
	// }

	// doRevealItems()
})

onBeforeUnmount(() => {
	if (_animation && _animation.kill) {
		_animation.kill()
	}
})
</script>

<style lang="scss" scoped>
section#index-section-hero {
	padding-top: 12vh;
	padding-bottom: 30px;
	border-top: 1px solid transparent;
}

h1.hero-title {
	font-family: 'Denton';
	font-weight: 500;
	font-size: 180px;
	color: white;
	text-align: center;
	margin: 100px 0 0;
	line-height: 100%;

	@include break(1250px) {
		font-size: 150px;
	}

	@include break(1050px) {
		font-size: 120px;
		margin-top: 100px;
	}

	@include break(830px) {
		font-size: 100px;
	}

	@include break(700px) {
		font-size: 80px;
	}

	@include break(570px) {
		font-size: 60px;
	}

	@include break(430px) {
		font-size: 50px;
	}
}

.hero-subtitle {
	font-family: Satoshi;
	font-size: 33px;
	font-weight: 400;
	line-height: 48px;
	text-align: center;
	color: white;
	margin: 20px auto 80px;
	max-width: 976px;

	// @include lg {
	// 	font-size: 40px;
	// 	margin-top: 10px;
	// 	line-height: 60px;
	// }

	// @include xmd {
	// 	font-size: 38px;
	// 	margin-top: 0;
	// }

	@include break(1050px) {
		font-size: 30px;
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;
		line-height: 40px;
	}

	@include sm {
		font-size: 20px;
		line-height: 30px;
	}
}
</style>