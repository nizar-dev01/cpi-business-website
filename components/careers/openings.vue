<template>
	<section id="careers-openings-section">
		<div class="background-layer">
			<img
				src="@/assets/images/astronaut-resting.jpeg"
				alt=""
			>
		</div>
		<div class="content-layer">
			<div class="layout-box">
				<h2 class="subtitle">
					Company
				</h2>
			</div>
			<h2 class="opening-intro-title">
				<span class="main">CULTURE</span>
				<span class="aside">
					Via
				</span>
				<span class="main stroke">
					COMPRAMISE
				</span>
			</h2>
			<hr class="section-divider">
		</div>
	</section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
	#careers-openings-section {
		min-height: 100vh;
		position: relative;
	}

	.background-layer {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 80vh;
		z-index: 1;

		&::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgb(0, 0, 0) 5%, transparent 50%);
			z-index: 2;
		}

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.content-layer {
		position: relative;
		z-index: 2;
	}

	.opening-intro-title {
		width: 95%;
		margin: 100px auto;
		text-align: center;
		font-size: 10vw;
		font-family: 'Newyork';
		line-height: 8vw;
		font-weight: 600;

		.aside {
			width: 100%;
			display: inline-block;
			font-size: 3vw;
			font-family: Satoshi;
			font-weight: 400;
		}

		span.stroke {
			color: transparent !important;
			-webkit-text-stroke: 1px $yellow;
		}
	}
</style>