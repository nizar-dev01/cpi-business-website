<template>
	<horizontal-text duration="50">
		<div class="h-slide-text">
			<span>EVENTS</span> <span class="center-dot"></span>
			<span>CONTENT</span> <span class="center-dot"></span>
			<span>DIGITAL</span> <span class="center-dot"></span>
			<span>MEDIA</span> <span class="center-dot"></span>
			<span>EXPERIENCES</span> <span class="center-dot"></span>
		</div>
	</horizontal-text>
</template>
<script setup>
</script>
<style lang="scss" scoped>
	$text-color: white;
	$dot-radius: 2vw;

	.h-slide-text {
		font-size: 10vw;
		font-weight: 500;
		color: $text-color;
		font-family: 'Metropolis';
		display: inline-block;

		span {
			margin: 0 100px;
			line-height: 100px;

			&.center-dot {
				position: relative;

				&::after {
					content: '';
					display: block;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					height: $dot-radius;
					width: $dot-radius;
					background: $text-color;
					border-radius: 45%;
				}
			}
		}
	}
</style>