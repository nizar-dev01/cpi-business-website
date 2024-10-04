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
				<div class="showcase-row">
					<div
						v-for="(event, i) in showcaseEvents"
						:class="['showcase-col', event.class || '']"
					>
						<div :class="['showcase-item', event.class]">
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
	onMounted(() => {
		const {
			$gsap: gsap,
		} = useNuxtApp()

		const showcaseItemsLeft = gsap.utils.toArray('.appear-left');
		const showcaseItemsRight = gsap.utils.toArray('.appear-right');


		[
			{
				target: showcaseItemsLeft,
				x: -100
			},
			{
				target: showcaseItemsRight,
				x: 100
			}
		].forEach(config => {
			config.target.forEach(item => {
				gsap.from(item, {
					x: config.x,
					opacity: 0,
					duration: 0.8,
					scrollTrigger: {
						trigger: item,
						start: "top 90%",
						duration: 1,
						// end: "top 40%",
						// scrub: 1,
						// once: true,
						// markers: true,
					}
				})
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
	.events-showcase {
		padding-top: 150px;
	}

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