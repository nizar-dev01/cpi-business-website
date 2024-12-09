<template>
	<client-only :key="appKey">
		<app-loader />
		<nuxt-layout>
			<nuxt-page></nuxt-page>
		</nuxt-layout>
	</client-only>
</template>
<script setup>
	useHead({
		meta: [{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
		}]
	})

	const appKey = ref(0)

	// onMounted(() => {
	// 	window.addEventListener('resize', () => {
	// 		appKey.value++
	// 	})
	// })
</script>
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
