<template>
	<layout-wrapper>
		<layout-header />
		<div class="layout-content">
			<slot></slot>
		</div>
		<layout-footer />
	</layout-wrapper>
</template>

<style lang="scss" scoped>
	.layout-content {
		min-height: 100vh;
	}
</style>