<template>
	<section class="library-showcase">
		<div class="layout-box">
			<div class="w-100 noverflow">
				<div class="showcase-container">
					<div class="flex-center">
						<h4
							class="library-showcase-title"
							v-if="showTitle"
						>
							<span class="lean">Big, bold ideas <br class="lst-break">
								keep our minds soaring</span><br>
							<span class="lst-highlight">
								Explore our innovation dashboard
							</span>
						</h4>
					</div>
					<library-list :static-items-count="3" />
					<div
						class="flex-center showcase-action-row"
						v-if="showViewMore"
					>
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
</template>

<script setup>
	const props = defineProps({
		showTitle: {
			type: Boolean,
			default: true
		},
		showViewMore: {
			type: Boolean,
			default: true
		}
	})
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

			.lean {
				font-weight: 400;
				@include md {
					opacity: 0.5;
					font-size: 40px;
					line-height: 108%;
					display: inline-block;
				}

				@include sm {
					font-size: 30px;
				}
			}

			.lst-highlight {
				font-family: 'Denton';

				@include md {
					font-size: 45px;
					line-height: 130%;
					display: inline-block;
					margin-top: 10px;
				}

				@include sm {
					font-size: 30px;
				}
			}

			.lst-break {
				@include sm {
					display: none;
				}
			}

			// @include sm {
			// 	font-size: 37px;
			// 	line-height: 52px;
			// }
		}
	}

	.showcase-action-row {
		margin-top: 50px;
	}
</style>
<!-- /Library Showcase -->