<template>
	<section
		class="snap-wrapper"
		ref="snapWrapper"
	>
		<div
			class="snap-element"
			:class="{ last: i >= snapSectionsCount }"
			v-for="i in snapSectionsCount"
			ref="snapDataElements"
		>
			<div :class="['se-ui-container', colors[i % 2]]">
				<h1>{{ i }}</h1>
			</div>
		</div>
		<div class="progress-bars-section">
			<div class="progress-bars-container">
				<div
					class="pb-progress-holder"
					v-for="i in snapSectionsCount"
				>
					<div
						class="pb-progress-line"
						ref="snapProgressElements"
					></div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	const snapSectionsCount = 6
	// Components needed for the animation
	const snapWrapper = ref()
	const snapDataElements = ref()
	const snapProgressElements = ref()

	onMounted(() => {
		// Initial Setup
		const {
			$ScrollTrigger,
			$gsap,
			$Observer,
			$lenis
		} = useNuxtApp()

		// Global Animation Variables
		// let current_index = 0
		// let is_animating = false

		// Set the z-index and y-position of the first element, for when the UI is first loaded. It will otherwise be shown in the default stacking context, namely the last item on the top
		// const first_element = snapDataElements.value[current_index]

		// $gsap.set(first_element, {
		// 	zIndex: 1,
		// 	y: 0
		// })
		// Set the progress of the first item. (It is static, as the item would already be visible in the view)
		// const first_progress = snapProgressElements.value[current_index]

		// $gsap.set(first_progress, {
		// 	width: "100%"
		// })

		// Function that decides whether a movement (scroll/wheel/etc) should be considered as the exit of the animation
		// const exitAnimationLock = (isFromUp, index = current_index) => {
		// 	if (is_animating) return
		// 	const loopEnd = snapSectionsData.length - 1

		// 	// Whether it's time to exit at either ends
		// 	const exitAtTail = index === loopEnd && isFromUp
		// 	const exitAtHead = index === 0 && !isFromUp

		// 	// If it's exit-time
		// 	const timeToExit = exitAtHead || exitAtTail
		// 	if (timeToExit) {
		// 		// Re-enable lenis
		// 		// $lenis.instance.start()
		// 	}
		// }

		// Function that controls the navigation between slides
		// const navigateSection = (direction) => {
		// 	// Return if the animation is actively running
		// 	if (is_animating) return

		// 	const new_index = current_index + direction

		// 	// Re Enable scrolling when the slides reach the end or beginning in reverse navigation
		// 	if (new_index < 0 || new_index >= snapSectionsData.length) {
		// 		// return $lenis.instance.start()
		// 	} else {
		// 		// Proceed to animate the slider
		// 		const tl = $gsap.timeline({
		// 			defaults: {
		// 				duration: 1,
		// 				ease: "power1.inOut",
		// 			}
		// 		})

		// 		// Select the main slide-box elements
		// 		const currentElement = snapDataElements.value[current_index]
		// 		const newElement = snapDataElements.value[new_index]

		// 		// Select the progress bar elements
		// 		const currentProgress = snapProgressElements.value[current_index]
		// 		const newProgress = snapProgressElements.value[new_index]

		// 		is_animating = true

		// 		// Variables for the slide animation
		// 		const newElementYStart = 100 * direction
		// 		const currentElementYEnd = newElementYStart * -1

		// 		// Variables for the progress animation
		// 		const isFromUp = direction === 1
		// 		const endProgressWidth = isFromUp ? "100%" : "0%"

		// 		// #######################################
		// 		// The Animation Timeline
		// 		// #######################################
		// 		const startLabel = "snapSliderAnimationStartPoint"

		// 		// Set the z-index of the currently visible element for stacking items properly
		// 		// This lable is used to start the animations at the same time in the beginning
		// 		tl.set(currentElement, {
		// 			zIndex: 1
		// 		})
		// 			// Set the initial position of the incoming element
		// 			.set(
		// 				newElement, {
		// 				zIndex: 2,
		// 				yPercent: newElementYStart
		// 			})
		// 			// Add a label to indicate the starting time for the coming animations
		// 			.add(startLabel)
		// 			// Remove the current element from the viewport
		// 			.to(currentElement, {
		// 				yPercent: currentElementYEnd
		// 			}, startLabel)
		// 			// Bring the new element to the viewport
		// 			.to(newElement, {
		// 				yPercent: 0,
		// 				onComplete () {
		// 					is_animating = false
		// 				},
		// 			}, startLabel)
		// 			// Increase/Decrease progressbar width
		// 			.to(isFromUp ? newProgress : currentProgress, {
		// 				width: endProgressWidth
		// 			}, startLabel)

		// 		// Update the current index, as the elements are re-positioned in the animation
		// 		current_index = new_index
		// 	}
		// }

		// let _observer
		// const createObserver = () => {
		// 	return $Observer.create({
		// 		target: window, // can be any element (selector text is fine)
		// 		type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
		// 		onUp () {
		// 			navigateSection(- 1)
		// 			exitAnimationLock(false, current_index)
		// 		},
		// 		onDown () {
		// 			navigateSection(1)
		// 			exitAnimationLock(true, current_index)
		// 		},
		// 	});
		// }

		// Create the scroll trigger to activate the animations when the component gets to the viewport

		// To call on enter - forward and backward
		const enterGate = ({ direction }) => {
			console.log("Enter ", direction)
		}

		// To call on exit - forward and backward
		const exitGate = ({
			direction
		}) => {
			console.log("Exit ", direction)
		}

		// Create the actual trigger
		$ScrollTrigger.create({
			trigger: snapWrapper.value,
			start: "top top",
			// pin: true,
			onEnter () {
				enterGate({
					direction: "forward"
				})
			},
			onEnterBack () {
				enterGate({
					direction: "backward"
				})
			},
			onLeave () {
				exitGate({
					direction: "forward"
				})
			},
			onLeaveBack () {
				exitGate({
					direction: "backward"
				})
			}
		})
	})

	const colors = [
		'grey',
		'dark'
	]
</script>

<!-- Old script
<script setup>
	// Components needed for the animation
	// const snapWrapper = ref()
	// const snapDataElements = ref()
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
	// 	const first_element = snapDataElements.value[current_index]

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
	// 			const currentElement = snapDataElements.value[current_index]
	// 			const newElement = snapDataElements.value[new_index]

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

<style lang="scss">

	.snap-wrapper {
		position: relative;
	}

	.snap-element {
		height: 300svh;
		width: 100%;
		margin: 0;
		position: sticky;
		top: 0;

		&.last {
			height: 100svh;
		}

		.se-ui-container {
			height: 100svh;
			position: sticky;
			top: 0;

			&.grey {
				background: #838383;
			}

			&.dark {
				background: #3d3d3d;
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
		position: sticky;
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