<template>
	<div
		class="loader flex-center"
		ref="loaderContainer"
		v-if="showWelcome"
	>
		<h1
			class="welcome-title"
			ref="welcomeTitle"
		>WELCOME</h1>
	</div>
	<nuxt-layout>
		<nuxt-page></nuxt-page>
	</nuxt-layout>
</template>
<script setup>
	const showWelcome = ref(true)
	const loaderContainer = ref(null)
	const welcomeTitle = ref(null)

	const isLayoutReady = ref(false)

	onMounted(() => {
		const {
			$gsap: gsap,
			$ScrollTrigger
		} = useNuxtApp()

		window.scrollTo(0, 0)

		setTimeout(() => {
			gsap.to(loaderContainer.value, {
				opacity: 0,
				duration: 1.5,
				onComplete () {
					showWelcome.value = false
				}
			})
		}, 1000)

		setTimeout(() => {
			isLayoutReady.value = true
		}, 0)
	})
</script>
<style lang="scss">
	@import url(./assets/style/index.scss);
</style>
