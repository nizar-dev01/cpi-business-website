<template>
	<section id="portfolio-hero-section">
		<div class="layout-box">
			<h1 class="page-title pgt-portfolio">
				Work
			</h1>

			<div class="tags-container">
				<div class="tags-row">
					<div
						class="tags-col"
						v-for="tag in tags"
					>
						<div
							class="tag"
							:class="{ selected: tag.selected }"
							@click="tag.selected = !tag.selected"
						>
							{{ tag.text }}
						</div>
					</div>
					<div class="tags-col">

						<div class="tag">
							<icon-reset-round />
							Reset
						</div>
					</div>
				</div>
			</div>
			<hr class="portfolio-header-divider" />
		</div>
	</section>
</template>
<script setup>
	const tags = ref([
		{
			text: 'Show all',
			selected: false,
		},
		{
			text: 'Event Management',
			selected: false,
		},
		{
			text: 'Design & Branding',
			selected: false,
		},
		{
			text: 'Consultancy Services',
			selected: false,
		},
		{
			text: 'Content Creation',
			selected: false,
		},
		{
			text: 'Digital Solution',
			selected: false,
		},
		{
			text: 'Bespoke Solutions',
			selected: false,
		}
	])
</script>
<style lang="scss">
	#portfolio-hero-section {
		padding-top: 150px;
	}

	.portfolio-header-divider {
		border-top: 0;
		border-bottom: 1px solid #363636;
		margin-top: 50px;
		@include md {
			margin: 10px 0 0;
		}
	}

	.pgt-portfolio {
		font-size: 81px;
		margin: 20px 0 40px;

		@include md {
			font-size: 40px;
			margin: 0;
		}
	}

	.tags-container {
		width: 100%;
		max-width: 800px;
		overflow: hidden;

		@include md {
			display: none;
		}
	}

	.tags-row {
		display: flex;
		flex-wrap: wrap;
		margin: -10px;
	}

	.tags-col {
		margin: 10px;
	}

	.tag {
		line-height: 35px;
		padding: 0 15px;
		transition: all 0.3s ease-in-out;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border-radius: 18px;
		display: inline-block;
		cursor: pointer;
		user-select: none;

		&.selected {
			color: #0F0F0F;
			background: white;

			&:hover {
				background: #ffffffa1;
			}
		}

		&:hover {
			background: rgba(255, 255, 255, 0.05);
		}
	}
</style>