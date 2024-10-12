<template>
	<span class="trc-wrapper"> <!-- trc = text-roll-component -->
		<span class="trc-text t1">
			{{ props.text }}
		</span>
		<span class="trc-text t2">
			{{ props.text }}
		</span>
	</span>
</template>
<script setup>
	const props = defineProps(['text'])
</script>
<style lang="scss">
	.trc-wrapper {
		overflow: hidden;
		position: relative;
		display: inline-block;

		&:hover {
			.trc-text {
				&.t1 {
					transform: translate(0, -100%);
				}

				&.t2 {
					transform: translate(0, 0);
				}
			}
		}
	}

	.trc-text {
		line-height: inherit;
		font-size: inherit;
		display: inherit;
		height: inherit;
		width: inherit;

		transition: all 0.3s ease-out;

		&.t2 {
			position: absolute;
			left: 0;
			top: 0;
			transform: translate(0, 100%);
			opacity: 0.5;
		}
	}
</style>