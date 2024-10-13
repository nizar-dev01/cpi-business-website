<template>
	<svg
		width="10"
		height="10"
		viewBox="0 0 16 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 13.5L14.3708 1"
			:stroke="props.color || 'white'"
			stroke-width="2"
		/>
		<path
			d="M3.13928 1H14.3708V12"
			:stroke="props.color || 'white'"
			stroke-width="2"
		/>
	</svg>
</template>
<script setup>
	const props = defineProps(['color'])
</script>