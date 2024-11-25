<template>
	<main
		class="bg-black"
		id="careers-page-main"
	>
		<careers-hero />
		<careers-openings />
		<careers-team />
	</main>
</template>
<script setup>
	useHead({
		title: "CPI Business | Careers"
	})

	const appStore = useAppStore()
	onBeforeMount(() => {
		appStore.setPageThemeSelector("yellow")
	})

	onBeforeRouteLeave(() => {
		appStore.setPageThemeSelector(null)
	})
</script>

<style lang="scss" scoped>
	#careers-page-main {
		:deep(*) {
			color: $yellow;
		}
	}

	:deep(hr.section-divider) {
		width: 95%;
		margin: 20vh auto;
		border: none;
		border-bottom: 1px solid #ffffffd2;

		&.dim {
			opacity: 0.2;
		}

		@include lg {
			margin-bottom: 15vh;
			margin-top: 15vh;
		}

		@include sm {
			margin-bottom: 10vh;
			margin-top: 10vh;
		}
	}


	:deep(.container) {
		width: 100%;

		.row {
			margin: -10px;
			display: flex;
			flex-wrap: wrap;

			.col {
				padding: 10px;

				&.left {
					width: 40%;

					@include sm {
						width: 100%
					}
				}

				&.right {
					width: 60%;

					@include sm {
						width: 100%
					}
				}
			}

			@include sm {
				flex-direction: column;
			}
		}
	}

	:deep(.subtitle) {
		margin: 0;
		font-size: 33px;
		font-weight: 500;
		font-family: 'Denton';

		@include sm {
			font-size: 25px;
		}
	}

	:deep(.content) {
		margin: 0;
		font-size: 33px;
		line-height: 54px;
		font-weight: 400;
		max-width: 90%;

		@include md {
			font-size: 28px;
			line-height: 170%;
		}

		@include sm {
			font-size: 24px;
			line-height: 170%;
		}
	}
</style>