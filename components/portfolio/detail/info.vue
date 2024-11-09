<template>
	<section id="portfolio-detail-info-section">
		<div class="layout-box">
			<div class="container">
				<div class="pdi-row">
					<div class="pdi-col left">
						<div class="pdi-item">
							<h2 class="pdi-main-text">
								An ominous phenomenon is spreading in Switzerland: workers are disappearing everywhere.
								Denner decides to become innovative in the fight against this. In our agency, Denner has
								found a partner for personnel marketing who will provide strategic, conceptual and
								creative support.
							</h2>
						</div>
					</div>
					<div class="pdi-col right">
						<div class="pdi-item">
							<div
								class="pdd-box"
								v-for="pdd in [
									{
										title: 'Some Title',
										items: [
											'Internal communication for a progressive employer',
											'Hero story for employees',
											'Trilingual communication campaign'
										]
									},
									{
										title: 'Another Title',
										items: [
											'Internal communication for a progressive employer',
										]
									},
									{
										title: 'Title Again',
										items: [
											'Internal communication for a progressive employer',
											'Hero story for employees',
											'Trilingual communication campaign'
										]
									}
								]"
							>
								<h3 class="pdd-title">
									{{ pdd.title }}
								</h3>
								<ul class="pdd-list">
									<li v-for="item in pdd.items">
										{{ item }}
									</li>
								</ul>
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
<style lang="scss">
	#portfolio-detail-info-section {
		width: 100%;
		height: 100vh;
		background: black;
		overflow: hidden;

		.layout-box {
			height: 100%;

			.container {
				height: 100%;
			}
		}
	}

	.pdi-row {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
	}

	.pdi-col {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
		position: relative;

		&.left {
			width: 72%;
		}

		&.right {
			width: 28%;

			&::after {
				content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				width: 100vw;
				background-color: #1e1e1e;
				z-index: 0;
			}

			.pdi-item {
				position: relative;
				z-index: 1;
				padding: 0 0 0 50px;
			}
		}
	}

	.pdi-main-text {
		color: white;
		font-size: 45px;
		line-height: 50px;
		max-width: 80%;
		font-weight: 600;
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