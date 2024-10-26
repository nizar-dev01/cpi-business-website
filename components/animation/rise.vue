<template>
	<client-only>
		<animation-client-rise v-bind="$attrs">
			<slot></slot>
		</animation-client-rise>
	</client-only>
</template>