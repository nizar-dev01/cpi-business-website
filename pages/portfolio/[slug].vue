<template>
	<main
		v-if="event && isEventReady"
		class="portfolio-detail-page-main clearfix"
	>
		<portfolio-detail-hero
			:image="event?.bg_image"
			:title="event.title"
			:subtitle="event.subtitle"
		/>
		<portfolio-detail-info
			:paragraphs="event.detail.paragraphs"
			:key-highlights="event.detail.key_highlights"
		/>
		<portfolio-detail-video
			v-if="event.video"
			:url="event.video"
		/>
		<portfolio-detail-others />
	</main>
</template>
<script setup>
const route = useRoute()
const slug = route.params.slug

const dataStore = useDataStore()


const isEventReady = ref(false)
const event = ref(null)
dataStore.getEvent(slug)
	.then(data => {
		event.value = data
		isEventReady.value = true
	}).catch(e => {
		console.error(e)
	})

// Show the next and previous 2 items in the "Other Events" section
const eventFilter = () => {
	const next1 = dataStore.getNextEvent(slug)
	const next2 = dataStore.getNextEvent(next1.slug)
	const prev1 = dataStore.getPrevEvent(slug)
	const prev2 = dataStore.getPrevEvent(prev1.slug)
	return [prev2, prev1, next1, next2]
}
provide('event-list-filter-function', eventFilter)
</script>