<template>
	<section id="portfolio-detail-info-section">
		<div class="layout-box">
			<div class="container">
				<div class="pdi-row">
					<div class="pdi-col">
						<div class="pdi-item">
							<p
								class="pdi-main-text"
								v-for="para in props.paragraphs"
							>
								{{ para }}
							</p>
						</div>
					</div>
					<!-- <div class="pdi-col right">
						<div class="pdi-item">
							<div
								class="pdd-box"
								v-if="props.keyHighlights"
							>
								<h3 class="pdd-title">
									Key Highlights
								</h3>
								<ul class="pdd-list">
									<li v-for="hl in props.keyHighlights">
										{{ hl }}
									</li>
								</ul>
							</div>
						</div>
					</div> -->
				</div>

				<div
					class="pdi-row"
					v-if="props.keyHighlights && props.keyHighlights.length"
				>
					<div class="pdi-col">
						<div class="khl-container">
							<div
								class="khl-item"
								v-for="kh in props.keyHighlights"
							>
								{{ kh }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
const props = defineProps([
	'paragraphs',
	'keyHighlights'
])
</script>
<style lang="scss">
#portfolio-detail-info-section {
	width: 100%;
	height: auto;
	background: black;
	overflow: hidden;

	.layout-box {
		height: 100%;

		.container {
			height: 100%;
			padding: 200px 0;

			@include lg {
				padding: 0;
			}
		}
	}

	@include xmd {
		height: auto;
		padding: 10vh 0;
	}

	// @include sm {
	// 	padding: 10vh 0;
	// }
}

.pdi-row {
	display: flex;
	flex-wrap: wrap;
	height: 100%;

	@include xmd {
		flex-direction: column;
	}
}

.pdi-col {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	position: relative;
}

.khl-container {
	margin: 0 -10px;
	display: flex;
	flex-wrap: wrap;
}

.khl-item {
	background: #282828;
	margin: 10px;
	line-height: 60px;
	padding: 0 30px;
	border-radius: 20px;
	font-size: 20px;
	font-weight: 500;
}

.pdi-main-text {
	color: white;
	font-size: 35px;
	line-height: 130%;
	max-width: 1300px;
	font-weight: 500;
	margin: 25px 0;

	@include break(330px) {
		// margin-left: 20px;
	}

	@include lg {
		font-size: 35px;
	}

	@include xmd {
		max-width: 90%;
	}

	@include md {
		font-size: 30px;
	}

	@include sm {
		font-size: 23px;
		font-weight: 400;
		// margin-left: 30px;
	}
}

.pdd-box {
	margin: 35px 0;
}

.pdd-title {
	font-size: 28px;
	margin: 0 0 10px;
}

.pdd-list {
	list-style: none;
	padding: 0;
	margin: 0;

	li {
		font-size: 16px;
		line-height: 20px;
		margin: 0 0 10px;
		opacity: 0.63;
	}
}
</style>