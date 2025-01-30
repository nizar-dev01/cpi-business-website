import { useDataStore } from "@/stores/data.store"

const delay = ms => new Promise(res => setTimeout(res, ms));

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.client) {
		const dataStore = useDataStore()
		const nextPageName = to.name
		const loadNext = dataStore.pages[nextPageName]
		if (loadNext) {
			dataStore.loadPage(nextPageName)
			await delay(1000)
		}
	}
})