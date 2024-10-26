<template>
	<client-only>
		<app-loader />
		<nuxt-layout>
			<nuxt-page></nuxt-page>
		</nuxt-layout>
	</client-only>
</template>
<style lang="scss">
	@use './assets/style/index.scss';

	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}

	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
