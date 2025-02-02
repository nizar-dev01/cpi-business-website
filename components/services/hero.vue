<template>
	<section id="services-hero-section">
		<div
			class="services-banner-img-container"
			v-if="props.currentPage"
		>
			<img
				src="@/assets/images/snap/bg.jpg"
				alt="Background Image"
				class="sbic-bg"
			/>
			<img
				:src="props.currentPage.image"
				alt="Hero Image"
				class="sbic-fg"
				id="services-hero-img"
			/>
		</div>
		<div
			class="shr-text-slider"
			v-if="props.currentPage"
		>
			<div class="layout-box">
				<h2 class="hs-subtitle">
					{{ props.currentPage.text }}
				</h2>
			</div>
			<horizontal-text duration="100">
				<div class="h-slide-text white">
					<span>EVENTS</span> <span class="center-dot"></span>
					<span>CONTENT</span> <span class="center-dot"></span>
					<span>DIGITAL</span> <span class="center-dot"></span>
					<span>MEDIA</span> <span class="center-dot"></span>
					<span>EXPERIENCES</span> <span class="center-dot"></span>
				</div>
			</horizontal-text>
		</div>
		<div class="bottom-border-gradient"></div>
	</section>
</template>
<script setup>
const props = defineProps(['currentPage'])
onMounted(() => {
	const {
		$gsap: gsap
	} = useNuxtApp()

	gsap.to('#services-hero-section', {
		y: '20%',
		ease: 'none',
		scrollTrigger: {
			trigger: "#services-hero-section",
			start: "top top",
			end: "bottom top",
			scrub: 0.5,
		}
	})
})
</script>
<style lang="scss" scoped>
#services-hero-section {
	position: relative;
	height: 100svh;
	z-index: 1;

	@include sm {
		height: 70svh
	}
}

.services-banner-img-container {
	height: 100%;
	width: 100%;
	position: relative;

	.sbic-bg {
		display: block;
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}

	.sbic-fg {
		position: absolute;
		left: 50%;
		bottom: 0;
		height: 90%;
		width: auto;
		max-width: 100%;
		object-fit: cover;
		transform: translate(-50%, 0);
	}
}

.hs-subtitle {
	font-size: 2vw;
	max-width: 18vw;
	font-weight: 400;

	@include lg {
		font-size: 42px;
		max-width: 350px;
	}

	@include md {
		font-size: 30px;
	}

	@include sm {
		font-size: 28px;
		max-width: 90%;
	}
}

.services-hero-img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	display: block
}

.shr-text-slider {
	position: absolute;
	bottom: 5svh;
	left: 0;
	right: 0;
	width: 100%;
}

.bottom-border-gradient {
	z-index: 5;
	background-image: linear-gradient(to bottom, #00000003, #000000);
	width: 100%;
	height: 40svh;
	position: absolute;
	inset: auto 0% 0%;
}
</style>