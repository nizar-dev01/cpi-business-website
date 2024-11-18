<template>
	<section id="about-intro-white">
		<horizontal-text duration="100">
			<div class="h-slide-text">
				<span>EVENTS</span> <span class="center-dot"></span>
				<span>CONTENT</span> <span class="center-dot"></span>
				<span>DIGITAL</span> <span class="center-dot"></span>
				<span>MEDIA</span> <span class="center-dot"></span>
				<span>EXPERIENCES</span> <span class="center-dot"></span>
			</div>
		</horizontal-text>

		<div class="layout-box">
			<div class="hightlight-text-container">
				<h2 class="hightlight-text">
					<span>we offer a diverse range of capabilities,</span>&nbsp;
					<span>from content creation to event design,</span>&nbsp;
					<span>and everything in between</span>
				</h2>
			</div>
		</div>

		<div class="team-image-container">
			<img
				src="@/assets/images/team.jpeg"
				alt="CPI Team"
				class="team-image"
			/>
		</div>

		<div class="layout-box">
			<div class="hightlight-text-container">
				<h2 class="hightlight-text">
					<span>Since 2016, we have proudly led project</span>&nbsp;
					<span>executions for prominent entities such as</span>&nbsp;
					<span>ADGM, ADIO, e& UAE, ADQ,</span>&nbsp;
					<span>Cigna,and more.</span>
				</h2>
			</div>
			<brands-tiles />
		</div>
	</section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	section#about-intro-white {
		background: white;
	}

	.hightlight-text-container {
		margin: 130px 0;

		.hightlight-text {
			color: black;
			font-family: Satoshi;
			font-size: 62px;
			font-weight: 400;
			line-height: 93px;
			text-align: center;
			max-width: 1100px;
			width: 100%;
			margin: 0 auto;

			@include lg {
				font-size: 40px;
				line-height: 52px;
			}

			@include sm {
				font-size: 32px;
				line-height: 40px;
			}
		}
	}

	.team-image-container {
		width: 100%;
		overflow: hidden;

		.team-image {
			width: 100%;
			height: auto;
			object-fit: cover;
			display: block;
			max-height: 1670px;
		}
	}
</style>