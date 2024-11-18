<template>
	<section
		id="services-others-section"
		class="clearfix"
	>
		<div class="layout-box">
			<h2 class="section-title">
				Other Services
			</h2>
			<div class="svc-container">
				<div
					class="svc-row"
					v-if="props.services"
				>
					<div
						v-for="service in props.services"
						class="svc-col"
						:class="{ hidden: service.uid === currentPage.uid }"
					>
						<div
							class="svc-item"
							ref="svcItems"
						>
							<div class="svc-title">
								<h3 class="svc-title-text">
									{{ service.text }}
								</h3>
							</div>
							<div class="svc-img">
								<img
									:src="service.image"
									:alt="service.text"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	const props = defineProps(['services', 'currentPage'])

	const svcItems = ref()

	const _yDiff = 250

	onMounted(() => {
		const {
			$gsap: gsap,
			$ScrollTrigger: ScrollTrigger
		} = useNuxtApp()

		const _items = gsap.utils.toArray('.svc-item')

		gsap.set(_items, {
			y: _yDiff
		})

		const _animate = (item, i) => {
			gsap.to(item, {
				delay: (i % 2) * 0.1,
				y: 0,
				duration: 0.2,
				ease: "power2.out"
			})
		}

		_items.forEach((item, i) => {
			ScrollTrigger.create({
				trigger: item,
				start: "top bottom",
				end: "bottom top",
				// toggleActions: "none none none none",
				onLeave () {
					gsap.set(item, {
						y: -_yDiff
					})
				},
				onEnter () {
					_animate(item, i)
				},
				onLeaveBack () {
					gsap.set(item, {
						y: _yDiff
					})
				},
				onEnterBack () {
					_animate(item, i)
				}
			})
		})
	})
</script>
<style lang="scss" scoped>
	.section-title {
		font-size: 53px;
		font-family: 'Denton';
		font-weight: 500;
	}

	.svc-container {
		width: 100%;
	}

	.svc-row {
		display: flex;
		flex-wrap: wrap;
		margin: -17px;
	}

	.svc-col {
		width: 50%;
		padding: 17px;

		@include xl {
			width: 100%;
		}

		&.hidden {
			display: none;
		}
	}

	.svc-item {
		display: flex;
		height: 351px;
		background: rgba(255, 255, 255, 0.07);
		border-radius: 10px;
		overflow: hidden;
		transition: all 0.3s ease-out;

		&:hover {
			background: rgba(255, 255, 255, 0.13);
		}
	}

	.svc-title {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 40px;
		position: relative;
		z-index: 2;

		.svc-title-text {
			font-size: 40px;
			line-height: 48px;
			font-weight: 500;

			@include sm {
				font-size: 35px;
				line-height: 43px;
			}
		}
	}

	.svc-img {
		height: 100%;
		margin-left: auto;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		position: relative;
		z-index: 1;

		@include sm {
			display: block;
		}

		img {
			height: 96%;
			width: auto;

			@include sm {
				position: absolute;
				right: 0;
				bottom: 0;
				transform: translate(40%, 0);
			}
		}
	}
</style>