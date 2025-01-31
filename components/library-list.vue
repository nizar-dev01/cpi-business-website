<template>
	<div
		class="library-row"
		v-if="blogs"
	>
		<div
			class="library-col"
			v-for="blog in blogs"
		>
			<blog-card
				:tag="blog.subject"
				:title="blog.title"
				:image="blog.thumbnail"
				:slug="blog.slug"
				:author="blog.author"
				:duration="blog.duration"
			/>
		</div>
	</div>
</template>
<script setup>
const props = defineProps([
	'staticItemsCount'
])
const dataStore = useDataStore()
const _blogs = computed(() => dataStore.blogs)
let blogs = [];
if (_blogs.value) {
	if (props.staticItemsCount) {
		blogs = _blogs.value.slice(0, props.staticItemsCount)
	} else {
		blogs = _blogs.value
	}
}
</script>
<style lang="scss" scoped>
$rowspace: 5px;

.library-row {
	display: flex;
	flex-wrap: wrap;
	// justify-content: center;
	margin: -$rowspace;
}

.library-col {
	padding: $rowspace;
	box-sizing: border-box;
	width: 33.333%;
	// flex-grow: 1;

	@include md {
		width: 100%;
		margin-bottom: 50px;

		&:last-of-type {
			margin-bottom: 0;
		}
	}
}
</style>