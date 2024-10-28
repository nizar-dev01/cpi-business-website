<template>
	<main id="services-page">
		<services-hero />
		<services-details />
		<index-events-showcase :show-view-more="true" />
		<services-others />
		<services-library-showcase />
	</main>
</template>
<script setup>
	useHead({
		title: "CPI Business | Services",
		meta: {
			layout: "plain"
		}
	})

	definePageMeta({
		pageLayout: "plain"
	})
</script>
<style lang="scss" scoped>
	#services-page {
		background: black;
	}
</style>