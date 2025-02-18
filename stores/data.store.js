import {
	defineStore
} from 'pinia'

import sphere_images from "@/assets/images"

const service_images = [
	"/img/services/bespoke.webp",
	"/img/services/consultancy-full.webp",
	"/img/services/content.webp",
	"/img/services/design.webp",
	"/img/services/digital.webp",
	"/img/services/events.webp",
]

export const useDataStore = defineStore('data', {
	state: () => ({
		event_list: null,
		blog_list: null,
		pages: {
			index: {
				images: [
					...sphere_images,
					...service_images
				]
			},
			contact: {
				images: [
					"/img/contact-img.webp",
					...service_images
				]
			},
			portfolio: {
				images: [
					...service_images,
					"/img/portfolios/ADFW23.webp",
					"/img/portfolios/ADFW24.webp",
					"/img/portfolios/ADGM.webp",
					"/img/portfolios/AGWA.webp",
					"/img/portfolios/ahlan modi.webp",
					"/img/portfolios/CBUAE.webp",
					"/img/portfolios/e& Suhoor.webp",
					"/img/portfolios/hub71.webp",
					"/img/portfolios/i2u2.webp",
					"/img/portfolios/One miral.webp",
					"/img/portfolios/resolve.webp",
					"/img/portfolios/sam altman.webp",
					"/img/portfolios/SAVI.webp",
					"/img/portfolios/SIFF.webp",
					"/img/portfolios/SMB Awards 2024.webp",
					"/img/portfolios/etisalat.webp",
				]
			},
			careers: {
				images: [
					...service_images,
					'/img/astro.webp'
				]
			},
			about: {
				images: [
					...service_images,
					"/img/testimonials/Hub71.webp",
					"/img/testimonials/e&.webp",
					"/img/testimonials/ADGM.webp",
					"/img/team.webp"
				]
			},
			blog: {
				images: [
					...service_images,
				]
			},
			'blog-slug': {
				images: [
					...service_images,
				]
			},
			'portfolio-slug': {
				images: [
					...service_images,
				]
			},
			'services-service': {
				images: [
					...service_images,
				]
			}
		},
		isDataLoading: false,
		pageLoading: null,
		blogLoading: true,
		eventsLoading: true,
		promiseHandlers: {
			blog: null,
			event: null
		}
	}),
	actions: {
		findEvent (slug) {
			const event = this.event_list.find(ev => ev.slug === slug)
			return event || null
		},
		getNextEvent (slug) {
			// This function assumes the event_list has already been loaded
			const event = this.findEvent(slug)
			const index = this.event_list.indexOf(event) + 1

			if (index >= this.event_list.length) {
				return this.event_list[0]
			} else {
				return this.event_list[index]
			}
		},
		getEvent (slug) {
			return new Promise((resolve, reject) => {
				if (this.eventsLoading) {
					this.promiseHandlers.event = { resolve, reject, slug }
				} else {
					const event = this.findEvent(slug)
					resolve(event || null)
				}
			})
		},
		getPrevEvent (slug) {
			const event = this.findEvent(slug)
			const index = this.event_list.indexOf(event) - 1

			if (index < 0) {
				return this.event_list[this.event_list.length - 1]
			} else {
				return this.event_list[index]
			}
		},
		findBlog (slug) {
			return this.blog_list.find(bl => bl.slug === slug)
		},
		getBlog (slug) {
			return new Promise((resolve, reject) => {
				if (this.blogLoading) {
					this.promiseHandlers.blog = { resolve, reject, slug }
				} else {
					const blog = this.findBlog(slug)
					resolve(blog || null)
				}
			})
		},
		loadPage (_page) {
			const page = this.pages[_page]
			if (page) {
				this.isDataLoading = true
				this.pageLoading = _page
			}
			else {
				this.isDataLoading = false
				this.pageLoading = null
			}
		},
		fetchData () {
			this.blogLoading = true
			this.eventsLoading = true

			// Load blog
			useFetch("/blog.json")
				.then(res => res.data.value)
				.then(async (data) => {
					this.blog_list = data
					const blogHandler = this.promiseHandlers.blog
					if (blogHandler) {
						const resolver = blogHandler.resolve
						const slug = blogHandler.slug
						const blog = this.findBlog(slug)
						resolver(blog)
					}
				})
				.finally(() => this.blogLoading = false)

			// Load events
			useFetch("/events.json")
				.then(res => res.data.value)
				.then(data => {
					this.event_list = data

					const eventHandler = this.promiseHandlers.event
					if (eventHandler) {
						const resolver = eventHandler.resolve
						const slug = eventHandler.slug
						const event = this.findEvent(slug)
						resolver(event)
					}
					this.eventsLoading = false

				})
				.finally(() => this.eventsLoading = false)
		}
	},
	getters: {
		events: s => s.event_list,
		blogs: s => s.blog_list,
		isPageLoading: s => s.isDataLoading
	}
})