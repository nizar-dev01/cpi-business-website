<template>
	<span
		v-if="props.text"
		ref="parentSpan"
		:class="[props['container-class']]"
	>
		<span
			v-for="word in chars"
			:class="[props.wordClass, 'splitter-text-word']"
		>
			<span
				v-for="char in word"
				:class="[props.characterClass, (props['scroll-reveal'] ? 'scroll-reveal-character' : '')]"
				ref="characterSpans"
			>
				{{ char }}
			</span>&nbsp;
		</span>
	</span>
</template>
<script setup>
	const props = defineProps([
		'text',
		'expose',
		'container-class',
		'character-class',
		'word-class',
		'scroll-reveal',
		'stagger',
		'start',
		'end',
		'duration'
	])

	const chars = ref(props.text.split(" ").map(el => el.split("")))

	const elements = ref({
		container: null,
		characters: null
	})

	const parentSpan = ref(null)
	const characterSpans = ref(null)

	onMounted(() => {
		if (props.expose) {
			elements.value.container = parentSpan.value
			elements.value.characters = characterSpans.value
		}

		const {
			$gsap
		} = useNuxtApp()

		if (props.scrollReveal) {
			const _characters = characterSpans.value
			$gsap.set(_characters, {
				y: 300,
				opacity: 0
			})

			$gsap.to(_characters, {
				scrollTrigger: {
					trigger: parentSpan.value,
					start: props.start || "top bottom",
					end: props.end || "top top",
					toggleActions: props.toggleActions || "play none none reverse",
					// scrub: 1,
					// once: true,
					// markers: true,
				},
				duration: props.duration || 0.5,
				y: 0,
				opacity: 1,
				stagger: props.stagger === undefined ? 0.01 : props.stagger
			})
		}
	})

	defineExpose({ elements })
</script>

<style scoped lang="scss">
	span {
		display: inline-block;

		&.splitter-text-word {
			white-space: nowrap;
		}
	}
</style>