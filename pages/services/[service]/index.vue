<template>
	<main id="services-page">
		<services-hero :current-page="currentPage" />
		<services-details />
		<index-events-showcase :show-view-more="true" />
		<services-others
			:services="services"
			:current-page="currentPage"
		/>
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

// const appStore = useAppStore()
// onBeforeRouteLeave((to, from) => {
// 	if (to.name !== "index") {
// 		appStore.setPageScrollPosition('index', 0)
// 		appStore.setActiveSliderIndex(0)
// 	}
// })

const services = [
	{
		uid: "ip-creation",
		image: "/img/services/bespoke.png",
		text: 'IP Creation & Strategic Thinking'
	},
	{
		uid: "event-production",
		image: "/img/services/events.png",
		text: 'Event Production'
	},
	{
		uid: "concept-development",
		image: "/img/services/consultancy.png",
		text: 'Concept Development & Management'
	},
	{
		uid: "content-creation",
		image: "/img/services/content.png",
		text: 'Content Creation'
	},
	{
		uid: "design-n-branding",
		image: "/img/services/design.png",
		text: 'Design & Branding'
	},
	{
		uid: "digital-solutions",
		image: "/img/services/digital.png",
		text: 'Digital Solutions'
	}
]

const route = useRoute()

const currentPage = ref(
	services.find(el => el.uid === route.params.service) ||
	services[0]
)

definePageMeta({
	pageLayout: "plain"
})
</script>
<style lang="scss" scoped>
#services-page {
	background: black;
}
</style>