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
							@click="selectTag(tag)"
						>
							{{ tag.text }}
						</div>
					</div>
					<div class="tags-col">

						<div
							class="tag"
							@click="selectTag()"
						>
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

const tags = inject('tags')
const filterCallBacks = inject('filter-callbacks', [])

const selectTag = (tag) => {
	if (!tag || tag.value === 'show-all') {
		tags.value.forEach(t => {
			if (t.value === 'show-all') {
				t.selected = true
			} else {
				t.selected = false
			}
		})
	} else {
		const showAllTag = tags.value.find(t => t.value === 'show-all')
		showAllTag.selected = false
		tag.selected = !tag.selected
	}

	// Run the filter callback
	const filters = tags.value.filter(t => t.selected)
	filterCallBacks.forEach(fn => {
		if (typeof fn === 'function') {
			fn(filters)
		}
	})
}
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