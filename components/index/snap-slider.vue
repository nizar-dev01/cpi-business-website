<template>
	<section
		id="snap-slider-wrapper-section"
		ref="snapSliderWrapper"
	>
		<!-- Slides -->
		<div class="snap-content-section">
			<!-- 1 - Slide -->
			<div
				class="snap-element active"
				id="snap-slider-slide-1"
			>
				<div class="se-ui-container">
					<div class="se-bg-container">
						<img
							src="@/assets/images/snap/slide_1/bg.jpg"
							alt="Background Image"
							class="slide-img layer-1"
						/>
						<!-- Moving Cards -->
						<div class="cards-container-3d layer-2">
							<div class="cards-cage">
								<img
									src="@/assets/images/snap/slide_1/card_1.png"
									alt="Card 1"
									class="rotate-card rtc-1"
									id="slide-1-rotate-card-1"
								/>
								<img
									src="@/assets/images/snap/slide_1/card_2.png"
									alt="Card 2"
									class="rotate-card rtc-2"
									id="slide-1-rotate-card-2"
								/>
								<img
									src="@/assets/images/snap/slide_1/card_3.png"
									alt="Card 3"
									class="rotate-card rtc-3"
									id="slide-1-rotate-card-3"
								/>
							</div>
						</div>
						<!-- Moving Cards -->
						<img
							src="@/assets/images/snap/slide_1/fg_block.png"
							alt="Background Image"
							class="slide-img layer-3"
						/>
					</div>
				</div>
			</div>
			<!-- /1 - Slide -->

			<!-- 2 - Slide -->
			<div
				class="snap-element"
				id="snap-slider-slide-2"
			>
				<div class="se-ui-container">
					<h1 ref="secondSlideText"> 2 </h1>
				</div>
			</div>
			<!-- /2 - Slide -->

			<!-- 3 - Slide -->
			<div
				class="snap-element"
				id="snap-slider-slide-3"
			>
				<div class="se-ui-container">
					<h1> 1 </h1>
				</div>
			</div>
			<!-- /3 - Slide -->

			<!-- 4 - Slide -->
			<div
				class="snap-element"
				id="snap-slider-slide-4"
			>
				<div class="se-ui-container">
					<h1> 1 </h1>
				</div>
			</div>
			<!-- /4 - Slide -->

			<!-- 5 - Slide -->
			<div
				class="snap-element"
				id="snap-slider-slide-5"
			>
				<div class="se-ui-container">
					<h1> 1 </h1>
				</div>
			</div>
			<!-- /5 - Slide -->

			<!-- 6 - Slide -->
			<div
				class="snap-element"
				id="snap-slider-slide-6"
			>
				<div class="se-ui-container">
					<h1> 1 </h1>
				</div>
			</div>
			<!-- /6 - Slide -->
		</div>
		<!-- /Slides -->

		<!-- Progress -->
		<div class="progress-bars-section">
			<div class="progress-bars-container">
				<!-- 1 - Progress -->
				<div class="pb-progress-holder">
					<div
						class="pb-progress-line"
						id="snap-slider-slide-progress-1"
					></div>
				</div>
				<!-- / 1 - Progress -->

				<!-- 2 - Progress -->
				<div class="pb-progress-holder">
					<div
						class="pb-progress-line"
						id="snap-slider-slide-progress-2"
					></div>
				</div>
				<!-- / 2 - Progress -->

				<!-- 3 - Progress -->
				<div class="pb-progress-holder">
					<div
						class="pb-progress-line"
						id="snap-slider-slide-progress-3"
					></div>
				</div>
				<!-- / 3 - Progress -->

				<!-- 4 - Progress -->
				<div class="pb-progress-holder">
					<div
						class="pb-progress-line"
						id="snap-slider-slide-progress-4"
					></div>
				</div>
				<!-- / 4 - Progress -->

				<!-- 5 - Progress -->
				<div class="pb-progress-holder">
					<div
						class="pb-progress-line"
						id="snap-slider-slide-progress-5"
					></div>
				</div>
				<!-- / 5 - Progress -->

				<!-- 6 - Progress -->
				<div class="pb-progress-holder">
					<div
						class="pb-progress-line"
						id="snap-slider-slide-progress-6"
					></div>
				</div>
				<!-- / 6 - Progress -->
			</div>
		</div>
		<!-- /Progress -->
	</section>
</template>
<script setup>
	const config_pairs = [
		{
			slide: '#snap-slider-slide-1',
			progress: '#snap-slider-slide-progress-1'
		},
		{
			slide: '#snap-slider-slide-2',
			progress: '#snap-slider-slide-progress-2'
		},
		{
			slide: '#snap-slider-slide-3',
			progress: '#snap-slider-slide-progress-3'
		},
		{
			slide: '#snap-slider-slide-4',
			progress: '#snap-slider-slide-progress-4'
		},
		{
			slide: '#snap-slider-slide-5',
			progress: '#snap-slider-slide-progress-5'
		},
		{
			slide: '#snap-slider-slide-6',
			progress: '#snap-slider-slide-progress-6'
		}
	]

	const snapSliderWrapper = ref()
	const secondSlideText = ref()

	onMounted(() => {
		// Initial Setup
		const {
			$ScrollTrigger,
			$gsap,
			$Observer,
			$lenis
		} = useNuxtApp()

		const first = config_pairs[0]
		const second = config_pairs[1]

		const tl = $gsap.timeline({
			defaults: {
				duration: 2
			},
			scrollTrigger: {
				trigger: snapSliderWrapper.value,
				start: 'top top',
				// end: 'bottom top',
				end: '+=16000',
				scrub: true,
				pin: true,
				pinSpacing: true,
				anticipatePin: 1
			}
		})

		// First Slide
		const h1_2 = secondSlideText.value

		const label = {
			1: {
				start: 'slide-1-start',
				end: 'slide-1-end',
			},
			2: {
				start: 'slide-2-start',
				end: 'slide-2-end',
			},
			3: {
				start: 'slide-3-start',
				end: 'slide-3-end',
			},
			4: {
				start: 'slide-4-start',
				end: 'slide-4-end',
			},
			5: {
				start: 'slide-5-start',
				end: 'slide-5-end',
			},
			6: {
				start: 'slide-6-start',
				end: 'slide-6-end',
			},
		}

		// Animation
		tl.
			add(label[1].start)
			// Slide Animations

			// Card 1
			.to('#slide-1-rotate-card-1', {
				rotateX: -307,
				rotateY: -50,
				y: -450,
				// duration: 20
			}, label[1].start)

			// Card 2
			.to('#slide-1-rotate-card-2', {
				rotateX: 207,
				rotateY: 80,
				y: -350,
				x: -100
				// duration: 20
			}, label[1].start)

			// Card 3
			.to('#slide-1-rotate-card-3', {
				rotateX: -307,
				rotateY: -50,
				y: -350,
				// duration: 20
			}, label[1].start)
			// Progress
			.to(
				first.progress,
				{
					width: '100%',
					// duration: 20
				},
				label[1].start
			)

			// Transition

			.add(() => {
				const is_going_back = tl.scrollTrigger.direction === -1
				if (is_going_back) {
					// Backwards
					document.querySelector(first.slide).classList.remove('past')
					document.querySelector(second.slide).classList.remove('active')
					document.querySelector(first.slide).classList.add('active')
				} else {
					// Forwards
					document.querySelector(first.slide).classList.remove('active')
					document.querySelector(first.slide).classList.add('past')
					document.querySelector(second.slide).classList.add('active')
				}
			})

			// Second Slide
			.add(label[2].start)
			.to(
				h1_2,
				{
					scale: 0.5,
					duration: 1
				},
				label[2].start
			)
			.to(
				h1_2,
				{
					x: 300,
					duration: 3
				}
			)
			.to(
				h1_2,
				{
					y: -100,
					duration: 1
				}
			)

			// Progress
			.to(
				second.progress,
				{
					width: '100%',
					duration: 6
				},
				label[2].start
			)

			// Transition

			.add((a, b, c, d) => {
				console.log({
					a, b, c, d
				})
			})

	})
</script>

<style lang="scss">
	#snap-slider-wrapper-section {
		position: relative;
	}

	.snap-content-section {
		position: relative;
		height: 100svh;
		z-index: 1;
	}

	.snap-element {
		width: 100%;
		height: 100%;
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;

		transform: translateY(100%);
		transition: all 0.5s ease-in-out;

		&.active {
			transform: translateY(0);
		}

		&.past {
			opacity: 0;
			transform: translateY(-100%)
		}

		.se-ui-container {
			height: 100svh;
			width: 100svw;
			position: relative;

			.se-bg-container {
				position: relative;
				height: 100%;
				width: 100%;

				// 3D
				.cards-container-3d {
					transform-style: preserve-3d;
					perspective: 1000px;
					perspective-origin: bottom;
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;

					// flex
					display: flex;
					justify-content: center;
					align-items: flex-end;

					.cards-cage {
						width: 300px;
						height: 180px;
						position: relative;

						.rotate-card {
							display: block;
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;
							height: 100%;
							width: 100%;
							margin: 0;

							object-fit: cover;

							&.rtc-1 {
								transform: translate(-200px, 0)
							}

							&.rtc-2 {
								transform: translate(0, 0);
							}

							&.rtc-3 {
								transform: translate(200px, 0);
							}
						}
					}
				}


				.layer-1 {
					z-index: 1;
				}

				.layer-2 {
					z-index: 2;
				}

				.layer-3 {
					z-index: 3;
					opacity: 1;
				}

				.slide-img {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;

					&.mv-card {
						left: 50%;
						bottom: 0;
						height: 200px;
						width: 300px;

						&.mvc-1 {
							// transform:
							// 	translate(-38px, -324px) rotateX(48deg) rotateY(10deg)
						}

						&.mvc-2 {
							// transform:
							// 	translate(-300px, -462px) rotateX(18deg) rotateY(-20deg);
						}

						&.mvc-3 {
							// transform: translate(-409px, -225px) rotateX(34deg) rotateY(-24deg)
						}
					}
				}
			}

			h1 {
				font-size: 45vw;
				color: #ffffff24;
				text-align: center;
				margin: 0;
				line-height: calc(100vh - 115px);
				text-transform: uppercase;
				font-weight: 900;
				text-align: center;
			}
		}

		z-index: 0;
	}


	// Progress

	.progress-bars-section {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 30px;
		width: 100%;
		padding-bottom: 80px;
		z-index: 2;
		overflow: hidden;
	}

	.progress-bars-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		margin: 0 -13px;
		padding: 0 100px;
	}

	.pb-progress-holder {
		height: 5px;
		box-sizing: border-box;
		border-radius: 2px;
		background: #ffffff33;
		overflow: hidden;
		flex: 1;
		margin: 0 13px;
	}

	.pb-progress-line {
		height: 100%;
		width: 0%;
		box-sizing: border-box;
		background: white;
	}
</style>

<!-- Old script
<script setup>
	// Components needed for the animation
	// const snapWrapper = ref()
	// const snapElements = ref()
	// const snapProgressElements = ref()

	// onMounted(() => {
	// 	// Initial Setup
	// 	const {
	// 		$ScrollTrigger,
	// 		$gsap,
	// 		$Observer,
	// 		$lenis
	// 	} = useNuxtApp()

	// 	// Global Animation Variables
	// 	let current_index = 0
	// 	let is_animating = false

	// 	// Set the z-index and y-position of the first element, for when the UI is first loaded. It will otherwise be shown in the default stacking context, namely the last item on the top
	// 	const first_element = snapElements.value[current_index]

	// 	$gsap.set(first_element, {
	// 		zIndex: 1,
	// 		y: 0
	// 	})
	// 	// Set the progress of the first item. (It is static, as the item would already be visible in the view)
	// 	const first_progress = snapProgressElements.value[current_index]

	// 	$gsap.set(first_progress, {
	// 		width: "100%"
	// 	})

	// 	// Function that decides whether a movement (scroll/wheel/etc) should be considered as the exit of the animation
	// 	const exitAnimationLock = (isFromUp, index = current_index) => {
	// 		if (is_animating) return
	// 		const loopEnd = snapSectionsData.length - 1

	// 		// Whether it's time to exit at either ends
	// 		const exitAtTail = index === loopEnd && isFromUp
	// 		const exitAtHead = index === 0 && !isFromUp

	// 		// If it's exit-time
	// 		const timeToExit = exitAtHead || exitAtTail
	// 		if (timeToExit) {
	// 			// Re-enable lenis
	// 			// $lenis.instance.start()
	// 		}
	// 	}

	// 	// Function that controls the navigation between slides
	// 	const navigateSection = (direction) => {
	// 		// Return if the animation is actively running
	// 		if (is_animating) return

	// 		const new_index = current_index + direction

	// 		// Re Enable scrolling when the slides reach the end or beginning in reverse navigation
	// 		if (new_index < 0 || new_index >= snapSectionsData.length) {
	// 			// return $lenis.instance.start()
	// 		} else {
	// 			// Proceed to animate the slider
	// 			const tl = $gsap.timeline({
	// 				defaults: {
	// 					duration: 1,
	// 					ease: "power1.inOut",
	// 				}
	// 			})

	// 			// Select the main slide-box elements
	// 			const currentElement = snapElements.value[current_index]
	// 			const newElement = snapElements.value[new_index]

	// 			// Select the progress bar elements
	// 			const currentProgress = snapProgressElements.value[current_index]
	// 			const newProgress = snapProgressElements.value[new_index]

	// 			is_animating = true

	// 			// Variables for the slide animation
	// 			const newElementYStart = 100 * direction
	// 			const currentElementYEnd = newElementYStart * -1

	// 			// Variables for the progress animation
	// 			const isFromUp = direction === 1
	// 			const endProgressWidth = isFromUp ? "100%" : "0%"

	// 			// #######################################
	// 			// The Animation Timeline
	// 			// #######################################
	// 			const startLabel = "snapSliderAnimationStartPoint"

	// 			// Set the z-index of the currently visible element for stacking items properly
	// 			// This lable is used to start the animations at the same time in the beginning
	// 			tl.set(currentElement, {
	// 				zIndex: 1
	// 			})
	// 				// Set the initial position of the incoming element
	// 				.set(
	// 					newElement, {
	// 					zIndex: 2,
	// 					yPercent: newElementYStart
	// 				})
	// 				// Add a label to indicate the starting time for the coming animations
	// 				.add(startLabel)
	// 				// Remove the current element from the viewport
	// 				.to(currentElement, {
	// 					yPercent: currentElementYEnd
	// 				}, startLabel)
	// 				// Bring the new element to the viewport
	// 				.to(newElement, {
	// 					yPercent: 0,
	// 					onComplete () {
	// 						is_animating = false
	// 					},
	// 				}, startLabel)
	// 				// Increase/Decrease progressbar width
	// 				.to(isFromUp ? newProgress : currentProgress, {
	// 					width: endProgressWidth
	// 				}, startLabel)

	// 			// Update the current index, as the elements are re-positioned in the animation
	// 			current_index = new_index
	// 		}
	// 	}

	// 	let _observer
	// 	const createObserver = () => {
	// 		return $Observer.create({
	// 			target: window, // can be any element (selector text is fine)
	// 			type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
	// 			onUp () {
	// 				navigateSection(- 1)
	// 				exitAnimationLock(false, current_index)
	// 			},
	// 			onDown () {
	// 				navigateSection(1)
	// 				exitAnimationLock(true, current_index)
	// 			},
	// 		});
	// 	}

	// 	// Create the scroll trigger to activate the animations when the component gets to the viewport

	// 	// To call on enter - forward and backward
	// 	const enterGate = () => {
	// 		// $lenis.instance.stop()

	// 		// Initiate the Observer scroll events
	// 		if (!_observer) {
	// 			_observer = createObserver()
	// 		} else if (!_observer.isEnabled) {
	// 			_observer.enable()
	// 		}
	// 	}

	// 	// To call on exit - forward and backward
	// 	const exitGate = () => {
	// 		if (_observer) {
	// 			_observer.disable()
	// 		}
	// 		// When the page loads, if the view is down in the bottom, it may have set a few variables
	// 		// $lenis.instance.start()
	// 		is_animating = false
	// 	}

	// 	// Create the actual trigger
	// 	// $ScrollTrigger.create({
	// 	// 	trigger: snapWrapper.value,
	// 	// 	start: "top top",
	// 	// 	pin: true,
	// 	// 	onEnter () {
	// 	// 		enterGate()
	// 	// 	},
	// 	// 	onEnterBack () {
	// 	// 		enterGate()
	// 	// 	},
	// 	// 	onLeave () {
	// 	// 		exitGate()
	// 	// 		current_index = snapSectionsData.length - 1
	// 	// 	},
	// 	// 	onLeaveBack () {
	// 	// 		exitGate()
	// 	// 		current_index = 0
	// 	// 	},
	// 	// 	animation: $gsap.to(snapWrapper.value, {
	// 	// 		y: 0,
	// 	// 		scrub: 1
	// 	// 	})
	// 	// })
	// })

	const colors = [
		'grey',
		'dark'
	]
</script>
/Old script -->