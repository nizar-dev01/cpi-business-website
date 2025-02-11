import { useDataStore } from "@/stores/data.store"

const delay = ms => new Promise(res => setTimeout(res, ms));

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.client) {
		const dataStore = useDataStore()
		const nextPageName = to.name
		const loadNext = dataStore.pages[nextPageName]

		try {
			// Add event image to the loading targets
			if (to.name === 'portfolio-slug' && dataStore.event_list) {
				// Get the slug
				const slug = to.params.slug
				// Get the event details
				const nextEvent = dataStore.findEvent(slug)
				// Get the image URL (hero image in the detail page)
				const bgi = nextEvent?.bg_image
				// Add it to the loading target images
				if (bgi && !loadNext.images.includes(bgi)) {
					loadNext.images.push(bgi)
				}
			} else if (to.name === 'blog-slug' && dataStore.blog_list) {
				// Get the slug
				const slug = to.params.slug
				// Get the blog details
				const nextBlog = dataStore.blog_list.find(bl => bl.slug === slug)
				// Get the image URL (hero image in the detail page)
				const bgi = nextBlog.image
				// Add it to the loading target images
				if (bgi && !loadNext.images.includes(bgi)) {
					loadNext.images.push(bgi)
				}
			}
		} catch (error) {
			console.error(error)
		}

		if (loadNext) {
			dataStore.loadPage(nextPageName)
			await delay(1000)
		}
	}
})