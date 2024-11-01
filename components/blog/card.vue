<template>
	<div class="blog-card-container">
		<div class="bgc-img-box">
			<img
				:src="props.image"
				alt=""
				class="bgc-img"
			/>
		</div>
		<div class="bgc-content-box clearfix">
			<div class="bgcc-upper">
				<h2 class="bgc-tag">
					{{ props.tag }}
				</h2>
				<h3 class="bgc-title">
					{{ props.title }}
				</h3>
			</div>
		</div>

		<div class="bgcc-lower">
			<div class="tiny-tag author">
				<img
					src="@/assets/images/ene-ceo.jpeg"
					alt="Image of the Author"
					class="tag-author-img"
				/>
				<span class="tag-author-name">
					{{ props.author }}
				</span>
			</div>
			<div class="tiny-tag read">
				{{ props.duration }}
			</div>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps(['tag', 'title', 'image', 'author', 'duration'])
</script>
<style lang="scss" scoped>
	.blog-card-container {
		width: 100%;
		margin: 0 auto;
		border-radius: 5px;
		overflow: hidden;
		cursor: pointer;
		position: relative;

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
		height: 190px;

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

	.tiny-tag {
		display: flex;

		background: rgba(255, 255, 255, 0.15);
		padding: 3px 10px;
		border-radius: 20px;
		font-size: 12px;
		line-height: 20px;

		&.author {
			margin-right: 10px;
		}

		.tag-author-img {
			height: 20px;
			width: 20px;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 10px;
			display: block;
		}
	}
</style>