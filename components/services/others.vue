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
				<div class="svc-row">
					<div
						v-for="service in services"
						class="svc-col"
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
	const services = ref([
		{
			is_active: false,
			image: "img/services/events.png",
			text: 'Event Management'
		},
		{
			is_active: false,
			image: "img/services/content.png",
			text: 'Content Creation'
		},
		{
			is_active: false,
			image: "img/services/design.png",
			text: 'Design & Branding'
		},
		{
			is_active: false,
			image: "img/services/digital.png",
			text: 'Digital Solutions'
		},
		{
			is_active: false,
			image: "img/services/consultancy.png",
			text: 'Consultancy Services'
		},
		{
			is_active: true,
			image: "img/services/bespoke.png",
			text: 'Bespoke Solutions'
		}
	])

	const svcItems = ref()

	const _yDiff = 250

	onMounted(() => {
		console.log(svcItems.value)
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
		font-family: 'Newyork';
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

		.svc-title-text {
			font-size: 40px;
			line-height: 48px;
			font-weight: 500;
		}
	}

	.svc-img {
		height: 100%;
		margin-left: auto;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;

		img {
			height: 96%;
			width: auto;
		}
	}
</style>