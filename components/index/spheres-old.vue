<template>
	<div
		class="section full anime-ball"
		ref="sectionContainer"
	>
		<div
			:id="targetID"
			class="animation-window-container"
		></div>
	</div>
</template>
<script setup>
	// preload images
	import __images__ from "@/assets/images"

	const basePath = window.location.href.split('//')[1].includes('/cpi-public/') ? "/cpi-public" : ""
	if (import.meta.client) {
		__images__.forEach(url => {
			const img = new Image();
			img.src = basePath + "/" + url;
		})
	}

	import Lottie from 'lottie-web';

	const props = defineProps(['direction',
		'uid',
		'start',
		'end',
		'pin',
		'pin-for-finish',
		'stmarkers'
	])
	const targetID = props.uid || '' + 'animationWindow'

	const sectionContainer = ref()

	onMounted(() => {
		const {
			$gsap: gsap,
			$ScrollTrigger: ScrollTrigger
		} = useNuxtApp()

		const lottie = Lottie

		function LottieScrollTrigger (vars) {
			let playhead = { frame: 0 },
				target = gsap.utils.toArray(vars.target)[0],
				// speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
				st = {
					trigger: target,
					pin: props.pin !== undefined ? props.pin : true,
					start: props.start || "top top",
					end: props.end || "bottom top",
					scrub: true,
					markers: props.stmarkers || false,
					pinSpacing: true,
					ease: 'none',
				},
				ctx = gsap.context && gsap.context(),
				animation = lottie.loadAnimation({
					container: target,
					renderer: vars.renderer || "svg",
					loop: false,
					autoplay: false,
					path: vars.path,
					rendererSettings: vars.rendererSettings || {
						preserveAspectRatio: "xMidYMid slice",
					},
				});
			for (let p in vars) {
				// let users override the ScrollTrigger defaults
				st[p] = vars[p];
			}
			animation.addEventListener("DOMLoaded", function () {
				let createTween = function () {
					if (vars.direction === 'reverse') {
						animation.goToAndStop(animation.totalFrames - 1, true)
						animation.frameTween = gsap.from(playhead, {
							frame: animation.totalFrames - 1,
							ease: "none",
							onUpdate: () => animation.goToAndStop(playhead.frame, true),
							scrollTrigger: st,
						});
					} else {
						animation.frameTween = gsap.to(playhead, {
							frame: animation.totalFrames - 1,
							ease: "none",
							onUpdate: () => animation.goToAndStop(playhead.frame, true),
							scrollTrigger: st,
						});
					}

					return () => animation.destroy && animation.destroy();
				};

				ctx && ctx.add ? ctx.add(createTween) : createTween();
				// in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
				ScrollTrigger.sort();
				ScrollTrigger.refresh();
			});
			return animation;
		}

		if (props.pinForFinish) {
			ScrollTrigger.create({
				trigger: sectionContainer.value,
				start: 'top top',
				end: 'bottom top',
				// markers: true,
				pin: true
			});
		}

		LottieScrollTrigger({
			target: "#" + targetID,
			// path: "https://lottie.host/cb2010f5-8be1-45b8-a33c-b18f3dccd8e1/GpMOdzAqTg.json",
			path: basePath + "/animation_entry/Ball_Seq 2.json",
			speed: "slow",
			scrub: true, // seconds it takes for the playhead to "catch up",
			direction: props.direction || null
			// you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
			// you can pass in a "timeline" that has existing animations in it, and LottieScrollTrigger will play that alongside the Lottie animation
			// you can pass a startFrameOffset and/or endFrameOffset to cause the playhead to start/end at a different frame.
		});
	})
</script>
<style lang="scss" scoped>
	.animation-window-container {
		height: 100vh !important;
	}

	.full {
		min-height: 100vh;
	}
</style>