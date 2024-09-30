<template>
	<nuxt-layout>
		<nuxt-page></nuxt-page>
	</nuxt-layout>
</template>
<script setup>
	import LocomotiveScroll from 'locomotive-scroll';
	if (import.meta.client) {

		const locomotiveScroll = new LocomotiveScroll();
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
