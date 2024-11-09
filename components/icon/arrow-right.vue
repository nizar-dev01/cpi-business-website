<template>
	<svg
		width="45"
		height="41"
		viewBox="0 0 45 41"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0 21H41"
			:stroke="props.yellow ? '#FFB400' : 'black'"
			stroke-width="3"
		/>
		<path
			d="M23.5 2L42 20.5L23.5 39"
			:stroke="props.yellow ? '#FFB400' : 'black'"
			stroke-width="3"
		/>
	</svg>
</template>

<script setup>
	const props = defineProps({
		yellow: {
			type: Boolean,
			default: false
		}
	})
</script>