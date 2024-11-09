<template>
	<svg
		width="22"
		height="22"
		viewBox="0 0 22 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="11"
			cy="11"
			r="11"
			fill="#D9D9D9"
			fill-opacity="0.1"
		/>
		<path
			d="M11.0001 6.00006L11.1768 15.1631"
			:stroke="color"
		/>
		<path
			d="M16.0547 11.0132L11.0351 16.0328L6.04383 11.0416"
			:stroke="color"
		/>
	</svg>
</template>

<script setup>
	const appStore = storeToRefs(useAppStore())
	const color = computed(() => appStore.pageTheme.value)
</script>