import {
	defineStore
} from 'pinia'

import sphere_images from "@/assets/images"

const service_images = [
	"/img/services/bespoke.png",
	"/img/services/consultancy-full.png",
	"/img/services/content.png",
	"/img/services/design.png",
	"/img/services/digital.png",
	"/img/services/events.png",
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
					"/img/contact-img.png",
					...service_images
				]
			},
			portfolio: {
				images: [
					...service_images,
					"/img/portfolios/ADFW23.png",
					"/img/portfolios/ADFW24.png",
					"/img/portfolios/ADGM.png",
					"/img/portfolios/AGWA.png",
					"/img/portfolios/ahlan modi.png",
					"/img/portfolios/CBUAE.png",
					"/img/portfolios/e& Suhoor.png",
					"/img/portfolios/hub71.png",
					"/img/portfolios/i2u2.png",
					"/img/portfolios/One miral.png",
					"/img/portfolios/resolve.png",
					"/img/portfolios/sam altman.png",
					"/img/portfolios/SAVI.png",
					"/img/portfolios/SIFF.png",
					"/img/portfolios/SMB Awards 2024.png",
					"/img/portfolios/etisalat.jpg",
				]
			},
			careers: {
				images: [
					...service_images,
					'/img/astro.png'
				]
			},
			about: {
				images: [
					...service_images,
					"/img/testimonials/Hub71.jpg",
					"/img/testimonials/e&.jpg",
					"/img/testimonials/ADGM.jpg",
					"/img/team.jpeg"
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