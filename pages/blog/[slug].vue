<template>
	<main
		id="blog-detail-page-main"
		v-if="blog && isBlogReady"
	>
		<div class="hero-image-container">
			<img
				:src="blog.image"
				alt="Image"
				class="blog-hero-image"
			/>
		</div>

		<div class="layout-box read-canvas clearfix">
			<h1 class="blog-title">
				{{ blog.title }}
			</h1>
			<div class="blog-tags">

				<!-- Author -->
				<div
					class="tiny-tag author"
					v-if="blog.author && (blog.author.name || blog.author.image)"
				>
					<img
						:src="blog.author.image"
						:alt="blog.author.name || 'Author image'"
						class="tag-author-img"
						v-if="blog.author.image"
					/>
					<span
						class="tag-author-name"
						v-if="blog.author.name"
					>
						{{ blog.author.name }}
					</span>
				</div>
				<!-- /Author -->

				<!-- Duration -->
				<div
					class="tiny-tag read"
					v-if="blog.duration"
				>
					{{ blog.duration }}
				</div>
				<!-- /Duration -->
			</div>


			<!-- Blog Content -->
			<div
				v-html="blog.content"
				class="blog-content-container"
			></div>
			<!-- /Blog Content -->
		</div>

		<div class="clearfix">
			<index-library-showcase :show-title="false" />
		</div>
	</main>
</template>
<script setup>
const route = useRoute()
const slug = route.params.slug
const dataStore = useDataStore()

const isBlogReady = ref(false)
const blog = ref(null)
dataStore.getBlog(slug)
	.then(data => {
		blog.value = data
		isBlogReady.value = true
	}).catch(e => {
		console.error(e)
	})
</script>
<style lang="scss">
#blog-detail-page-main {
	background: black;
}

.hero-image-container {
	width: 100%;
	max-height: 60vh;
	height: 900px;
	overflow: hidden;
	position: relative;

	&::after {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%);
		z-index: 2;
	}
}

.blog-hero-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 1;
}

.blog-title {
	font-size: 60px;
	margin: 100px 0 30px;
	line-height: 62px;
}

.blog-tags {
	display: flex;
	margin-bottom: 75px;
}

.blog-content-container {
	font-size: 20px;
	line-height: 32px;
	margin-bottom: 200px;

	a {
		color: inherit;
	}
}
</style>