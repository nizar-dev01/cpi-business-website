<template>
	<main>
		<about-hero />
		<grow-dot-cover theme="light" />
		<about-intro-white @img-ready="setShowDarkDot" />
		<grow-dot-cover
			v-if="showDarkDot"
			theme="dark"
		/>
		<about-achievements :key="showAchievements" />
		<about-library-showcase />
	</main>
</template>
<script setup>
useHead({
	title: "CPI Business | About Us"
})

const showDarkDot = ref(false)
const showAchievements = ref(0)

const setShowDarkDot = () => {
	setTimeout(() => {
		showDarkDot.value = true
	}, 800)
	setTimeout(() => {
		showAchievements.value += 1
	}, 800 * 2)
}
</script>
<style lang="scss"></style>