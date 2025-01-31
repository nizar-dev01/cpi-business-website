<template>
	<router-link
		:to="`/blog/${props.slug}`"
		class="blog-card-container"
	>
		<div class="bgc-img-box">
			<img
				:src="props.image"
				alt=""
				class="bgc-img"
			/>
		</div>
		<div class="bgc-content-box clearfix">
			<div class="bgcc-upper">
				<h2
					class="bgc-tag"
					v-if="props.tag"
				>
					{{ props.tag }}
				</h2>
				<h3
					class="bgc-title"
					v-if="props.title"
				>
					{{ props.title }}
				</h3>
			</div>
		</div>

		<div
			class="bgcc-lower"
			v-if="props.author || props.duration"
		>
			<div
				class="tiny-tag author"
				v-if="props.author.name || props.author.image"
			>
				<img
					:src="props.author.image"
					alt="Image of the Author"
					class="tag-author-img"
					v-if="props.author.image"
				/>
				<span
					class="tag-author-name"
					v-if="props.author.name"
				>
					{{ props.author.name }}
				</span>
			</div>
			<div
				class="tiny-tag read"
				v-if="props.duration"
			>
				{{ props.duration }}
			</div>
		</div>
	</router-link>
</template>
<script setup>
const props = defineProps(['tag', 'title', 'image', 'author', 'duration', 'slug'])
</script>
<style lang="scss" scoped>
.blog-card-container {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	border-radius: 5px;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	color: inherit;
	text-decoration: none;
	display: block;

	&:hover {
		.bgc-img {
			transform: scale(1.1);
		}

		.bgc-content-box {
			transform: translate(0, -20px)
		}
	}
}

.bgc-img-box {
	height: 30vh;
	overflow: hidden;

	.bgc-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.5s ease;
	}
}

.bgc-content-box {
	background: #414141;
	padding: 20px 25px;
	margin-bottom: -20px;
	padding-bottom: 40px;
	height: 50%;
	min-height: 140px;

	transition: transform 0.5s ease;

	.bgc-tag {
		font-size: 16px;
		font-weight: 400;
		margin: 0 0 7px;
	}

	.bgc-title {
		font-size: 20px;
		font-weight: 500;
		margin: 0;
	}
}

.bgcc-lower {
	display: flex;
	margin-top: auto;
	position: absolute;
	bottom: 20px;
	left: 25px;
}
</style>