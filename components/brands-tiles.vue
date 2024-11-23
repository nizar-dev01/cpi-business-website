<template>
	<div
		class="brands-container"
		:class="{ 'sm-horizontal-reveal': props.smHorizontalReveal }"
	>
		<div class="brands-row">
			<icon-brand-abu-dhabi class="brands-item-icon"></icon-brand-abu-dhabi>

			<icon-brand-etisalt class="brands-item-icon"></icon-brand-etisalt>

			<icon-brand-hub71 class="brands-item-icon"></icon-brand-hub71>

			<icon-brand-adgm class="brands-item-icon"></icon-brand-adgm>

			<icon-brand-savi class="brands-item-icon"></icon-brand-savi>
			<!-- </div>
		<div class="brands-row"> -->

			<icon-brand-justice class="brands-item-icon"></icon-brand-justice>

			<icon-brand-aerofarm class="brands-item-icon"></icon-brand-aerofarm>

			<icon-brand-central-bank class="brands-item-icon"></icon-brand-central-bank>

			<icon-brand-adq class="brands-item-icon"></icon-brand-adq>

			<icon-brand-miral class="brands-item-icon"></icon-brand-miral>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps({
		smHorizontalReveal: {
			type: Boolean,
			default: false
		}
	})
</script>
<style lang="scss">
	.brands-container {
		margin: -32px auto;
		max-width: 1524px;
		width: 97%;

		&.sm-horizontal-reveal {
			@include md {
				overflow: hidden;

				.brands-row {
					flex-wrap: nowrap;
					width: auto;

					svg {
						flex-shrink: 0;
						flex-grow: 0;
						width: auto;
						margin-right: 50px;
					}
				}
			}
		}
	}

	.brands-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		// padding: 32px 0;
		margin: -40px -15px;

		@include md {
			flex-wrap: wrap;
		}
	}

	.brands-item-icon {
		padding: 40px 15px;
		width: calc(20% - 30px);
		height: 100%;
		max-height: 85px;
		max-width: 235px;

		@include xxl {
			max-width: 170px;
		}

		@include md {
			max-width: 130px;
		}

		@include sm {
			max-width: unset;
			width: 100%;
			max-height: 50px;
			margin: 10px auto;
		}
	}
</style>