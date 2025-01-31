<template>
	<div
		class="loader flex-center"
		ref="loaderContainer"
		v-if="isLoading"
	>
		<div class="loader-ripple">
			<div></div>
			<div></div>
			<span class="loader-percentage">
				{{ loadingPercent }}
			</span>
		</div>
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



.loader-ripple {
	display: inline-block;
	position: relative;
	width: 300px;
	height: 3000px;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		position: absolute;
		border: 15px solid #ffffff89;
		opacity: 1;
		border-radius: 50%;
		background: #000;
		animation: animateRipple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
		filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 23px #fff);
		z-index: 1;
	}

	div:nth-child(2) {
		animation-delay: -0.5s;
	}

	.loader-percentage {
		z-index: 2;
		font-size: 25px;
		font-weight: 500;
	}

}

@keyframes animateRipple {
	0% {
		width: 0;
		height: 0;
		opacity: 1;
	}

	100% {
		width: 300px;
		height: 300px;
		opacity: 0;
	}
}
</style>