<template>
	<div
		class="brands-container"
		:class="{ 'sm-horizontal-reveal': props.smHorizontalReveal }"
	>
		<div
			class="brands-row"
			ref="brandsRow"
		>
			<icon-brand-fab class="brands-item-icon" />
			<icon-brand-ups class="brands-item-icon" />
			<icon-brand-etihad class="brands-item-icon" />
			<icon-brand-dubai-south class="brands-item-icon" />
			<icon-brand-uae-space class="brands-item-icon" />
			<icon-brand-abudhabi-investment-office class="brands-item-icon" />
			<icon-brand-etisalat class="brands-item-icon" />
			<icon-brand-hub71 class="brands-item-icon" />
			<icon-brand-adgm class="brands-item-icon" />
			<icon-brand-ministry-hr class="brands-item-icon" />
			<icon-brand-ministry-justice class="brands-item-icon" />
			<icon-brand-aerofarm class="brands-item-icon" />
			<icon-brand-central-bank class="brands-item-icon" />
			<icon-brand-adq class="brands-item-icon" />
			<icon-brand-miral class="brands-item-icon" />
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

const brandsRow = ref(null);

onMounted(() => {
	const containerEl = brandsRow.value;

	const children = Array.from(containerEl.children);

	children.forEach((child) => {
		const clone = child.cloneNode(true);
		clone.classList.add('hide-in-larger');
		containerEl.appendChild(clone);
	});
});
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
				// width: auto;
				width: fit-content;
				animation: scroll 20s linear infinite;

				svg {
					flex-shrink: 0;
					flex-grow: 0;
					width: auto;
					margin-right: 50px;
				}
			}
		}
	}

	@include md {
		max-width: 100vw;
	}
}

.added {
	display: none;

	@include md {
		display: block;
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

.hide-in-larger {
	display: none;

	@include md {
		display: block;
	}
}

@keyframes scroll {
	to {
		transform: translate(-50%);
	}
}
</style>