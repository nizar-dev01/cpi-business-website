<template>
	<section class="events-showcase">
		<horizontal-text duration="100">
			<div class="h-slide-text white">
				<span>EVENTS</span> <span class="center-dot"></span>
				<span>CONTENT</span> <span class="center-dot"></span>
				<span>DIGITAL</span> <span class="center-dot"></span>
				<span>MEDIA</span> <span class="center-dot"></span>
				<span>EXPERIENCES</span> <span class="center-dot"></span>
			</div>
		</horizontal-text>
		<div class="layout-box">
			<div class="showcase-container">
				<div
					class="showcase-row"
					ref="showcaseRow"
				>
					<div
						v-for="(event, i) in showcaseEvents"
						class="showcase-col"
						ref="showcaseItems"
					>
						<div class="showcase-item">
							<img
								:src="`${event.image}?rand=${Math.random()}`"
								:alt="event.alt || `Event Image ${i}`"
								class="showcase-img"
							>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-center showcase-action-row">
				<button class="btn-sq rounded showcase-action-bt">
					<span class="bt-text">
						View More
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
</template>
<script setup>
	const showcaseRow = ref()
	const showcaseItems = ref()

	onMounted(() => {
		const {
			$gsap: gsap,
		} = useNuxtApp()

		const items = showcaseItems.value
		const row = showcaseRow.value

			gsap.set(items, {
			y: 100,
			opacity: 0
		})

		const divFactor = Math.round(row.clientWidth / items[0].clientWidth)

		items.forEach((item, i) => {
			gsap.to(item, {
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: 0.1,
				delay: (i % items.length) % divFactor * 0.1,
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
				}
			})
		})
	})

	const showcaseEvents = [
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
	]
</script>

<style lang="scss" scoped>
	// .events-showcase {
	// 	padding-top: 150px;
	// }

	.showcase-container {
		overflow: hidden;
		margin-top: 100px;
	}

	.showcase-row {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin: -9px;
	}

	.showcase-col {
		padding: 9px;
		box-sizing: border-box;
		width: 25%;
		min-width: 350px;
		flex-grow: 1;
	}

	.showcase-item {
		height: 567px;
		width: 100%;
		border-radius: 9px;
		overflow: hidden;

		img.showcase-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.showcase-action-row {
		margin: 60px 0 200px;
	}
</style>