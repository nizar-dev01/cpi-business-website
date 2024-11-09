<template>
	<section id="portfolio-image-slider-section">
		<img
			src="@/assets/images/portfolio-detail-static.png"
			alt="Image"
			class="portfolio-detail-image"
		/>
	</section>
</template>
<script setup>
</script>
<style lang="scss">
	#portfolio-image-slider-section {
		width: 100vw;
		height: 100vh;
	}

	.portfolio-detail-image {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
</style>