<template>
	<div
		class="accordion-container"
		ref="accordionContainer"
	>
		<div
			class="item-container"
			v-for="item in items"
		>
			<div
				class="title-box"
				@click="toggleItem(item)"
			>
				<h3 class="item-title">
					{{ item.title }}
				</h3>

				<div class="toggler-box">
					<icon-arrow-down-circle class="accordion-toggle-icon down" />
					<icon-arrow-up-circle-white class="accordion-toggle-icon up" />
				</div>
			</div>
			<div
				class="content-box-wrapper"
				:style="`--height: ${item.height}px`"
			>
				<div
					class="content-box"
					ref="contentBox"
				>
					<p class="item-content">
						{{ item.content }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const items = ref([
		{
			title: "IP Creation & Strategic Thinking",
			content: "Whether it's a corporate conference, product launch, or social gathering, count on us to deliver an experience that wows.",
			height: 0,
			currentHeight: 0
		},
		{
			title: "Event Production",
			content: "Whether it's a corporate conference, product launch, or social gathering, count on us to deliver an experience that wows.",
			height: 0,
			currentHeight: 0
		},
		{
			title: "Concept Development & Management",
			content: "Whether it's a corporate conference, product launch, or social gathering, count on us to deliver an experience that wows.",
			height: 0,
			currentHeight: 0
		},
		{
			title: "Content Creation",
			content: "Whether it's a corporate conference, product launch, or social gathering, count on us to deliver an experience that wows.",
			height: 0,
			currentHeight: 0
		},
		{
			title: "Design & Branding ",
			content: "Whether it's a corporate conference, product launch, or social gathering, count on us to deliver an experience that wows.",
			height: 0,
			currentHeight: 0
		},
		{
			title: "Digital Solutions",
			content: "Whether it's a corporate conference, product launch, or social gathering, count on us to deliver an experience that wows.",
			height: 0,
			currentHeight: 0
		}
	])

	const accordionContainer = ref()

	const contentBox = ref()
	onMounted(() => {
		contentBox.value.forEach((cb, i) => {
			const height = cb.getBoundingClientRect().height
			items.value[i].height = height
		})

		const _container = accordionContainer.value
		const _ch = _container.clientHeight

		_container.style.maxHeight = `${_ch}px`
	})

	const toggleItem = (item) => {
		// Disable other items
		items.value.forEach(_item => {
			if (_item !== item) {
				_item.currentHeight = 0
			}
		})

		if (!item) return
		// Toggle the target
		if (item.currentHeight === item.height) {
			item.currentHeight = 0
		} else {
			item.currentHeight = item.height
		}
	}
</script>
<style lang="scss" scoped>
	.accordion-container {
		width: 100;
	}

	.item-container {
		padding: 30px;
		transition: all 0.3s ease-in;
		border-radius: 10px;

		&:hover {
			background: rgba(255, 255, 255, 0.1);

			.content-box-wrapper {
				height: var(--height);
			}

			.accordion-toggle-icon.up {
				opacity: 1;
			}
		}

		@include sm {
			padding-bottom: 15px;
		}
	}

	.title-box {
		position: relative;
	}

	.toggler-box {
		position: absolute;
		right: 0;
		top: 0;

		height: 22px;
		width: 22px;
		cursor: pointer;

		.accordion-toggle-icon {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 1;

			&.up {
				opacity: 0;
				transition: opacity 0.3s ease-in-out;
				z-index: 2;
			}
		}
	}

	.item-title {
		max-width: 60%;
		font-size: 33px;
		margin: 0;
		user-select: none;
		cursor: pointer;
		font-weight: 500;

		@include md {
			font-size: 28px;
		}

		@include sm {
			font-size: 25px;
		}
	}

	.content-box-wrapper {
		overflow: hidden;
		transition: all 0.3s ease-out;
		height: 0;
	}

	.content-box {
		padding: 20px 0;
	}

	.item-content {
		max-width: 80%;
		font-size: 23px;
		line-height: 140%;
		margin: 0;
		user-select: none;

		@include sm {
			font-size: 20px;
		}
	}
</style>