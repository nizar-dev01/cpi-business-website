<template>
	<div class="library-row">
		<div
			class="library-col"
			v-for="li in props.staticItemsCount"
		>
			<div class="library-item">
				<img
					:src="`https://picsum.photos/536/354?rand=${Math.random()}`"
					alt=""
					class="sli-image"
				/>
				<h3 class="sli-title">
					Rapid Prototyping in Event Visualisation
				</h3>
			</div>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps([
		'staticItemsCount'
	])
</script>
<style lang="scss">


	.library-row {
		display: flex;
		flex-wrap: wrap;
		// justify-content: center;
		margin: 0 -15px;
	}

	.library-col {
		padding: 0 15px;
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

	.library-item {
		width: 100%;
		margin: 0 auto;
	}

	.sli-image {
		width: 100%;
		object-fit: cover;
		border-radius: 15px;
		display: block;
		height: 350px;
		margin-bottom: 30px;
	}

	.sli-title {
		font-size: 23px;
		font-weight: 500;
		line-height: 38px;
	}
</style>