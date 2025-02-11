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

let tl;
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
	setTimeout(() => {
		tl = $gsap.to(_dot, {
			width: _opp,
			height: _opp,
			scrollTrigger: {
				pin: true,
				scrub: true,
				trigger: _container,
				start: "top top"
			}
		})
	}, 500)
})

onBeforeUnmount(() => {
	if (tl && tl.kill) {
		tl.kill()
	}
})
</script>
<style lang="scss">
@keyframes pulse-light {
	0% {
		box-shadow: 0 0 7vh 9vh white;
	}

	50% {
		box-shadow: 0 0 7vh 12vh white;
	}

	0% {
		box-shadow: 0 0 7vh 9vh white;
	}
}

@keyframes pulse-dark {
	0% {
		box-shadow: 0 0 7vh 9vh black;
	}

	50% {
		box-shadow: 0 0 7vh 12vh black;
	}

	0% {
		box-shadow: 0 0 7vh 9vh black;
	}
}

.grow-dot-section {
	height: 100vh;
	width: 100vw;
	position: relative;
	overflow: hidden;

	&.dark {
		background: white;

		.grow-dot {
			background: black;
			box-shadow: 0 0 7vh 9vh black;
			animation: pulse-dark 3s infinite;
		}
	}

	&.light {
		.grow-dot {
			animation: pulse-light 3s infinite;
		}
	}

	&.transparent-light {
		background: transparent;
	}

	&.transparent-dark {
		background: transparent;
	}
}

.grow-dot {
	height: 15vh;
	width: 15vh;
	background: white;
	border-radius: 50%;
	box-shadow: 0 0 7vh 9vh white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>