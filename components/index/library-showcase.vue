<template>
	<section class="library-showcase">
		<div class="layout-box">
			<div class="w-100 noverflow">
				<div class="showcase-container">
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
								<h3 class="sli-title">
									Rapid Prototyping in Event Visualisation
								</h3>
							</div>
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
	.showcase-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.library-showcase {
		margin-bottom: 200px;

		.library-showcase-title {
			font-size: 53px;
			font-weight: 700;
			line-height: 73px;
			text-align: center;
			margin: 0 0 100px;

			.lst-highlight {
				font-family: 'Newyork';
			}

			@include md {
				font-size: 50px;
				line-height: 68px;
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
			flex-grow: 1;

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
			max-width: 450px;
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
	}

	.showcase-action-row {
		margin-top: 50px;
	}
</style>
<!-- /Library Showcase -->