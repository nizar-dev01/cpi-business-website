<template>
	<section id="about-achievements">
		<div class="layout-box">
			<h2 class="aa-section-title">
				Crafting timeless events for
				better experience
			</h2>

			<div class="numbers-section noverflow">
				<div class="num-row">
					<div
						class="num-col"
						v-for="(num, i) in numbers"
					>
						<div class="num-item">
							<h3 class="num-number">
								<span class="achievement-stat-number-text">
									{{ num.number }}
								</span>
								<span>
									{{ num.symbol }}
								</span>
							</h3>
							<h4 class="num-title">
								{{ num.title }}
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div class="testimonials-container">
				<div class="tst-row">
					<div class="tst-col">
						<div class="tst-item left">
							<!-- Icon -->
							<div class="quote-icon">
								<div
									class="qi-box"
									v-for="n in 2"
								>
									<icon-single-quote
										class="qi-icon"
										width="70"
									/>
								</div>
							</div>

							<!-- Text -->
							<div class="quote-text">
								"Our event with CPI Business was exceptional. From concept to execution, they
								transformed our corporate gathering into an unforgettable experience.
								Their attention to detail and creativity left a
								lasting impression on our guests.
								We look forward to collaborating with them again!"
							</div>
						</div>
					</div>
					<div class="tst-col">
						<div class="tst-item right">
							<div class="top-row">
								<div class="trc left">
									<div class="trc-item">
										<icon-en-enterprise class="trci-icon" />
									</div>
								</div>
								<div class="trc right">
									<div class="trc-item">
										<img
											src="@/assets/images/ene-ceo.jpeg"
											alt=""
											class="trc-item-img"
										>
									</div>
								</div>
							</div>

							<div class="bottom-row">
								<div class="br-item">
									<h2 class="tst-name">
										Regi Magdy
									</h2>
									<h3 class="tst-designation">
										COO, e& enterprise
									</h3>
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
	const numbers = [
		{
			number: "09",
			title: "Years"
		},
		{
			number: "45",
			symbol: "+",
			title: "Clients"
		},
		{
			number: "324",
			title: "Events"
		},
	]

	onMounted(() => {
		const {
			$gsap
		} = useNuxtApp()

		const _stats = $gsap.utils.toArray('.achievement-stat-number-text')
		_stats.forEach((stat_element) => {
			$gsap.from(stat_element, {
				textContent: "0",
				modifiers: {
					textContent: value => formatNumber(value, 0)
				},
				scrollTrigger: {
					trigger: stat_element,
					start: "top bottom",
					once: false,
					duration: 5,
					delay: 0.5,
					toggleActions: "restart none none none"
				}
			})
		})
	})

	function formatNumber (value, decimals) {
		let s = (+value).toLocaleString('en-US').split(".");
		return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
	}
</script>
<style lang="scss">
	section#about-achievements {
		background-color: black;
	}

	.aa-section-title {
		font-family: Satoshi;
		font-size: 62px;
		font-weight: 400;
		line-height: 98px;
		text-align: center;
		max-width: 740px;
		margin: 0 auto;
	}

	.numbers-section {
		width: 100%;
		max-width: 920px;
		margin: 150px auto;

		.num-row {
			margin: 0 -18px;
			display: flex;

			.num-col {
				margin: 0 18px;
				width: 33.333%;
			}
		}

		.num-item {
			text-align: center;

			.num-number {
				font-size: 107px;
				margin: 0;
				font-family: 'Newyork';
				font-weight: 600;
			}

			.num-title {
				font-size: 33px;
				font-weight: 400;
				margin: 0;
			}
		}
	}
</style>

<!-- Testimonials -->
<style lang="scss">
	.testimonials-container {
		width: 100%;
		overflow: hidden;
		max-width: 1200px;
		margin: 0 auto;
		padding-bottom: 250px;
	}

	.tst-row {
		display: flex;
		margin: 0 -20px;
	}

	.tst-col {
		margin: 0 20px;
		width: 50%;
	}

	.tst-item {
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

		$tst-bg-grey: rgba(255, 255, 255, 0.05);
		;

		&.left {
			background: $tst-bg-grey;
			padding: 50px;

			.quote-icon {
				display: flex;

				.qi-box {
					padding: 0 10px;
				}
			}

			.quote-text {
				font-size: 22px;
				line-height: 37px;
				text-align: center;
				margin-top: 30px;
			}
		}

		&.right {
			.top-row {
				display: flex;
				margin: -10px;
				flex-grow: 1;

				.trc {
					margin: 10px;
					width: 50%;
					flex-grow: 1;

					.trc-item {
						height: calc(100% - 20px);
						border-radius: 10px;
						overflow: hidden;
					}

					&.left {
						.trc-item {
							background: #E10700;
							display: flex;
							justify-content: center;
							align-items: center;

							.trci-icon {
								width: 80%;
							}
						}
					}

					&.right {
						.trc-item-img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							display: block;
						}
					}
				}
			}

			.bottom-row {
				width: 100%;

				.br-item {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					background: $tst-bg-grey;
					width: 100%;
					border-radius: 10px;
					overflow: hidden;
					padding: 30px;
					box-sizing: border-box;

					.tst-name {
						margin: 0 0 10px;
						font-size: 45px;
					}

					.tst-designation {
						font-size: 18px;
						margin: 0;
						font-weight: 400;
					}
				}
			}
		}
	}
</style>
<!-- /Testimonials -->