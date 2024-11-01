<template>
	<div class="library-row">
		<div
			class="library-col"
			v-for="li in props.staticItemsCount"
		>
			<blog-card
				tag="Blog Subject"
				title="Rapid Prototyping in Event Visualisation"
				:image="`https://picsum.photos/536/354?rand=${Math.random()}`"
				author="John Doe"
				duration="2 Min"
			/>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps([
		'staticItemsCount'
	])
</script>
<style lang="scss" scoped>
	$rowspace: 5px;

	.library-row {
		display: flex;
		flex-wrap: wrap;
		// justify-content: center;
		margin: -$rowspace;
	}

	.library-col {
		padding: $rowspace;
		box-sizing: border-box;
		width: 33.333%;
		// flex-grow: 1;

		@include md {
			width: 100%;
			margin-bottom: 50px;

			&:last-of-type {
				margin-bottom: 0;
			}
		}
	}
</style>