<template>
	<section class="portfolio-detail-hero-section">
		<img
			:src="props.image"
			alt="Image"
			class="portfolio-detail-bg"
			ref="backgroundImage"
		/>
		<div class="pd-content-layer">
			<div class="layout-box">
				<h2 class="pd-subtitle">
					{{ props.subtitle }}
				</h2>
				<h1 class="pd-title">
					{{ props.title }}
				</h1>
			</div>
		</div>
	</section>
</template>
<script setup>
const props = defineProps(['image', 'title', 'subtitle'])
const backgroundImage = ref()
onMounted(() => {
	const {
		$gsap: gsap
	} = useNuxtApp()

	const bgim = backgroundImage.value
	gsap.to(bgim, {
		yPercent: 35,
		scrollTrigger: {
			trigger: bgim,
			start: "top top",
			end: "bottom top",
			scrub: true
		}
	})
})
</script>
<style lang="scss" scoped>
.portfolio-detail-hero-section {
	position: relative;
	height: 150vh;
	overflow: hidden;
}

.portfolio-detail-bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 1;
}

.pd-content-layer {
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	height: 100%;
}

$title-mx: 1200px;

.pd-subtitle {
	color: white;
	opacity: 0.7;
	font-size: 70px;
	font-weight: 600;
	margin: 0 0 17px;
	max-width: $title-mx;

	@include lg {
		font-size: 50px;
	}

	@include md {
		font-size: 40px;
		line-height: 100%;
	}

	@include sm {
		font-size: 30px;
	}
}

.pd-title {
	color: white;
	font-size: 100px;
	line-height: 100px;
	font-weight: 800;
	margin: 0 0 60vh;
	max-width: $title-mx;

	@include lg {
		font-size: 70px;
		line-height: 100%;
	}

	@include md {
		font-size: 50px;
		line-height: 125%;
		margin: 0 0 70vh;
	}

	@include sm {
		font-size: 40px;
		line-height: 120%;
	}
}
</style>