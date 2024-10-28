<template>
	<section id="services-hero-section">
		<div class="services-banner-img-container">
			<img
				src="@/assets/images/snap/bg.jpg"
				alt="Background Image"
				class="sbic-bg"
			/>
			<img
				:src="current_page_target.image"
				alt="Hero Image"
				class="sbic-fg"
				id="services-hero-img"
			/>

		</div>
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
	const available_services = [
		{
			uid: "ip-creation",
			image: "/img/services/bespoke.png"
		},
		{
			uid: "event-production",
			image: "/img/services/events.png"
		},
		{
			uid: "concept-development",
			image: "/img/services/consultancy.png"
		},
		{
			uid: "content-creation",
			image: "/img/services/content.png"
		},
		{
			uid: "design-n-branding",
			image: "/img/services/design.png"
		},
		{
			uid: "digital-solutions",
			image: "/img/services/digital.png"
		}
	]
	const route = useRoute()

	const current_page_target = ref(
		available_services.find(el => el.uid === route.params.service) ||
		available_services[0]
	)

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
			height: 90vh;
			width: auto;
			transform: translate(-50%, 0);
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