<template>
	<nuxt-layout>
		<nuxt-page></nuxt-page>
	</nuxt-layout>
</template>
<script setup>
	import Lenis from 'lenis'

	if (import.meta.client) {
		const lenis = new Lenis()

		// lenis.on('scroll', (e) => {
		// 	console.log(e)
		// })

		function raf (time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}
</script>
<style lang="scss">
	@import url(./assets/style/common.scss);

	html,
	body {
		margin: 0;
		padding: 0;
		background: #1B1B1B;
		font-family: 'Satoshi';
		color: white;
		// To Be Removed
		overflow-x: hidden;
	}

	.strip-list {
		list-style: none;
		padding: 0;

		a {
			text-decoration: none;
			color: inherit;
		}
	}

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
