<template>
	<section
		class="clearfix"
		id="services-library-showcase-section"
	>
		<section class="library-showcase">
			<div class="layout-box">
				<div class="w-100 noverflow">
					<div class="showcase-container">
						<div class="flex-center">
							<h4 class="library-showcase-title">
								Be Inspired by<br>
								<span class="lst-highlight">
									Our Insightful Journal
								</span>
							</h4>
						</div>
						<library-list :static-items-count="3" />
						<div class="flex-center showcase-action-row">
							<button-sq
								text="Read More"
								class="rounded showcase-action-bt"
								@click.prevent="$router.push('/blog')"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
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
		margin: 200px 0;

		.library-showcase-title {
			font-size: 53px;
			font-weight: 700;
			line-height: 73px;
			text-align: center;
			margin: 0 0 100px;

			.lst-highlight {
				font-family: 'Denton';
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