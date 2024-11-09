<template>
	<main
		id="blog-detail-page-main"
		v-if="blog"
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
				<div class="tiny-tag author">
					<img
						src="@/assets/images/ene-ceo.jpeg"
						alt="Image of the Author"
						class="tag-author-img"
					/>
					<span class="tag-author-name">
						{{ blog.author.name }}
					</span>
				</div>
				<!-- /Author -->

				<!-- Duration -->
				<div class="tiny-tag read">
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

		<div class="layout-box clearfix">
			<index-library-showcase :show-title="false" />
		</div>
	</main>
</template>
<script setup>
	const route = useRoute()
	const slug = route.params.slug

	const dataStore = useDataStore()
	const blog = dataStore.getBlog(slug)
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
	}

	.blog-hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
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