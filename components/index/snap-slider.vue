<template>
	<section
		id="snap-slider-wrapper-section"
		ref="snapSliderWrapper"
	>
		<!-- Slides -->
		<div class="snap-content-section">
			<!-- 1 - Slide -->
			<div
				class="snap-element"
				:class="[
					{
						active: _config_pairs[0].is_active
					},
					{
						past: _config_pairs[0].is_past
					}
				]"
				id="snap-slider-slide-1"
			>
				<div class="se-ui-container">
					<img
						src="@/assets/images/snap/bg.jpg"
						alt="Background Image"
						class="slide-img layer-1"
					/>
					<!-- Moving Cards -->
					<div class="cards-container-3d layer-2">
						<div class="cards-cage">
							<img
								src="@/assets/images/snap/slide_1/card_1.png"
								alt="Card 1"
								class="rotate-card rtc-1 abs-full"
								id="slide-1-rotate-card-1"
							/>
							<img
								src="@/assets/images/snap/slide_1/card_2.png"
								alt="Card 2"
								class="rotate-card rtc-2 abs-full"
								id="slide-1-rotate-card-2"
							/>
							<img
								src="@/assets/images/snap/slide_1/card_3.png"
								alt="Card 3"
								class="rotate-card rtc-3 abs-full"
								id="slide-1-rotate-card-3"
							/>
						</div>
					</div>
					<!-- / Moving Cards -->
					<img
						src="@/assets/images/snap/slide_1/fg_block.png"
						alt="Background Image"
						class="slide-img layer-3"
					/>
					<!-- Sliding Text -->
					<div class="seui-sliding-text-container layer-4">
						<horizontal-text
							duration="100"
							:show-nav-cursor="true"
						>
							<template v-slot:subtitle>
								<div class="layout-box">
									<h2 class="hs-subtitle">
										{{ slidingText[0].subtitle }}
									</h2>
								</div>
							</template>
							<div
								class="h-slide-text white"
								@click="goToDetail('design-n-branding', 0)"
							>
								<span>EVENTS</span> <span class="center-dot"></span>
								<span>CONTENT</span> <span class="center-dot"></span>
								<span>DIGITAL</span> <span class="center-dot"></span>
								<span>MEDIA</span> <span class="center-dot"></span>
								<span>EXPERIENCES</span> <span class="center-dot"></span>
							</div>
						</horizontal-text>
					</div>
					<!-- /Sliding Text -->
				</div>
			</div>
			<!-- /1 - Slide -->

			<!-- 2 - Slide -->
			<div
				class="snap-element abs-full"
				id="snap-slider-slide-2"
				:class="[
					{
						active: _config_pairs[1].is_active
					},
					{
						past: _config_pairs[1].is_past
					}
				]"
			>
				<div class="se-ui-container">
					<!-- Background -->
					<img
						src="@/assets/images/snap/bg.jpg"
						alt="Background Image"
						class="slide-img layer-1"
					/>
					<!-- /Background -->

					<!-- Animation Objects -->
					<div class="se-ui-plx-sky-container layer-2">
						<img
							src="@/assets/images/snap/slide_2/cloud.png"
							class="sl2-img-cloud"
							id="slide-2-cloud"
							alt="Clouds"
						>
						<img
							src="@/assets/images/snap/slide_2/gate.png"
							class="sl2-center-main"
							id="slide-2-gate"
							alt="Gate"
						>
						<img
							src="@/assets/images/snap/slide_2/nail.png"
							class="sl2-img-nail"
							alt="Nail"
						>
						<img
							src="@/assets/images/snap/slide_2/rock.png"
							class="sl2-img-rock"
							id="slide-2-rock"
							alt="Rock"
						>
					</div>
					<!-- /Animation Objects -->

					<!-- Sliding Text -->
					<div class="seui-sliding-text-container layer-4">
						<horizontal-text
							duration="100"
							:show-nav-cursor="true"
						>
							<template v-slot:subtitle>
								<div class="layout-box">
									<h2 class="hs-subtitle">
										{{ slidingText[1].subtitle }}
									</h2>
								</div>
							</template>
							<div
								class="h-slide-text white"
								@click="goToDetail('ip-creation', 1)"
							>
								<span>EVENTS</span> <span class="center-dot"></span>
								<span>CONTENT</span> <span class="center-dot"></span>
								<span>DIGITAL</span> <span class="center-dot"></span>
								<span>MEDIA</span> <span class="center-dot"></span>
								<span>EXPERIENCES</span> <span class="center-dot"></span>
							</div>
						</horizontal-text>
					</div>
					<!-- /Sliding Text -->
				</div>
			</div>
			<!-- /2 - Slide -->

			<!-- 3 - Slide -->
			<div
				class="snap-element abs-full"
				id="snap-slider-slide-3"
				:class="[
					{
						active: _config_pairs[2].is_active
					},
					{
						past: _config_pairs[2].is_past
					}
				]"
			>
				<div class="se-ui-container">
					<img
						src="@/assets/images/snap/bg.jpg"
						alt="Background Image"
						class="slide-img layer-1"
					/>
					<div
						class="se-ui-glitch-container layer-2"
						id="slide-3-objects-holder"
					>
						<!-- <img
							src="@/assets/images/snap/slide_3/static.jpg"
							alt="Screen"
							class="sl3-img abs-full screen"
						/> -->
						<div class="tv-set-box">
							<div class="tv-box">
								<img
									src="@/assets/images/snap/screen.png"
									alt="Surface Image"
									class="sl3-tv-screen"
								/>
								<div class="glitch-layer"></div>
								<img
									src="@/assets/images/snap/Tv_only.png"
									alt="Monitor Frame"
									class="sl3-tv-frame"
								/>
							</div>
							<img
								src="@/assets/images/snap/tvstand.png"
								alt="Surface Image"
								class="tvstand"
							/>
						</div>
					</div>
					<!-- Sliding Text -->
					<div class="seui-sliding-text-container layer-4">
						<horizontal-text
							duration="100"
							:show-nav-cursor="true"
						>
							<template v-slot:subtitle>
								<div class="layout-box">
									<h2 class="hs-subtitle">
										{{ slidingText[2].subtitle }}
									</h2>
								</div>
							</template>
							<div
								class="h-slide-text white"
								@click="goToDetail('concept-development', 2)"
							>
								<span>EVENTS</span> <span class="center-dot"></span>
								<span>CONTENT</span> <span class="center-dot"></span>
								<span>DIGITAL</span> <span class="center-dot"></span>
								<span>MEDIA</span> <span class="center-dot"></span>
								<span>EXPERIENCES</span> <span class="center-dot"></span>
							</div>
						</horizontal-text>
					</div>
					<!-- /Sliding Text -->
				</div>
			</div>
			<!-- /3 - Slide -->

			<!-- 4 - Slide -->
			<div
				class="snap-element abs-full"
				id="snap-slider-slide-4"
				:class="[
					{
						active: _config_pairs[3].is_active
					},
					{
						past: _config_pairs[3].is_past
					}
				]"
			>
				<div class="se-ui-container">
					<img
						src="@/assets/images/snap/bg.jpg"
						alt="Background Image"
						class="slide-img layer-1"
					/>
					<!-- Floating Banner -->
					<img
						src="@/assets/images/snap/slide_4/banner.png"
						alt="Floating Banner"
						class="sl4-banner layer-2"
						id="slide-4-banner"
					>
					<!-- / Floating Banner -->
					<img
						src="@/assets/images/snap/slide_1/fg_block.png"
						alt="Background Image"
						class="slide-img layer-3"
						id="slide-4-wall"
					/>
					<!-- Sliding Text -->
					<div class="seui-sliding-text-container layer-4">
						<horizontal-text
							duration="100"
							:show-nav-cursor="true"
						>
							<template v-slot:subtitle>
								<div class="layout-box">
									<h2 class="hs-subtitle">
										{{ slidingText[3].subtitle }}
									</h2>
								</div>
							</template>
							<div
								class="h-slide-text white"
								@click="goToDetail('event-production', 3)"
							>
								<span>EVENTS</span> <span class="center-dot"></span>
								<span>CONTENT</span> <span class="center-dot"></span>
								<span>DIGITAL</span> <span class="center-dot"></span>
								<span>MEDIA</span> <span class="center-dot"></span>
								<span>EXPERIENCES</span> <span class="center-dot"></span>
							</div>
						</horizontal-text>
					</div>
					<!-- /Sliding Text -->
				</div>
			</div>
			<!-- /4 - Slide -->

			<!-- 5 - Slide -->
			<div
				class="snap-element abs-full"
				id="snap-slider-slide-5"
				:class="[
					{
						active: _config_pairs[4].is_active
					},
					{
						past: _config_pairs[4].is_past
					}
				]"
			>
				<div class="se-ui-container">
					<!-- Background -->
					<img
						src="@/assets/images/snap/bg.jpg"
						alt="Background Image"
						class="slide-img layer-1"
					/>
					<!-- /Background -->

					<!-- Animation Objects -->
					<div class="se-ui-plx-sky-container layer-2">
						<div class="typewriter-container abs-full">
							<img
								src="@/assets/images/snap/slide_5/typewriter.png"
								class="sl2-center-main typewriter"
								id="slide-5-typewriter"
								alt="Typewriter"
							>
						</div>
						<img
							src="@/assets/images/snap/slide_2/rock.png"
							class="sl2-img-rock"
							id="slide-5-rock"
							alt="Rock"
						>
					</div>
					<!-- /Animation Objects -->

					<!-- Sliding Text -->
					<div class="seui-sliding-text-container layer-4">
						<horizontal-text
							duration="100"
							:show-nav-cursor="true"
						>
							<template v-slot:subtitle>
								<div class="layout-box">
									<h2 class="hs-subtitle">
										{{ slidingText[4].subtitle }}
									</h2>
								</div>
							</template>
							<div
								class="h-slide-text white"
								@click="goToDetail('content-creation', 4)"
							>
								<span>EVENTS</span> <span class="center-dot"></span>
								<span>CONTENT</span> <span class="center-dot"></span>
								<span>DIGITAL</span> <span class="center-dot"></span>
								<span>MEDIA</span> <span class="center-dot"></span>
								<span>EXPERIENCES</span> <span class="center-dot"></span>
							</div>
						</horizontal-text>
					</div>
					<!-- /Sliding Text -->
				</div>
			</div>
			<!-- /5 - Slide -->
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
			</div>
		</div>
		<!-- /Progress -->
	</section>
</template>
<script setup>
	const config_pairs = ref([
		{
			slide: '#snap-slider-slide-1',
			progress: '#snap-slider-slide-progress-1',
			is_active: true,
			is_past: false
		},
		{
			slide: '#snap-slider-slide-2',
			progress: '#snap-slider-slide-progress-2',
			is_active: false,
			is_past: false
		},
		{
			slide: '#snap-slider-slide-3',
			progress: '#snap-slider-slide-progress-3',
			is_active: false,
			is_past: false
		},
		{
			slide: '#snap-slider-slide-4',
			progress: '#snap-slider-slide-progress-4',
			is_active: false,
			is_past: false
		},
		{
			slide: '#snap-slider-slide-5',
			progress: '#snap-slider-slide-progress-5',
			is_active: false,
			is_past: false
		}
	])
	// slidingText[3].subtitle 

	const slidingText = [
		{
			subtitle: "Design & Branding",
		},
		{
			subtitle: "Bespoke Solutions",
		},
		{
			subtitle: "Consultancy Services",
		},
		{
			subtitle: "Event Management",
		},
		{
			subtitle: "Content Creation",
		},
	]

	const router = useRouter()
	const appStore = useAppStore()
	const goToDetail = (to) => {
		const active_slide = _config_pairs.find(el => el.is_active === true)
		appStore.setActiveSliderIndex(_config_pairs.indexOf(active_slide))
		// appStore.setPageScrollPosition('home', window.scrollY)
		router.push("/services/" + to)
	}

	const snapSliderWrapper = ref()

	// Set the previous sliders as past when the user is coming back from the detail page
	const si = appStore.activeSliderIndex
	const _config_pairs = config_pairs.value
	for (let i = 0; i < si; i++) {
		_config_pairs[i].is_active = false
		_config_pairs[i].is_past = true
	}
	_config_pairs[si].is_past = false
	_config_pairs[si].is_active = true
	// Reset the slide index @ the store
	appStore.setActiveSliderIndex(0)

	let tl;
	onMounted(() => {
		// Initial Setup
		const {
			$ScrollTrigger,
			$gsap,
			$Observer,
			$lenis
		} = useNuxtApp()

		const first = _config_pairs[0]
		const second = _config_pairs[1]
		const third = _config_pairs[2]
		const fourth = _config_pairs[3]
		const fifth = _config_pairs[4]

		tl = $gsap.timeline({
			defaults: {
				duration: 2
			},
			scrollTrigger: {
				trigger: snapSliderWrapper.value,
				start: 'top top',
				end: '+=25000',
				scrub: 2,
				pin: true,
				pinSpacing: true,
				anticipatePin: 1
			}
		})

		const runSlideTransition = (s1, s2) => {
			const is_going_back = tl.scrollTrigger.direction === -1
			if (is_going_back) {
				// Backwards
				s1.is_past = false
				s2.is_active = false
				s1.is_active = true
			} else {
				// Forwards
				s1.is_active = false
				s1.is_past = true
				s2.is_active = true
			}
		}

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
			}
		}
		// Set static values
		tl
			.set('#slide-2-gate', {
				xPercent: -50
			})
			.set('#slide-2-rock', {
				xPercent: -50
			})
			.set('#slide-5-typewriter', {
				xPercent: -50
			})
			.set('#slide-5-rock', {
				xPercent: -50
			}).
			set('#slide-4-banner', {
				xPercent: -50,
				yPercent: -30,
				scale: 0.6
			})

		const wh = window.innerHeight
		const ww = window.innerWidth

		const responsiveValue = (vals = []) => {
			const target = vals.find(el => el.width <= ww) || vals[0]
			return target.value || 0
		}
		// Animation
		tl.

			// First Slide
			add(label[1].start)
			// Slide Animations

			// Card 1 # Pink
			.to('#slide-1-rotate-card-1', {
				rotateX: 360 * 1.1,
				rotateY: -10,
				rotateZ: -2,
				y: responsiveValue([
					{
						value: '-93vh'
					}
				]),
				x: responsiveValue([
					{
						value: '10vw'
					}
				]),
			}, label[1].start)

			// Card 2 # Black
			.to('#slide-1-rotate-card-2', {
				rotateX: 360 * 0.95,
				rotateY: -15,
				rotateZ: -1,
				y: responsiveValue([
					{
						value: '-60vh'
					}
				]),
				x: responsiveValue([
					{
						value: '-20vw'
					},
					{
						width: 755,
						value: '-10vw'
					}
				]),
			}, label[1].start)

			// Card 3
			.to('#slide-1-rotate-card-3', {
				rotateX: 360 * 0.92,
				rotateY: 360 * 0.01,
				rotateZ: 50,
				y: responsiveValue([
					{
						value: '-40vh'
					},
					{
						width: 752,
						value: '-45vh'
					},
				]),
				x: responsiveValue([
					{
						width: 752,
						value: '15vw'
					}
				])
			}, label[1].start)
			// Progress
			.to(
				first.progress,
				{
					width: '100%',
				},
				label[1].start
			)
			// Transition
			.add(() => {
				runSlideTransition(
					first,
					second
				)
			})

			// Second Slide
			.add(label[2].start)

			// Cloud
			.to('#slide-2-cloud', {
				left: '30%'
			}, label[2].start)
			// /Cloud
			// Gate
			.to('#slide-2-gate', {
				scale: 1.3
			}, label[2].start)
			.to('#slide-2-rock', {
				scale: 1.3
			}, label[2].start)
			// /Gate

			.to('#slide-2-cloud', {
				x: '25vw'
			}, label[2].start)

			// Progress
			.to(
				second.progress,
				{
					width: '100%',
				},
				label[2].start
			)
			// Transition
			.add(() => {
				runSlideTransition(
					second,
					third
				)
			})

			// Third Slide
			.add(label[3].start)

			.to('#slide-3-objects-holder', {
				scale: 1.3,
				y: '20%'
			}, label[3].start)

			// Progress
			.to(
				third.progress,
				{
					width: '100%',
				},
				label[3].start
			)
			// Transition
			.add(() => {
				runSlideTransition(
					third,
					fourth
				)
			})

			// Fourth Slide
			.add(label[4].start)
			.to('#slide-4-banner', {
				yPercent: 0,
				scale: 1
			}, label[4].start)
			.to('#slide-4-wall', {
				yPercent: 10
			}, label[4].start)

			// Progress
			.to(
				fourth.progress,
				{
					width: '100%',
				},
				label[4].start
			)
			// Transition
			.add(() => {
				runSlideTransition(
					fourth,
					fifth
				)
			})

			// Fifth Slide
			.add(label[5].start)

			// Animations
			.to(
				'#slide-5-typewriter',
				{
					z: 888,
					y: '15vh',
					delay: 0.5
				},
				label[5].start
			)
			.to(
				'#slide-5-rock',
				{
					yPercent: 150,
					delay: 0.5
				},
				label[5].start
			)

			// Progress
			.to(
				fifth.progress,
				{
					width: '100%',
				},
				label[5].start
			)

	})

	onBeforeUnmount(() => {
		if (tl) {
			tl.kill()
		}
	})
</script>

<style lang="scss" scoped>
	#snap-slider-wrapper-section {
		position: relative;
	}


	.abs-full {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
	}

	.snap-content-section {
		position: relative;
		height: 100svh;
		z-index: 1;
	}

	.snap-element {
		transform: translateY(100%);
		transition: all 0.7s cubic-bezier(0.75, 0.03, 0.36, 1);
		overflow: hidden;

		&.active {
			transform: translateY(0);
		}

		&.past {
			opacity: 0;
			transform: translateY(-20%) scale(1.1);
			border-radius: 50px;
			overflow: hidden;
		}

		.se-ui-container {
			height: 100svh;
			width: 100svw;
			position: relative;

			// 3D in the first slide
			.cards-container-3d {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;

				// flex
				// display: flex;
				// justify-content: center;
				// align-items: flex-end;

				.cards-cage {
					position: absolute;
					left: 50%;
					top: 100%;
					transform: translate(-50%, -50%);

					width: 20vw;
					height: 12vw;

					@include xl {
						width: 30vw;
						height: 20vw;
					}

					@include md {
						width: 35vw;
						height: 25vw;
					}

					position: relative;
					perspective-origin: top;
					perspective: 1700px;
					transform-style: preserve-3d;

					.rotate-card {
						display: block;
						margin: 0;
						backface-visibility: visible;

						object-fit: cover;

						&.rtc-1 {
							transform: translate3d(100px, 0, -200px)
						}

						&.rtc-2 {
							transform: translate3d(-100px, 300px, 0);
						}

						&.rtc-3 {
							transform: translate3d(250px, 500px, -400px)
						}
					}
				}
			}

			.seui-sliding-text-container {
				position: absolute;
				bottom: 70px;
				left: 0;
				right: 0;
				color: white;
				transition: all 0.5s ease-in-out;


				&:hover {
					transform-origin: center;

					span {
						color: rgba(255, 255, 255, 0.01);
						// backdrop-filter: blur(5px);
					}

					span.center-dot::after {
						background: rgba(255, 255, 255, 0.01);
						border: 2px solid white;
					}
				}

				.hs-subtitle {
					font-size: 4.5vh;
					font-weight: 400;
					margin: 0 0 2vh;
				}

				.h-slide-text {
					opacity: 1;
					transition: 1s all ease;
					transform-origin: center;

					&:hover {

						transform: scale(1.05);
					}

					span {
						-webkit-text-stroke: 2px white;
						transition: all 0.5s ease-in-out;

						&::after {
							transition: all 0.5s ease-in-out;
						}
					}
				}
			}

			// Slide 2
			.se-ui-plx-sky-container {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 2;
				height: 100%;
				width: 100%;

				img {
					position: absolute;
					left: 0;
					// top: 0;

					&.sl2-img-cloud {
						height: 60vh;
						top: 10vh;
					}

					&.sl2-center-main {
						height: 85vh;
						top: unset;
						bottom: 0;
						left: 50%;
						// transform: translate(-50%, 0);

						&.typewriter {
							bottom: 15vh;
							height: 60vh;
						}
					}

					&.sl2-img-nail {
						opacity: 0;
					}

					&.sl2-img-rock {
						height: 30vh;
						top: unset;
						bottom: -7vh;
						left: 50%;
						// transform: translate(-50%, 0) rotateZ(-3deg);
					}
				}
			}

			// Slide 3
			.se-ui-glitch-container {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				overflow: hidden;

				.sl3-img {
					object-fit: cover;

					&.screen {
						transform: scale(1.01)
					}
				}

				.tv-set-box {
					display: flex;
					flex-direction: column;
					align-items: center;

					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;

					img.tvstand {
						width: 100%;
						height: auto;
					}
				}

				.tv-box {
					height: 60vh;
					width: 55vh;
					overflow: hidden;
					position: relative;
					transform: translate(0, 10px);

					.sl3-tv-frame {
						height: 100%;
						width: 100%;
						position: relative;
					}

					.sl3-tv-screen {
						position: absolute;
						left: 7%;
						top: 5%;
						object-fit: cover;
						width: 88%;
						height: 69%;
					}
				}

				.glitch-layer {
					background-image: url(@/assets/images/snap/slide_3/glitch.webp);
					background-size: 700px;
					opacity: 0.4;
					mix-blend-mode: color;

					position: absolute;
					left: 20px;
					right: 20px;
					top: 20px;
					bottom: 20px;
				}
			}

			// Slide 4
			.sl4-banner {
				position: absolute;
				left: 50%;
				top: 0;
				height: 80vh;
			}

			// Side 5
			.typewriter-container {
				transform-style: preserve-3d;
				transform-origin: center;
				perspective: 1000px;
				overflow: hidden;
			}


			.layer-1 {
				z-index: 1;
			}

			.layer-2 {
				z-index: 2;
			}

			.layer-3 {
				z-index: 3;
			}

			.layer-4 {
				z-index: 4;
			}

			.slide-img {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;

				&.mv-card {
					left: 50%;
					bottom: 0;
					height: 200px;
					width: 300px;

					// &.mvc-1 {
					// 	// transform:
					// 	// 	translate(-38px, -324px) rotateX(48deg) rotateY(10deg)
					// }

					// &.mvc-2 {
					// 	// transform:
					// 	// 	translate(-300px, -462px) rotateX(18deg) rotateY(-20deg);
					// }

					// &.mvc-3 {
					// 	// transform: translate(-409px, -225px) rotateX(34deg) rotateY(-24deg)
					// }
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
		bottom: 0;
		width: 100%;
		padding-bottom: 50px;
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
		height: 2px;
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