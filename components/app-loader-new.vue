<template>
	<div
		class="loader flex-center"
		ref="loaderContainer"
	>
	</div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
	.loader {
		height: 100vh;
		width: 100vw;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: black;
	}
</style>