import {
	defineStore
} from 'pinia'

import sphere_images from "@/assets/images"

const service_images = [
	"/cpi-public/img/services/bespoke.png",
	"/cpi-public/img/services/consultancy-full.png",
	"/cpi-public/img/services/content.png",
	"/cpi-public/img/services/design.png",
	"/cpi-public/img/services/digital.png",
	"/cpi-public/img/services/events.png",
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
					"/cpi-public/img/contact-img.png",
					...service_images
				]
			},
			portfolio: {
				images: [
					...service_images,
					"/cpi-public/img/portfolios/10.png",
					"/cpi-public/img/portfolios/11.png",
					"/cpi-public/img/portfolios/12.png",
					"/cpi-public/img/portfolios/13.png",
					"/cpi-public/img/portfolios/14.png",
					"/cpi-public/img/portfolios/15.png",
					"/cpi-public/img/portfolios/1.jpg",
					"/cpi-public/img/portfolios/2.png",
					"/cpi-public/img/portfolios/3.png",
					"/cpi-public/img/portfolios/4.png",
					"/cpi-public/img/portfolios/5.png",
					"/cpi-public/img/portfolios/6.png",
					"/cpi-public/img/portfolios/7.png",
					"/cpi-public/img/portfolios/8.png",
					"/cpi-public/img/portfolios/9.png",
				]
			},
			careers: {
				images: [
					...service_images,
					'/cpi-public/img/astro.png'
				]
			},
			about: {
				images: [
					...service_images,
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
			'services-service': {
				images: [
					...service_images,
				]
			}
		},
		isDataLoading: false,
		pageLoading: null,
		blogLoading: false,
		eventsLoading: false,
	}),
	actions: {
		getEvent (slug) {
			const event = this.event_list.find(ev => ev.slug === slug)
			return event || null
		},
		getNextEvent (slug) {
			const event = this.getEvent(slug)
			const index = this.event_list.indexOf(event) + 1

			if (index >= this.event_list.length) {
				return null
			} else {
				return this.event_list[index]
			}
		},
		getPrevEvent (slug) {
			const event = this.getEvent(slug)
			const index = this.event_list.indexOf(event) - 1

			if (index < 0) {
				return null
			} else {
				return this.event_list[index]
			}
		},
		getBlog (slug) {
			const blog = this.blog_list.find(bl => bl.slug === slug)
			return blog || null
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
			useFetch("/cpi-public/blog.json")
				.then(res => res.data.value)
				.then(data => {
					this.blog_list = data
				})
				.finally(() => this.blogLoading = false)

			// Load events
			useFetch("/cpi-public/events.json")
				.then(res => res.data.value)
				.then(data => {
					this.event_list = data
				}).finally(() => this.eventsLoading = false)
		}
	},
	getters: {
		events: s => s.event_list,
		blogs: s => s.blog_list,
		isPageLoading: s => s.isDataLoading
	}
})