<template>
	<section id="about-section-hero">
		<div class="layout-box noverflow">
			<animation-rise :delay="revealDelay">
				<h1 class="ash-title">
					We are
					<span class="bold">
						CPI Business®
					</span> -
					Product
					&amp; brand Design Agency based in Somewhereland
				</h1>
			</animation-rise>
			<animation-rise :delay="revealDelay + 0.2">
				<p class="ash-text">
					Unlocking creative horizons: The story behind CPI BUSINESS® – a global digital agency crafting
					experiences,
					building dreams, and shaping success.
				</p>
			</animation-rise>
			<animation-rise :delay="revealDelay + 0.3">
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
			</animation-rise>
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
		font-size: 88px;
		font-weight: 400;
		text-transform: uppercase;
		margin: 100px auto 0;
		line-height: 119px;

		.bold {
			font-weight: 600
		}

		@include xl {
			font-size: 70px;
			line-height: 90px;
		}

		@include lg {
			font-size: 60px;
			line-height: 78px;
		}

		@include md {
			font-size: 40px;
			line-height: 55px;
		}

		@include sm {
			font-size: 30px;
			line-height: 40px;
		}
	}

	.ash-text {
		font-size: 25px;
		line-height: 33px;
		width: 60%;
		margin: 40px auto 70px;
		text-align: center;
		opacity: 0.5;

		@include md {
			font-size: 18px;
			line-height: 27px;
			width: 90%;
		}
	}
</style>