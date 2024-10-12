<template>
	<div
		class="grow-dot-section"
		:class="props.theme"
		ref="containerBox"
	>
		<div
			class="grow-dot"
			ref="growDot"
		></div>
	</div>
</template>
<script setup>

	const props = defineProps(['theme'])
	const containerBox = ref()
	const growDot = ref()

	onMounted(() => {
		const {
			$gsap
		} = useNuxtApp()

		const _container = containerBox.value
		const _dot = growDot.value

		const _w = window.innerWidth
		const _h = window.innerHeight

		const _v_w = Math.max(_w, _h)
		const _v_h = Math.min(_w, _h)

		const _opp = Math.sqrt(_v_w ** 2 + _v_h ** 2)



		$gsap.to(_dot, {
			width: _opp,
			height: _opp,
			scrollTrigger: {
				pin: true,
				scrub: 1,
				trigger: _container,
				start: "top top",
				markers: true
			}
		})
	})
</script>
<style lang="scss">
	.grow-dot-section {
		height: 100vh;
		width: 100vw;
		background: black;
		position: relative;
		overflow: hidden;

		&.dark {
			background: white;

			.grow-dot {
				background: black;
				box-shadow: 0 0 30px 30px black;
			}
		}
	}

	.grow-dot {
		height: 10vh;
		width: 10vh;
		background: white;
		border-radius: 50%;
		box-shadow: 0 0 30px 30px white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>