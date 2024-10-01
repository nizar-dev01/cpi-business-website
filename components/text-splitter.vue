<template>
	<span
		v-if="props.text"
		ref="parentSpan"
		:class="[props['container-class']]"
	>
		<span
			v-for="char in chars"
			ref="childSpans"
			:class="[props['character-class']]"
		>
			{{ char }}
		</span>
	</span>
</template>
<script setup>
	const props = defineProps([
		'text',
		'expose',
		'container-class',
		'character-class'
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
	})

	defineExpose({ elements })
</script>