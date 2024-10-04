<template>

	<section class="library-showcase">
		<div class="layout-box">
			<div class="flex-center">
				<h4 class="library-showcase-title">
					Ideas that are <br>
					keeping us inspired <br>
					<span class="lst-highlight">
						Explore Our Ideas
					</span>
				</h4>
			</div>
			<div class="library-row">
				<div
					class="library-col"
					v-for="li in libraryItems"
				>
					<div class="library-item">
						<img
							:src="`https://picsum.photos/536/354?rand=${Math.random()}`"
							alt=""
							class="sli-image"
						/>
					</div>
					<h3 class="sli-title">
						Rapid Prototyping in Event Visualisation
					</h3>
				</div>
			</div>
			<div class="flex-center showcase-action-row">
				<button class="btn-sq rounded showcase-action-bt">
					<span class="bt-text">
						Read More
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
</template>
<script setup>
	const libraryItems = [
		{},
		{},
		{}
	]
</script>

<!-- Library Showcase -->
<style lang="scss" scoped>
	.library-showcase {
		.library-showcase-title {
			font-size: 53px;
			font-weight: 700;
			line-height: 73px;
			text-align: center;

			.lst-highlight {
				font-family: 'Newyork';
			}
		}

		.library-row {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 -15px;
		}

		.library-col {
			padding: 0 15px;
			box-sizing: border-box;
			width: 33.333%;
			flex: 1;
		}

		.library-item {
			width: 100%;
		}

		.sli-image {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: 15px;
			display: block;
			height: 530px;
			margin-bottom: 50px;
		}

		.sli-title {
			font-size: 38px;
			font-weight: 500;
			line-height: 61px;
		}
	}
</style>
<!-- /Library Showcase -->