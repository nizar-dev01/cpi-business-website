<template>
	<client-only>
		<font-awesome-icon :icon="props.icon"></font-awesome-icon>
	</client-only>
</template>
<script setup>
	const props = defineProps(['icon'])
</script>