<template>
	<div>
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
	</div>
</template>
<script setup>
	const showWelcome = ref(false)
	const loaderContainer = ref(null)
	const welcomeTitle = ref(null)
	onMounted(() => {
		const {
			$gsap: gsap,
			$lenis: lenis
		} = useNuxtApp()

		gsap.to(window, {
			scrollTo: {
				y: 0,
				duration: 0
			}
		})

		setTimeout(() => {
			gsap.to(loaderContainer.value, {
				opacity: 0,
				duration: 1.5,
				onComplete () {
					showWelcome.value = false
				}
			})
		}, 1000)
	})
</script>
<style lang="scss">
	@import url(./assets/style/index.scss);
</style>
