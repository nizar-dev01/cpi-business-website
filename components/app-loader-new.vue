<template>
	<div
		class="loader flex-center"
		ref="loaderContainer"
		v-if="isLoading"
	>
		{{ loadingPercent }}
	</div>
</template>
<script setup>
const {
	$gsap
} = useNuxtApp()

const dataStore = useDataStore()
let __images__;
if (dataStore.pageLoading && dataStore.isDataLoading) {
	__images__ = dataStore.pages[dataStore.pageLoading].images
}
let length = 0;

const loadingPercent = ref(0)
const loaded = ref(0)

const isLoading = computed(() => {
	return dataStore.isDataLoading
})

onMounted(() => {
	if (__images__) {
		length += __images__.length

		__images__.forEach(im => {
			const img = document.createElement('img')
			img.src = `${window.location.origin}/${im}`

			const staticDelay = 1.5

			const progressTracker = () => {
				loaded.value++
				loadingPercent.value = Math.ceil((loaded.value / length) * 90)
				const hasLoadingFinished = loaded.value === length
				if (hasLoadingFinished) {
					const proxy = { value: loadingPercent.value };
					const tween = $gsap.to(proxy, {
						value: 100,          // Target value
						duration: staticDelay,         // Animation duration in seconds
						onUpdate: () => {
							// Update the reactive value with the animated value
							// Use Math.round() if you only want whole numbers
							loadingPercent.value = Math.round(proxy.value);
						}
					});
					setTimeout(() => {
						tween.kill()
						dataStore.loadPage()
					}, staticDelay * 1000)
				}
			}
			img.onload = progressTracker
			img.onerror = progressTracker
		})
	}
})
</script>
<style lang="scss" scoped>
.loader {
	height: 100vh;
	width: 100vw;
	position: fixed;
	z-index: 100;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: black;
}
</style>