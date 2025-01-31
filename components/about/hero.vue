<template>
	<section id="about-section-hero">
		<div class="layout-box noverflow">
			<!-- <animation-rise :delay="0"> -->
			<h1 class="ash-title">
				We love creating <strong>magic</strong> -
				The primary reason we do what we do is because bringing a concept to life to us is like creating
				magic.
				We love the idea of taking people out of their normal day-to-day lives, and for a few hours giving
				them
				something that is emotional, spectacular and makes them say "wow".
			</h1>
			<!-- </animation-rise> -->
			<!-- <animation-rise :delay="0.2"> -->
			<p class="ash-text">
				Unlocking creative horizons: The story behind CPI BUSINESS® – a global digital agency crafting
				experiences,
				building dreams, and shaping success.
			</p>
			<!-- </animation-rise> -->
			<!-- <animation-rise :delay="0.3"> -->
			<div class="call-to-action-btn-container">
				<button-sq
					text="Our Work"
					class="btn-hero-action wide"
					@click.prevent="$router.push('/portfolio')"
				/>
				<button-sq
					text="Our Capabilities"
					class="btn-hero-action wide"
					:blue="true"
					@click.prevent="$router.push('/services')"
				/>
			</div>
			<!-- </animation-rise> -->
		</div>
	</section>
</template>

<script setup>
const appStore = useAppStore()

const revealDelay = computed(() => {
	return appStore.hasInitiated ? 0 : 3.2
})
</script>

<style lang="scss" scoped>
#about-section-hero {
	padding-top: 12vh;
	min-height: 100vh
}

.ash-title {
	text-align: center;
	font-size: 60px;
	line-height: 130%;
	font-weight: 400;
	text-transform: uppercase;
	margin: 100px auto 0;

	.bold {
		font-weight: 600
	}

	@include break(2150px) {
		font-size: 50px;
	}

	@include break(1920px) {
		font-size: 40px;
	}

	@include xl {
		font-size: 35px;
	}

	@include lg {
		font-size: 30px;
	}

	@include md {
		font-size: 25px;
	}

	@include sm {
		font-size: 20px;
	}
}

.ash-text {
	font-size: 25px;
	line-height: 33px;
	width: 60%;
	margin: 40px auto 70px;
	text-align: center;
	opacity: 0.5;

	@include lg {
		font-size: 23px;
	}

	@include md {
		font-size: 18px;
		line-height: 27px;
		width: 90%;
	}
}
</style>