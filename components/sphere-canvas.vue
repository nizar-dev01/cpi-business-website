<template>
	<canvas id="sphereArtCanvas"></canvas>
</template>
<script setup>
	import { SpheresArt } from '@/three/spheres'
	onMounted(() => {
		const canvas = sphereArtCanvas
		const _sa = new SpheresArt(canvas)
	})
</script>
<style lang="scss">
	#sphereArtCanvas {
		display: block;
	}
</style>