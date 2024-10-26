<template>
	<section id="services-hero-section">
		<img
			src="@/assets/images/team.jpeg"
			alt="Hero Image"
			class="services-hero-img"
			id="services-hero-img"
		/>
		<div class="shr-text-slider">
			<div class="layout-box">
				<h2 class="hs-subtitle">
					Services
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

	onMounted(() => {
		const {
			$gsap: gsap
		} = useNuxtApp()

		gsap.to('#services-hero-section', {
			y: '35%',
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
		height: 120svh;
		z-index: 1;
	}

	.services-hero-img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		display: block
	}

	.shr-text-slider {
		position: absolute;
		bottom: 30svh;
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