<template>
	<main>
		<portfolio-hero />
		<portfolio-events-showcase />
		<portfolio-library-showcase />
	</main>
</template>
<script setup>
useHead({
	title: "CPI Business | Portfolio"
})

const tags = ref([
	{
		text: 'Show all',
		value: 'show-all',
		selected: true,
	},
	{
		text: 'Event Management',
		value: 'event-management',
		selected: false,
	},
	{
		text: 'Design & Branding',
		value: 'design-n-branding',
		selected: false,
	},
	{
		text: 'Consultancy Services',
		value: 'consultancy-services',
		selected: false,
	},
	{
		text: 'Content Creation',
		value: 'content-creation',
		selected: false,
	},
	{
		text: 'Digital Solution',
		value: 'digital-solution',
		selected: false,
	},
	{
		text: 'Bespoke Solutions',
		text: 'bespoke-solutions',
		selected: false,
	}
])

provide('tags', tags)
provide('filter-callbacks', [])
</script>
<style lang="scss"></style>