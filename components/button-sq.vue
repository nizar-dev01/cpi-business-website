<template>
	<button
		class="btn-sq"
		:class="[{ blue: props.blue }]"
		v-bind="$attrs"
	>
		<span class="roll-wrapper">
			<span class="roll-content t1">
				<span class="bt-text">
					{{ props.text }}
				</span>
				<icon-arrow-up
					height="10"
					width="10"
				></icon-arrow-up>
			</span>
			<span class="roll-content t2 flex-center">
				<icon-arrow-up
					height="16"
					width="16"
					:color="props.blue ? 'white' : 'black'"
				></icon-arrow-up>
			</span>
		</span>
	</button>
</template>
<script setup>
	const props = defineProps(['text', 'blue'])
</script>
<style lang="scss" scoped>
	.btn-sq {
		width: auto;
		line-height: 48px;
		border: none;
		border-radius: 5px;
		background: #3D3D3D;
		font-size: 16px;
		color: white;
		font-family: 'Metropolis';
		font-weight: 400;
		margin: 0 18px;
		cursor: pointer;
		padding: 0 20px;
		transition: all 0.3s ease-in-out;

		&.blue,
		&.blue:hover {
			background: #054BF9;
		}

		&.rounded {
			border-radius: 30px;

			&.showcase-action-bt {
				width: 245px;
			}
		}

		&.wide {
			width: 250px;
		}

		.bt-text {
			margin-right: 13px;
		}

		&:hover {
			transform: scale(1.01);
			background: white;

			.roll-content {
				&.t1 {
					transform: translate(0, -100%);
					opacity: 0;
				}

				&.t2 {
					transform: translate(0, 0);
					opacity: 1;
				}
			}
		}
	}


	.roll-wrapper {
		overflow: hidden;
		position: relative;
		display: block;
	}

	.roll-content {
		line-height: inherit;
		font-size: inherit;
		display: inherit;
		height: 100%;
		width: 100%;
		opacity: 1;

		transition: all 0.3s ease-out, opacity 0.3s ease;

		&.t2 {
			position: absolute;
			left: 0;
			top: 0;
			transform: translate(0, 100%);
			opacity: 0;

			display: flex;
			justify-content: center;
			align-items: center;
		}
	}


</style>