<template>
	<main
		v-if="event"
		class="portfolio-detail-page-main clearfix"
	>
		<portfolio-detail-hero
			:image="event?.detail?.hero_image"
			:title="event.title"
			:subtitle="event.subtitle"
		/>
		<portfolio-detail-info
			:paragraphs="event.detail.paragraphs"
			:key-highlights="event.detail.key_highlights"
		/>
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
</script>
<style lang="scss"></style>