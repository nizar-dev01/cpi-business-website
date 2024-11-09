<template>
	<main
		v-if="event"
		class="portfolio-detail-page-main clearfix"
	>
		<div class="layout-box">
			<img
				:src="event.image"
				alt=""
			>
		</div>
	</main>
</template>
<script setup>
	const route = useRoute()
	const slug = route.params.slug

	const dataStore = useDataStore()
	const event = dataStore.getEvent(slug)
	onMounted(() => {
		console.log("The slug is : ", slug)
	})
</script>
<style lang="scss">
	.portfolio-detail-page-main {
		margin-top: 200px;
	}
</style>