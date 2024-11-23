<template>
	<section id="index-section-hero">
		<div class="layout-box">
			<h1 class="hero-title hero-reveal-top">cpi business</h1>
			<h3 class="hero-subtitle hero-reveal-top">
				We are solution architects with multi-discipline capabilities including content creation, event design,
				production & execution, media services and digital platforms.
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

	const revealDelay = computed(() => {
		return appStore.hasInitiated ? 0 : 3.2
	})

	let _animation = [];

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
			_animation = $gsap.to(revealItems, {
				y: 0,
				duration: 1,
				stagger: 0.3,
				delay: revealDelay.value,
				opacity: 1
			})
		}

		doRevealItems()
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
		font-weight: 400;
		font-size: 104px;
		color: white;
		text-align: center;
		margin: 100px 0 0;
		line-height: 130px;

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
		font-size: 33px;
		font-weight: 400;
		line-height: 48px;
		text-align: center;
		color: white;
		margin: 30px auto 44px;
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

		@include md {
			font-size: 30px;
			max-width: 80%;
			margin-top: 30px;
			margin-left: auto;
			margin-right: auto;
			line-height: 40px;
		}

		@include sm {
			font-size: 25px;
			line-height: 35px;
		}
	}
</style>