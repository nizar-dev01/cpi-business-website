<template>
	<section class="events-showcase">
		<horizontal-text duration="100">
			<div class="h-slide-text white">
				<span>EVENTS</span> <span class="center-dot"></span>
				<span>CONTENT</span> <span class="center-dot"></span>
				<span>DIGITAL</span> <span class="center-dot"></span>
				<span>MEDIA</span> <span class="center-dot"></span>
				<span>EXPERIENCES</span> <span class="center-dot"></span>
			</div>
		</horizontal-text>
		<div class="layout-box">
			<div class="showcase-container">
				<div
					class="showcase-row"
					ref="showcaseRow"
				>
					<div
						v-for="(event, i) in showcaseEvents"
						class="showcase-col"
						ref="showcaseItems"
					>
						<div class="showcase-item">
							<img
								:src="`${event.image}?rand=${Math.random()}`"
								:alt="event.alt || `Event Image ${i}`"
								class="showcase-img"
							>
							<div class="si-hover-display">
								<div class="actions-container">
									<div class="ac-left">
										<h3 class="ac-title">
											e& Business Pitch
										</h3>
										<div class="ac-tags">
											<div class="ac-tag act-one">
												<div class="act-icon">
													<icon-en-brand></icon-en-brand>
												</div>
												<div class="act-text">
													e\& enterprises
												</div>
											</div>
											<div class="ac-tag act-two">
												<div class="act-icon">
													<icon-user-head class="act-icon-icon" />
												</div>
												<div class="act-text">
													850 Participants
												</div>
											</div>
										</div>
									</div>
									<div class="ac-right">
										<icon-round-arrow-button class="acr-view-button" />
										<span class="acr-view-text">
											View
										</span>
									</div>
								</div>
								<div class="text-container">
									<p class="tc-text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-center showcase-action-row">
				<button class="btn-sq rounded showcase-action-bt">
					<span class="bt-text">
						View More
					</span>
					<icon-arrow-up></icon-arrow-up>
				</button>
			</div>
		</div>
	</section>
</template>
<script setup>
	const showcaseRow = ref()
	const showcaseItems = ref()

	onMounted(() => {
		const {
			$gsap: gsap,
		} = useNuxtApp()

		const items = showcaseItems.value
		const row = showcaseRow.value

		gsap.set(items, {
			y: 100,
			opacity: 0
		})

		const divFactor = Math.round(row.clientWidth / items[0].clientWidth)

		items.forEach((item, i) => {
			gsap.to(item, {
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: 0.1,
				delay: (i % items.length) % divFactor * 0.1,
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
				}
			})
		})
	})

	const showcaseEvents = [
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-left"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
		{
			image: "https://picsum.photos/536/354",
			class: "appear-right"
		},
	]
</script>

<style lang="scss" scoped>
	// .events-showcase {
	// 	padding-top: 150px;
	// }

	.showcase-container {
		overflow: hidden;
		margin-top: 100px;
	}

	.showcase-row {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin: -9px;
	}

	.showcase-col {
		padding: 9px;
		box-sizing: border-box;
		width: 25%;
		min-width: 350px;
		flex-grow: 1;
	}

	$hover-duration: .5s;

	.showcase-item {
		height: 567px;
		width: 100%;
		border-radius: 9px;
		overflow: hidden;
		position: relative;
		cursor: pointer;

		img.showcase-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: 0;
		}

		.si-hover-display {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: block;
			z-index: 1;
			background-color: #00000063;
			backdrop-filter: blur(5px);
			opacity: 0;
			transition: opacity $hover-duration ease;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			padding: 20px;
			box-sizing: border-box;
		}

		&:hover .si-hover-display {
			opacity: 1;

			.actions-container,
			.text-container {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.actions-container {
			background: #ffffff26;
			border-radius: 10px;
			box-sizing: border-box;
			flex-grow: 0;
			margin-right: auto;

			transition: all $hover-duration ease-in-out;
			transform: translateY(40px);
			opacity: 0;

			display: flex;

			.ac-left {
				padding: 20px;
			}

			.ac-right {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 70px;
				font-size: 16px;
				font-weight: 600;
				border-left: 1px solid #00000033;
				margin-left: auto;
				flex-shrink: 0;
			}

			.acr-view-button {
				height: 35px;
				width: 35px;
				margin-bottom: 10px;
			}
		}

		.ac-title {
			font-size: 16px;
			margin: 0 0 20px;
		}

		.ac-tags {
			display: flex;
			flex-wrap: wrap;
			margin: -5px;

			.ac-tag {
				background: rgba(0, 0, 0, 0.216);
				height: 25px;
				line-height: 25px;
				padding: 0 5px;
				border-radius: 13px;
				font-size: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 500;
				margin: 5px;
			}

			.act-icon {
				height: 15px;
				width: 15px;
				border-radius: 50%;
				margin-right: 5px;
				display: flex;
				justify-content: center;
				align-items: center;

				.act-icon-icon {
					height: 70%;
					width: 70%;
				}
			}

			.act-text {
				white-space: nowrap;
			}
		}

		.text-container {
			transform: translateY(60px);
			opacity: 0;
			transition: all $hover-duration ease-in-out;
		}

		.tc-text {
			font-size: 16px;
			line-height: 30px;
		}
	}

	.showcase-action-row {
		margin: 60px 0 200px;
	}
</style>