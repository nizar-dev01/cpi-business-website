<template>
	<section
		id="portfolio-video-section"
		@mouseenter="enterManager"
		@mouseleave="leaveManager"
	>
		<div class="video-frame-container">
			<iframe
				src="https://player.vimeo.com/video/1045605283?h=64457d8173"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
				style="position:absolute;top:0;left:0;width:100%;height:100%;"
			></iframe>
		</div>
	</section>
</template>
<script setup>

onMounted(() => {
	const { $ScrollTrigger } = useNuxtApp()
	const appStore = useAppStore()
	const enterManager = () => {
		appStore.setCursorState("hidden")
	}
	const leaveManager = () => {
		appStore.setCursorState()
	}
	$ScrollTrigger.create({
		trigger: "#portfolio-video-section",
		start: "top bottom",
		end: "bottom top",
		onEnter: enterManager,
		onEnterBack: enterManager,
		onLeave: leaveManager,
		onLeaveBack: leaveManager,
	})
})
</script>
<style lang="scss">
#portfolio-video-section {
	// min-height: 100vh;
	background: black;
}

.portfolio-detail-image {
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
}

.video-frame-container {
	padding: 56.25% 0 0 0;
	position: relative;
	width: 100%;
	height: auto
}
</style>