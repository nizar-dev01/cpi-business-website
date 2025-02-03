<template>
	<main>
		<about-hero />
		<grow-dot-cover theme="light" />
		<about-intro-white @img-ready="setShowDarkDot" />
		<grow-dot-cover
			v-if="showDarkDot"
			theme="dark"
		/>
		<about-achievements />
		<about-library-showcase />
	</main>
</template>
<script setup>
useHead({
	title: "CPI Business | About Us"
})

const showDarkDot = ref(false)

const setShowDarkDot = () => {
	setTimeout(() => {
		showDarkDot.value = true
	}, 800)
}
</script>
<style lang="scss"></style>