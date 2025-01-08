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

	const next = dataStore.getNextEvent(slug)
	const prev = dataStore.getPrevEvent(slug)


	onMounted(() => {


		console.log({next, prev})


	})
</script>
<style lang="scss"></style>