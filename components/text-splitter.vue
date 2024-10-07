<template>
	<span
		v-if="props.text"
		ref="parentSpan"
		:class="[props['container-class']]"
	>
		<span
			v-for="char in chars"
			ref="childSpans"
			:class="[props['character-class'], (props['scroll-reveal'] ? 'scroll-reveal-character' : '')]"
		>
			{{ char === " " ? '&nbsp' : char }}
		</span>
	</span>
</template>
<script setup>
	const props = defineProps([
		'text',
		'expose',
		'container-class',
		'character-class',
		'scroll-reveal'
	])

	const chars = ref(props.text.split(""))


	const elements = ref({
		container: null,
		characters: null
	})

	const parentSpan = ref(null)
	const childSpans = ref(null)

	onMounted(() => {
		if (props.expose) {
			elements.value.container = parentSpan.value
			elements.value.characters = childSpans.value
		}

		const {
			$gsap
		} = useNuxtApp()

		if (props['scrollReveal']) {
			console.log("RRRRR")
			const _characters = childSpans.value
			$gsap.set(_characters, {
				y: 50,
				opacity: 0
			})

			$gsap.to(_characters, {
				scrollTrigger: {
					trigger: parentSpan.value,
					start: "top 90%",
					end: "top 40%",
					// scrub: 1,
					// markers: true,
					once: true
				},
				duration: 0.4,
				y: 0,
				opacity: 1,
				stagger: 0.01
			})
		} else {
			console.log(props)
		}
	})

	defineExpose({ elements })
</script>

<style scoped>
	span {
		display: inline-block;
	}
</style>