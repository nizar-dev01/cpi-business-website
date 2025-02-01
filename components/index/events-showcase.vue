<template>
	<section class="events-showcase">
		<div class="layout-box clearfix">
			<div
				class="showcase-container"
				:key="updateKey"
			>
				<div
					class="showcase-row"
					ref="showcaseRow"
					v-if="showcaseEvents"
				>
					<div
						v-for="(event, i) in showcaseEvents"
						class="showcase-col"
						:class="{ hidden: isEventHidden(event) }"
						ref="showcaseItems"
					>
						<router-link
							:to="'/portfolio/' + event.slug"
							class="showcase-item"
						>
							<img
								:src="event.image"
								:alt="event.alt || `Event Image ${i}`"
								class="showcase-img"
								@load="updateImageLoad"
								@error="updateImageLoad"
							/>
							<div class="si-hover-display">
								<div class="actions-container">
									<div class="ac-left">
										<h3 class="ac-title">
											{{ event.title }}
										</h3>
										<div class="ac-tags">
											<div
												class="ac-tag act-one"
												v-if="event.client"
											>
												<!-- <div class="act-icon">
													<icon-en-brand></icon-en-brand>
												</div> -->
												<div class="act-text">
													{{ event.client }}
												</div>
											</div>
											<div
												class="ac-tag act-two"
												v-for="highlight in getTwoTags(event)"
											>
												<!-- <div class="act-icon">
													<icon-user-head class="act-icon-icon" />
												</div> -->
												<div class="act-text">
													{{ highlight }}
												</div>
											</div>
										</div>
									</div>
									<div class="ac-right">
										<icon-round-arrow-button class="acr-view-button" />
										<span class="acr-view-text">
											View
										</span>
									</div>
								</div>
								<div class="text-container">
									<p class="tc-text">
										{{ event.subtitle }}
									</p>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div
				class="flex-center showcase-action-row"
				v-if="props.showViewMore"
			>
				<button-sq
					text="View More"
					class="rounded showcase-action-bt"
					@click.prevent="$router.push('/portfolio')"
				/>
			</div>
		</div>
	</section>
</template>
<script setup>
const {
	$gsap: gsap,
	$ScrollTrigger
} = useNuxtApp()

const props = defineProps(['showViewMore'])

const dataStore = useDataStore()
const showcaseEvents = computed(() => dataStore.events)

const showcaseRow = ref()
const showcaseItems = ref()

const scrollRevealTweens = [];
const initScrollReveal = () => {
	const items = showcaseItems.value
	const row = showcaseRow.value

	// $ScrollTrigger.refresh()
	const rowWidth = row.clientWidth
	const firstElementWidth = items[0].clientWidth
	const finalElemetWidth = items[items.length - 1].clientWidth

	if (firstElementWidth !== finalElemetWidth) {
		const element = items[items.length - 1]
		element.classList.add("hidden")
	}
	const divFactor = Math.round(rowWidth / firstElementWidth)


	const _yfall = 200

	items.forEach((item, i) => {
		const delay = (i % items.length) % divFactor * 0.1
		const _config = {
			duration: 0.5,
			delay
		}
		const twn = gsap.to(item, {
			scrollTrigger: {
				// markers: true,
				trigger: item,
				start: "top bottom",
				end: "bottom top",
				onEnter ({ trigger }) {
					gsap.fromTo(trigger, {
						y: _yfall,
						opacity: 0
					}, {
						..._config,
						y: 0,
						opacity: 1,
					})
				},
				onLeave ({ trigger }) {
					gsap.to(trigger, {
						..._config,
						y: -_yfall,
						opacity: 0
					})
				},
				onEnterBack ({ trigger }) {
					gsap.to(trigger, {
						..._config,
						y: 0,
						opacity: 1
					})
				},
				onLeaveBack ({ trigger }) {
					gsap.to(trigger, {
						..._config,
						y: _yfall,
						opacity: 0
					})
				},
			},
		})
		scrollRevealTweens.push(twn)
	})
}

let has_mounted = false
const mount_calls = []
onMounted(() => {
	has_mounted = true
	mount_calls.forEach(fn => fn())
})

// Make sure the scroll reveal animation is initiated after all images are loaded
let loaded_images = 0;
const updateImageLoad = () => {
	loaded_images++
	if (loaded_images >= showcaseEvents.value.length - 1) {
		if (has_mounted) {
			initScrollReveal()
		} else {
			mount_calls.push(initScrollReveal)
		}
	}
}

const getTwoTags = (event) => {
	let tags = []
	const kh = event?.detail?.key_highlights
	if (kh) {
		for (let i = 0; i < 2; i++) {
			if (kh[i]) {
				tags.push(kh[i])
			}
		}
	}

	return tags
}


// Filtering
const tags = inject('tags', [])
const filterCallBacks = inject('filter-callbacks', null)

const isEventHidden = (event) => {
	const selectedTags = tags.value

	if (selectedTags.find(st => st.selected && st.value === 'show-all')) {
		return false
	}

	const eventTags = event.tags
	const doesTagExist = selectedTags.some(el => !!eventTags.find(et => el.selected && el.value === et))
	// debugger
	return !doesTagExist
}
const updateKey = ref(0)
const runFilter = (filters) => {
	// scrollRevealTweens.forEach(t => t.kill())
	// $ScrollTrigger.killAll()
	updateKey.value++
	// setTimeout(initScrollReveal(), 1000)
}

if (tags.value.length) {
	if (filterCallBacks) {
		filterCallBacks.push(runFilter)
	}
}
</script>

<style lang="scss" scoped>
// .events-showcase {
// 	// padding-top: 150px;
// }

.showcase-container {
	overflow: hidden;
	padding-top: 100px;

	@include md {
		padding-top: 50px;
	}
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
	// flex-grow: 1;

	opacity: 0;

	&.hidden {
		display: none;
	}

	@include break(1700px) {
		width: 33.333%;
	}

	@include md {
		width: 50%;
	}


}

$hover-duration: .5s;

.showcase-item {
	height: auto;
	width: 100%;
	border-radius: 9px;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	color: inherit;
	display: block;

	@include md {
		height: 98%;
	}

	img.showcase-img {
		width: 100%;
		height: auto;
		// object-fit: cover;
		z-index: 0;

		@include md {
			height: auto;
		}
	}

	.si-hover-display {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: block;
		z-index: 1;
		background-color: #000000a8;
		backdrop-filter: blur(5px);
		opacity: 0;
		transition: opacity $hover-duration ease;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 20px;
		box-sizing: border-box;

		@include break(1450px) {
			display: none;
		}
	}

	&:hover .si-hover-display {
		opacity: 1;

		.actions-container,
		.text-container {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.actions-container {
		background: #ffffff26;
		border-radius: 10px;
		box-sizing: border-box;
		flex-grow: 0;
		margin-right: auto;
		width: 100%;

		transition: all $hover-duration ease-in-out;
		transform: translateY(40px);
		opacity: 0;

		display: flex;

		.ac-left {
			padding: 20px;
		}

		.ac-right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 70px;
			font-size: 16px;
			font-weight: 600;
			border-left: 1px solid #00000033;
			margin-left: auto;
			flex-shrink: 0;
			transition: transform 0.2s ease;

			&:hover {
				transform: scale(1.1);
			}

			@include sm {
				flex-direction: row;
				width: 100%;
				align-items: start;
				justify-content: start;
			}
		}

		.acr-view-button {
			height: 35px;
			width: 35px;
			margin-bottom: 10px;
			margin-left: 20px;
		}

		&:hover {
			background: rgba(0, 0, 0, 0.55);
		}

		@include sm {
			flex-direction: column;
		}

		@include xs {
			display: none;
		}
	}

	.ac-title {
		font-size: 16px;
		margin: 0 0 20px;
	}

	.ac-tags {
		display: flex;
		flex-wrap: wrap;
		margin: -5px;

		.ac-tag {
			background: rgba(0, 0, 0, 0.216);
			height: 25px;
			line-height: 25px;
			padding: 0 5px;
			border-radius: 13px;
			font-size: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 500;
			margin: 5px;
		}

		.act-icon {
			height: 15px;
			width: 15px;
			border-radius: 50%;
			margin-right: 5px;
			display: flex;
			justify-content: center;
			align-items: center;

			.act-icon-icon {
				height: 70%;
				width: 70%;
			}
		}

		.act-text {
			white-space: nowrap;
		}
	}

	.text-container {
		transform: translateY(60px);
		opacity: 0;
		transition: all $hover-duration ease-in-out;
	}

	.tc-text {
		font-size: 16px;
		line-height: 30px;

		@include sm {
			font-size: 14px;
			line-height: 150%;
		}
	}
}

.showcase-action-row {
	margin: 60px 0 200px;
}

.acr-view-text {
	font-size: 13px;

	@include sm {
		display: none;
	}
}
</style>