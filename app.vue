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
	const showWelcome = ref(true)
	const loaderContainer = ref(null)
	const welcomeTitle = ref(null)
	onMounted(() => {
		const {
			$gsap: gsap,
			$lenis: lenis
		} = useNuxtApp()

		// gsap.to(window, {
		// 	scrollTo: {
		// 		y: 0,
		// 		autoKill: true
		// 	},
		// 	duration: 0
		// })

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
	@import url(./assets/style/common.scss);
	@import 'lenis/dist/lenis.css';

	.loader {
		height: 100vh;
		width: 100vw;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: black;

		.welcome-title {
			color: white;
			text-align: center;
			margin: 0;
			font-size: 100px;
		}
	}

	html,
	body {
		margin: 0;
		padding: 0;
		background: #1B1B1B;
		font-family: 'Satoshi';
		color: white;
		// To Be Removed
		overflow-x: hidden;
		// scroll-behavior: smooth;
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

	.flex-col {
		display: flex;
		flex-direction: column;
	}
</style>
