<template>
	<client-only :key="appKey">
		<Transition>
			<app-loader-new v-if="dataStore.isDataLoading" />
		</Transition>
		<!-- <app-loader /> -->
		<nuxt-layout>
			<nuxt-page></nuxt-page>
		</nuxt-layout>
	</client-only>
</template>
<script setup>
useHead({
	meta: [{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
	}]
})

const appKey = ref(0)
const dataStore = useDataStore()
const route = useRoute()
dataStore.loadPage(route.name)
onMounted(() => {
	// window.addEventListener('resize', () => {
	// 	appKey.value++
	// })
	setTimeout(() => {
		document.body.style.backgroundColor = document.documentElement.style.backgroundColor = '#1e1e1e'
	}, 1000)
})

const _title = "CPI Businesss"
const _image = "https://nizar-dev01.github.io/cpi-public/img/contact-img.png"
const _description = "CPI Business is one of the leading event management firms in the middle east"
const _url = "cpibusiness.com"
useSeoMeta({
	title: _title,
	description: _description,
	icon: _image,
	lang: "english",
	"og:image": _image,
	"og:title": _title,
	"og:description": _description,
	"og:url": _url,
	"twitter:image": _image,
	"twitter:title": _title,
	"twitter:description": _description,
	"twitter:card": _description,
});
</script>
<style lang="scss">
@use './assets/style/index.scss';

// .page-enter-active,
// .page-leave-active {
// 	transition: all 0.4s;
// }

// .page-enter-from,
// .page-leave-to {
// 	opacity: 0;
// 	filter: blur(1rem);
//}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
