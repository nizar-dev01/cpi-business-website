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
					<library-list :static-items-count="3" />
					<div class="flex-center showcase-action-row">
						<button-sq
							text="Read More"
							class="rounded showcase-action-bt"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

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
	}

	.showcase-action-row {
		margin-top: 50px;
	}
</style>
<!-- /Library Showcase -->