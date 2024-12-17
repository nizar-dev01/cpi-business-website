<template>
	<main
		v-if="event"
		class="portfolio-detail-page-main clearfix"
	>
		<portfolio-detail-hero :image="event.image" />
		<portfolio-detail-info />
		<portfolio-detail-images />
	</main>
</template>
<script setup>
	const route = useRoute()
	const slug = route.params.slug

	const dataStore = useDataStore()
	const event = dataStore.getEvent(slug)
</script>
<style lang="scss"></style>