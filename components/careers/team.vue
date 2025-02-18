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
			<!-- <div
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
			</div> -->
			<div class="plx-img-row clearfix">
				<div
					v-for="(img, i) in teamImages"
					class="plx-img team-positioner"
					:class="img.class"
					:data-scroll="img.dataScroll || 0"
				>
					<img
						:src="img.src"
						width="200"
						class="img"
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
					<h2 class="subtitle sm-mb-20 {
					@include sm {
					margin-bottom: 20px;}} ">
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
const teamImages = ref([
	{
		src: "/img/careers/careers1.webp",
		class: "plx-img position1",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers2.webp",
		class: "plx-img position2",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers3.webp",
		class: "plx-img position3",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers4.webp",
		class: "plx-img position4",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers5.webp",
		class: "plx-img position5",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers6.webp",
		class: "plx-img position6",
		dataScroll: -3,
	},
	{
		src: "/img/careers/careers7.webp",
		class: "plx-img position7",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers8.webp",
		class: "plx-img position8",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers9.webp",
		class: "plx-img position9",
		dataScroll: -5,
	},
	{
		src: "/img/careers/careers10.webp",
		class: "plx-img position10",
		dataScroll: 2,
	},
	{
		src: "/img/careers/careers11.webp",
		class: "plx-img position11",
		dataScroll: 3,
	},
	{
		src: "/img/careers/careers13.webp",
		class: "plx-img position12",
		dataScroll: 2,
	}
])
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
	const _images = gsap.utils.toArray('.plx-img');

	_images.forEach(img => {
		const yperc = 35;
		const yChange = yperc * img.dataset.scroll || 1;

		gsap.set(img, {
			yPercent: yChange,
		});

		gsap.to(img, {
			yPercent: -yperc,
			scrollTrigger: {
				trigger: img,
				start: "top bottom",
				end: "bottom top",
				scrub: 1,
				scrubSpeed: img.dataset.scroll,
			}
		});
	});
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

	@include sm {
		margin: 50vh 0;
	}
}

.team-title {
	font-size: 450px;
	font-family: 'Denton';
	text-align: center;
	margin: 0 0 20px;

	@include xxl {
		font-size: 300px;
	}

	@include lg {
		font-size: 200px;
	}

	@include md {
		font-size: 100px;
	}
}

.team-positioner {
	position: absolute;
}

.position1 {
	top: 5%;
	right: 50%;
	// z-index: 10;

	@include sm {
		right: 35%;
	}

	.img {
		width: 20vw;

		@include sm {
			width: 30vw;
		}
	}
}

.position2 {
	top: 1%;
	right: 11%;
	// z-index: 10;

	@include sm {
		right: 2%;
	}

	.img {
		width: 20vw;

		@include sm {
			width: 30vw;
		}
	}
}

.position3 {
	top: 1%;
	left: 11%;
	z-index: 10;

	.img {
		width: 10vw;
		opacity: 0.5;

		@include sm {
			width: 20vw;
		}
	}
}

.position4 {
	top: 30%;
	right: 0%;

	.img {
		width: 30vw;
	}
}

.position5 {
	top: 18%;
	right: 18%;
	opacity: 0.5;

	.img {
		width: 30vw;
	}
}

.position6 {
	top: 30%;
	left: 10%;

	.img {
		width: 20vw;

		@include md {
			width: 25vw;
		}
	}
}

.position7 {
	top: 50%;
	left: 10%;

	.img {
		width: 20vw;
	}
}

.position8 {
	top: 75%;
	left: 30%;

	.img {
		width: 40vw;
	}
}

.position9 {
	top: 60%;
	right: 1%;

	.img {
		width: 20vw;

		@include sm {
			width: 30vw;
		}
	}
}

.position10 {
	top: 70%;
	left: 1%;

	.img {
		width: 20vw;

		@include md {
			width: 30vw;
		}
	}
}

.position11 {
	top: 79%;
	right: 1%;

	.img {
		width: 20vw;
	}
}

.position12 {
	top: 90%;
	right: 60%;
	opacity: 0.5;

	.img {
		width: 20vw;

		@include sm {
			width: 30vw;
		}
	}
}

.sm-mb-20 {
	@include sm {
		margin-bottom: 20px !important;
	}
}
</style>