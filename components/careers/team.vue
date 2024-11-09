<template>
	<section
		id="careers-team-section"
		class="clearfix"
	>
		<!-- BG Images -->
		<div
			class="bg-layer clearfix"
			ref="bgLayerContainer"
		>
			<div
				class="plx-img-row clearfix"
				v-for="(src, i) in rows"
			>
				<div
					class="plx-img-col"
					v-for="cn in (i === rows - 1 ? odd_rc : ipr)"
					:class="{ nogrow: (i === rows - 1 ? true : false) }"
					:style="`--width: ${100 / ipr}%; --height: ${row_height}px;`"
				>
					<img
						:src="teamImages[ipr * i + (cn - 1)]"
						:alt="cn"
						class="plx-img"
					>
				</div>
			</div>
		</div>
		<!-- /BG Images -->

		<!-- FG Content -->
		<div class="fg-layer clearfix">
			<div class="layout-box">
				<div class="team-content-box">
					<h2 class="team-title">
						THE <br>
						TEAM
					</h2>
					<button-sq
						text="View More"
						class="rounded showcase-action-bt"
						@click.prevent="$router.push('/portfolio')"
					/>
				</div>
			</div>
			<hr class="section-divider">
		</div>
		<!-- /FG Content -->
	</section>

	<div class="layout-box">
		<div class="container company-info-box">
			<div class="row">
				<div class="col left">
					<h2 class="subtitle">
						Company
					</h2>
				</div>
				<div class="col right">
					<p class="content">
						Our web experiences are based on coheret concepts individually tailored to the use case.
						Ourfocus varies: functionality,storyline, gamification, or other web experiences. Key in
						all our over
						80 projects: efficient user
						guidance, modern design, high-quality programming, and the cutting-edge
						web development tool Webflow.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="clearfix">
		<hr class="section-divider dim">
	</div>
</template>
<script setup>
	const teamImages = [
		"https://images.pexels.com/photos/11404855/pexels-photo-11404855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	]
	const bgLayerContainer = ref()

	const ic = teamImages.length
	const ipr = 3
	const odd_rc = ic % ipr
	const rows = Math.ceil(ic / ipr)
	const row_height = ref(0)


	const {
		$gsap: gsap
	} = useNuxtApp()

	onMounted(() => {
		const bgContainerHeight = bgLayerContainer.value.clientHeight;
		row_height.value = bgContainerHeight / rows

		const _images = gsap.utils.toArray('.plx-img')
		const xperc = 20
		const yperc = 35

		_images.forEach(img => {
			// const yChange = (yperc + Math.ceil(Math.random() * (yperc / 2))) * (Math.random() >= 0.5 ? 1 : -0.5)
			const yChange = (yperc / 2) + (Math.random() * (yperc / 2))
			const xChange = (xperc + Math.ceil(Math.random() * xperc)) * (Math.random() >= 0.5 ? 1 : -0.5)
			gsap.set(img, {
				xPercent: xChange,
				yPercent: yChange,
			})

		})

		nextTick(() => {
			_images.forEach(img => {
				gsap.to(img, {
					yPercent: -yperc,
					scrollTrigger: {
						trigger: img,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					}
				})
			})
		})
	})

</script>
<style lang="scss">
	#careers-team-section {
		position: relative;
		z-index: 2;

		.bg-layer {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;

			.plx-img-row {
				background: transparent;
				flex-grow: 0;

				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				// border-bottom: 1px solid red;

				.plx-img-col {
					height: var(--height);
					width: var(--width);
					position: relative;

					&.nogrow {
						flex-grow: 0;
						flex-shrink: 0;
					}

					.plx-img {
						display: block;
						width: 80%;
						height: auto;
						max-width: 100%;
						max-height: 100%;
						object-fit: contain;
						position: absolute;
						opacity: 1
					}
				}
			}
		}
	}

	.team-content-box {
		margin: 70vh 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.team-title {
		font-size: 450px;
		font-family: 'Newyork';
		text-align: center;
		margin: 0 0 20px;
	}
</style>