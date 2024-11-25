<template>
	<section
		id="careers-openings-section"
		class="clearfix"
	>
		<div class="background-layer">
			<img
				src="@/assets/images/astronaut-resting.jpeg"
				alt="An astronaut chilling on the moon"
			/>
		</div>
		<div class="content-layer">
			<div class="layout-box">
				<h2 class="subtitle">
					Company
				</h2>
			</div>
			<h2 class="opening-intro-title">
				<span class="main">CULTURE</span>
				<span class="aside">
					Via
				</span>
				<span class="main stroke">
					COMPRAMISE
				</span>
			</h2>
			<hr class="section-divider dim">

			<div class="layout-box clearfix">
				<h2 class="subtitle">
					Vacancies
				</h2>
				<div class="op-container">
					<div class="op-row">
						<div class="op-col">
							<div class="op-item yellow">
								<div class="op-title-box">
									<h3 class="op-title">
										Graphic <br> Designer
									</h3>
								</div>
								<div class="op-detail-box">
									<h4 class="op-level">
										Senior Level
									</h4>
									<icon-arrow-right />
								</div>
							</div>
						</div>
						<div class="op-col">
							<div class="op-item">
								<div class="op-title-box">
									<h3 class="op-title">
										Project <br> Manager
									</h3>
								</div>
								<div class="op-detail-box">
									<h4 class="op-level">
										Mid Level
									</h4>
									<icon-arrow-right yellow />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
	#careers-openings-section {
		min-height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.background-layer {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 80vh;
		z-index: 1;

		&::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgb(0, 0, 0) 5%, transparent 50%);
			z-index: 2;
		}

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.content-layer {
		position: relative;
		z-index: 2;
		margin-bottom: 70vh;
	}

	.opening-intro-title {
		width: 95%;
		margin: 100px auto;
		text-align: center;
		font-size: 10vw;
		font-family: 'Denton';
		line-height: 8vw;
		font-weight: 600;

		.aside {
			width: 100%;
			display: inline-block;
			font-size: 3vw;
			font-family: Satoshi;
			font-weight: 400;
		}

		span.stroke {
			color: transparent !important;
			-webkit-text-stroke: 1px $yellow;
		}
	}


	.op-container {
		width: 100%;
		overflow: hidden;
		margin: 80px 0;
	}

	.op-row {
		margin: -25px;
		display: flex;
		
		@include md {
			flex-wrap: wrap;
		}
	}

	.op-col {
		padding: 25px;
		flex-grow: 1;
	}

	.op-item {
		background: black;
		border-radius: 20px;
		overflow: hidden;
		padding: 45px;
		border: 1px solid rgba(255, 255, 255, 0.5);

		&.yellow {
			background: $yellow;
			border: none;

			.op-title,
			.op-level {
				color: black !important;
			}
		}

		h3,
		h4 {
			margin: 0;
		}

		.op-title {
			font-size: 80px;
			font-family: 'Denton';
			font-weight: 500;
			margin-bottom: 7vw;

			@include xmd {
				font-size: 45px;
				margin-bottom: 5vw;
			}

			// @include sm {
			// 	font-size: 45px;
			// 	margin-bottom: 5vw;
			// }
		}

		.op-level {
			font-size: 50px;
			font-weight: 400;

			@include xmd {
				font-size: 30px;
			}
		}

		.op-detail-box {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}
	}
</style>