<template>
	<section id="section-hero">
		<div class="layout-box">
			<h1 class="hero-title">cpi business</h1>
			<h3 class="hero-subtitle">
				<span
					class="subtitle-letter text-block"
					v-for="letter in sentenceList"
				>
					{{ letter }}
				</span>
			</h3>
			<div class="hero-call-to-actions">
				<button class="btn-sq btn-hero-action">
					<span class="bt-text">
						Our Work
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
				<button class="btn-sq blue btn-hero-action">
					<span class="bt-text">
						Our Capabilities
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
	<client-only v-if="0">
		<index-sphere-canvas />
	</client-only>
	<index-about-brief />
	<!-- <section
		class="snap-wrapper"
		ref="snapWrapper"
	>
		<div
			class="snap-element red"
			:ref="setSnapRef"
		>
			<h1>One</h1>
		</div>
		<div
			class="snap-element blue subsequent"
			:ref="setSnapRef"
		>
			<h1>Two</h1>
		</div>
		<div
			class="snap-element pink subsequent"
			:ref="setSnapRef"
		>
			<h1>Three</h1>
		</div>
		<div
			class="snap-element yellow subsequent"
			:ref="setSnapRef"
		>
			<h1>Four</h1>
		</div>
		<div
			class="snap-element purple subsequent"
			:ref="setSnapRef"
		>
			<h1>Five</h1>
		</div>
		<div
			class="snap-element lime subsequent"
			:ref="setSnapRef"
		>
			<h1>Six</h1>
		</div>
	</section> -->
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
						:ref="setShowcaseRef"
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

	<section class="library-showcase">
		<div class="layout-box">
			<div class="flex-center">
				<h4 class="library-showcase-title">
					Ideas that are <br>
					keeping us inspired <br>
					<span class="lst-highlight">
						Explore Our Ideas
					</span>
				</h4>
			</div>
			<div class="library-row">
				<div
					class="library-col"
					v-for="li in libraryItems"
				>
					<div class="library-item">
						<img
							:src="`https://picsum.photos/536/354?rand=${Math.random()}`"
							alt=""
							class="sli-image"
						/>
					</div>
					<h3 class="sli-title">
						Rapid Prototyping in Event Visualisation
					</h3>
				</div>
			</div>
			<div class="flex-center showcase-action-row">
				<button class="btn-sq rounded showcase-action-bt">
					<span class="bt-text">
						Read More
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
</template>
<script setup>
	// const snapWrapper = ref()
	// const snapElements = ref([])
	// const setSnapRef = el => snapElements.value.push(el.$el || el)

	const showcaseRef = ref([])
	const setShowcaseRef = el => showcaseRef.value.push(el)
	onMounted(() => {
		const {
			$ScrollTrigger: ScrollTrigger,
			$gsap: gsap,
			$Observer: Observer,
			$lenis
		} = useNuxtApp()

		// const snap_scrollTrigger = ScrollTrigger.create({
		// 	trigger: snapWrapper.value,
		// 	start: "top top",
		// 	pin: true,
		// 	onEnter: () => {
		// 		console.log("Entered")
		// 	}
		// })

		// function gotoSection (index, direction) {
		// 	index = wrap(index); // make sure it's valid
		// 	animating = true;
		// 	let fromTop = direction === -1,
		// 		dFactor = fromTop ? -1 : 1,
		// 		tl = gsap.timeline({
		// 			defaults: { duration: 1.25, ease: "power1.inOut" },
		// 			onComplete: () => animating = false
		// 		});
		// 	if (currentIndex >= 0) {
		// 		// The first time this function runs, current is -1
		// 		gsap.set(sections[currentIndex], { zIndex: 0 });
		// 		tl.to(images[currentIndex], { yPercent: -15 * dFactor })
		// 			.set(sections[currentIndex], { autoAlpha: 0 });
		// 	}
		// 	gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
		// 	tl.fromTo([outerWrappers[index], innerWrappers[index]], {
		// 		yPercent: i => i ? -100 * dFactor : 100 * dFactor
		// 	}, {
		// 		yPercent: 0
		// 	}, 0)
		// 		.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
		// 		.fromTo(splitHeadings[index].chars, {
		// 			autoAlpha: 0,
		// 			yPercent: 150 * dFactor
		// 		}, {
		// 			autoAlpha: 1,
		// 			yPercent: 0,
		// 			duration: 1,
		// 			ease: "power2",
		// 			stagger: {
		// 				each: 0.02,
		// 				from: "random"
		// 			}
		// 		}, 0.2);

		// 	currentIndex = index;
		// }

		// let is_animating = false;

		// const tl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: snapWrapper.value,
		// 		start: "top top",
		// 		pin: true,
		// 		scrub: 1,
		// 		// onEnter () {
		// 		// 	console.log("Destroying lenis")
		// 		// 	$lenis.instance.animate.stop()
		// 		// 	console.log("Lenis is destroyed")
		// 		// },
		// 		// onEnterBack () {
		// 		// 	console.log("Destroying lenis")
		// 		// 	$lenis.instance.animate.stop()
		// 		// 	console.log("Lenis is destroyed")
		// 		// },
		// 		// onLeave () {
		// 		// 	console.log("Initiating Lenis")
		// 		// 	$lenis.init()
		// 		// }
		// 	}
		// })

		// snapElements.value.forEach((el, i) => {
		// 	tl
		// 		.addLabel(`hop-${i}`)
		// 		.to((el), {
		// 			left: 0,
		// 			// onEnter (t) {
		// 			// 	console.log("Tween Entered : ", t)
		// 			// 	// $lenis.instance.animate.stop()
		// 			// }
		// 		})
		// })

		console.log(showcaseRef.value)
		const showcaseItemsLeft = gsap.utils.toArray('.appear-left');
		const showcaseItemsRight = gsap.utils.toArray('.appear-right');
		const appear_duration = 0.8
		showcaseItemsLeft.forEach(item => {
			gsap.from(item, {
				x: -100,
				opacity: 0,
				duration: appear_duration,
				scrollTrigger: {
					trigger: item,
					start: "top 85%",
					// scrub: 1
				}
			})
		});
		showcaseItemsRight.forEach(item => {
			gsap.from(item, {
				x: 100,
				opacity: 0,
				duration: appear_duration,
				scrollTrigger: {
					trigger: item,
					start: "top 85%",
					// scrub: 1
				}
			})
		});
		// showcaseRef.value.forEach(el => {
		// 	console.log(el)
		// 	gsap.from(el, {
		// 		x: -100,
		// 		opacity: 0,
		// 		delay: 3
		// 		// duration: 1,
		// 		// scrollTrigger: {
		// 		// 	start: 'top 90%',
		// 		// 	scrub: 1,
		// 		// 	markers: true
		// 		// }
		// 	})
		// 	// ScrollTrigger.create({
		// 	// 	trigger: el,
		// 	// 	start: 'top 90%',
		// 	// 	left: -100,
		// 	// 	opacity: 0,
		// 	// 	duration: 1,
		// 	// 	markers: true,
		// 	// 	scrub: 1,
		// 	// })
		// })
	})
	const sentenceList = "Value-driven Ideas / Impactful Experiences / Focused Strategies".split("")


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

	const libraryItems = [
		{},
		{},
		{}
	]
</script>

<!-- Events Showcase -->
<style lang="scss">
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
<!-- /Events Showcase -->

<style lang="scss">
	.snap-wrapper {
		height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.snap-element {
		height: 100%;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 200px;

		h1 {
			font-size: 100px;
			color: black;
			text-align: center;
			margin: 0;
			text-transform: uppercase;
		}

		// margin-bottom: 10px;
		&.subsequent {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 100%;
		}

		&.red {
			background: #ce5454;
			box-sizing: border-box;
		}

		&.blue {
			background: #2c5bd3
		}

		&.pink {
			background: #e366ce;
		}

		&.yellow {
			background: #e3e366;
		}

		&.purple {
			background: #9866e3;
		}

		&.lime {
			background: #b1e366;
		}
	}

	// Common
	.layout-box {
		width: 97%;
		max-width: 1569px;
		margin: 0 auto;
		position: relative;
	}

	// /Common
	section#section-hero {
		// min-height: 100vh;
		padding-bottom: 200px;
		border-top: 1px solid transparent;
	}

	h1.hero-title {
		font-family: 'Newyork';
		font-weight: 674;
		font-size: 166px;
		color: white;
		text-align: center;
		margin: 197px 0 0;
		line-height: 198.1px;

	}

	.hero-subtitle {
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 400;
		line-height: 71.55px;
		text-align: center;
		color: white;
		margin: 50px 0 84px;
	}

	.btn-sq {
		width: auto;
		height: 61px;
		border: none;
		border-radius: 5px;
		background: #3D3D3D;
		font-size: 20px;
		color: white;
		font-family: 'Metropolis';
		font-weight: 400;
		margin: 0 18px;
		cursor: pointer;
		padding: 0 25px;

		&.blue {
			background: #054BF9;
		}

		&.rounded {
			border-radius: 30px;

			&.showcase-action-bt {
				width: 245px;
			}
		}

		.bt-text {
			margin-right: 13px;
		}
	}

	.btn-sq.btn-hero-action {
		width: 338px;
	}

	.hero-call-to-actions {
		display: flex;
		justify-content: center;
	}

	.text-block {
		display: inline-block;
	}
</style>

<!-- Library Showcase -->
<style lang="scss">
	.library-showcase {
		.library-showcase-title {
			font-size: 53px;
			font-weight: 700;
			line-height: 73px;
			text-align: center;

			.lst-highlight {
				font-family: 'Newyork';
			}
		}

		.library-row {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 -15px;
		}

		.library-col {
			padding: 0 15px;
			box-sizing: border-box;
			width: 33.333%;
			flex: 1;
		}

		.library-item {
			width: 100%;
		}

		.sli-image {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: 15px;
			display: block;
			height: 530px;
			margin-bottom: 50px;
		}

		.sli-title {
			font-size: 38px;
			font-weight: 500;
			line-height: 61px;
		}
	}
</style>
<!-- /Library Showcase -->