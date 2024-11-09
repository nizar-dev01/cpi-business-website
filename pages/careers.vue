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
				}

				&.right {
					width: 60%;
				}
			}
		}
	}

	:deep(.subtitle) {
		margin: 0;
		font-size: 33px;
		font-weight: 500;
		font-family: 'Newyork';
	}

	:deep(.content) {
		margin: 0;
		font-size: 33px;
		line-height: 54px;
		font-weight: 400;
		max-width: 90%;
	}
</style>