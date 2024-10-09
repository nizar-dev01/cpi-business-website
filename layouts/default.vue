<template>
	<layout-header />
	<div class="layout-content">
		<slot></slot>
	</div>
	<layout-footer />
	<div class="grainy-overlay"></div>
</template>

<style lang="scss" scoped>
	.layout-content {
		min-height: 100vh;
	}

	.grainy-overlay {
		z-index: 2147483647;
		opacity: .04;
		background-image: url('@/assets/images/grain.gif');
		background-position: 0 0;
		background-size: 400px;
		background-attachment: fixed;
		position: fixed;
		inset: 0%;
		pointer-events: none;
	}
</style>