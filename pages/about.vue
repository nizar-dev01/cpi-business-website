<template>
	<main>
		<about-hero />
		<grow-dot-cover theme="light" />
		<about-intro-white />
		<grow-dot-cover theme="dark" />
		<about-achievements />
		<about-library-showcase />
	</main>
</template>
<script setup>
useHead({
	title: "CPI Business | About Us"
})

const updateKey = ref(0)
</script>
<style lang="scss"></style>