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

			<!-- Testimonials -->
			<div class="testimonials-container">
				<div class="tst-row">
					<div class="tst-col">
						<div
							class="tst-item left content-holder"
							:style="has_calc_done ? `height: ${tmnl_height}px` : ''"
						>
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
								{{
									activeTestimonial.text
								}}
							</div>
						</div>
					</div>
					<div class="tst-col">
						<div class="tst-item right">
							<div class="top-row">
								<div class="trc left">
									<div class="trc-item trc-img-holder">
										<img
											:src="activeTestimonial.image"
											alt="Testimonial Client Image"
											class="trc-icon-img"
										/>
									</div>
								</div>
								<!-- <div class="trc right">
									<div class="trc-item">
										<img
											src="@/assets/images/ene-ceo.jpeg"
											alt=""
											class="trc-item-img"
										>
									</div>
								</div> -->
							</div>

							<div class="bottom-row">
								<div class="br-item">
									<h2 class="tst-name">
										{{ activeTestimonial.client_name }}
									</h2>
									<h3 class="tst-designation">
										{{ activeTestimonial.client_post }}
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

const testimonials = [
	{
		text: "Thank you team for the great work. We absolutely love working with you guys and couldn't have done it without you!",
		image: "/img/testimonials/Hub71.jpg",
		client_name: "Mohammed Alkhoor",
		client_post: "Head of Marketing and Communications, Hub71"
	},
	{
		text: "Thank you for all your efforts put into today’s event. It was a tremendous support you provided. Keep up the good work!",
		image: "/img/testimonials/e&.jpg",
		client_name: "Omar Al Khamiri",
		client_post: "Manager, e&"
	},
	{
		text: "CPI has been a true partner to us in every sense of the word. Your team's dedication, creativity, and passion have elevated ADFW to completely new heights. It's evident that you poured your hearts into every single detail-from meticulously addressing last year's challenges to delivering flawlessly on your promises across every aspect of this event.",
		image: "/img/testimonials/ADGM.jpg",
		client_name: "Qais Aloul",
		client_post: "Associate Director, Events, ADGM"
	},
]

const activeTestimonial = ref(testimonials[0])
let testimonialOffset = 0

const tmnl_height = ref(0)
const has_calc_done = ref(false)
const iterateTestimonial = () => {
	const i = testimonialOffset % testimonials.length
	activeTestimonial.value = testimonials[i]
	testimonialOffset++
}
const slideIntervalPeriod = 3000

const calcInterval = setInterval(() => {
	iterateTestimonial()
	if (!has_calc_done.value) {
		const el = document.querySelector('.tst-item.left.content-holder')
		const height = el.getBoundingClientRect().height
		if (height > tmnl_height.value) {
			tmnl_height.value = Math.ceil(height)
		}
		if (testimonialOffset > testimonials.length) {
			has_calc_done.value = true
			clearInterval(calcInterval)
			setInterval(iterateTestimonial, slideIntervalPeriod)
		}
	}
}, 500)

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

	@include lg {
		font-size: 40px;
		line-height: 52px;
	}

	@include sm {
		font-size: 32px;
		line-height: 40px;
	}
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
			font-family: 'Denton';
			font-weight: 600;

			@include md {
				font-size: 78px;
			}

			@include sm {
				font-size: 45px;
			}
		}

		.num-title {
			font-size: 33px;
			font-weight: 400;
			margin: 0;

			@include md {
				font-size: 28px;
			}

			@include sm {
				font-size: 20px;
			}
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

	@include lg {
		flex-wrap: wrap;
	}
}

.tst-col {
	margin: 0 20px;
	width: 50%;

	@include lg {
		width: 100%;
	}
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

		@include sm {
			padding: 35px 20px;
		}
	}

	&.right {
		.top-row {
			display: flex;
			flex-grow: 1;
			width: 100%;

			.trc {
				width: 50%;
				flex-grow: 1;

				.trc-item {
					height: calc(100% - 20px);
					border-radius: 10px;
					overflow: hidden;
					position: relative;

					@include lg {
						height: 100%;
					}
				}

				.trc-icon-img {
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				// &.left {
				// 	.trc-item {
				// 		background: #E10700;
				// 		display: flex;
				// 		justify-content: center;
				// 		align-items: center;

				// 		.trci-icon {
				// 			width: 80%;
				// 		}

				// 		@include sm {
				// 			border-radius: 0 0 10px 10px;
				// 		}
				// 	}
				// }

				// &.right {
				// 	.trc-item-img {
				// 		width: 100%;
				// 		height: 100%;
				// 		object-fit: cover;
				// 		display: block;
				// 	}

				// 	.trc-item {
				// 		@include sm {
				// 			border-radius: 10px 10px 0 0;
				// 		}
				// 	}
				// }

				@include sm {
					width: 100%;
					margin: 0;
				}
			}

			@include lg {
				min-width: 100%;
				margin: 15px -10px;
			}

			@include sm {
				flex-wrap: wrap;
				flex-direction: column-reverse;
				margin-left: 0;
				margin-right: 0;
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

					@include sm {
						font-size: 35px;
						margin: 0;
					}
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

.qi-icon {
	width: 70px;

	@include lg {
		width: 60px
	}

	@include sm {
		width: 40px;
		height: 80px;
	}
}
</style>
<!-- /Testimonials -->