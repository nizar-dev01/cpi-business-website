<template>
	<section id="about-brief">
		<horizontal-text duration="100">
			<div class="h-slide-text">
				<span>EVENTS</span> <span class="center-dot"></span>
				<span>CONTENT</span> <span class="center-dot"></span>
				<span>DIGITAL</span> <span class="center-dot"></span>
				<span>MEDIA</span> <span class="center-dot"></span>
				<span>EXPERIENCES</span> <span class="center-dot"></span>
			</div>
		</horizontal-text>
		<div class="layout-box noverflow">
			<div class="flex-col">
				<h4 class="about-h4">
					<text-splitter
						text="We are an ambitious, optimistic and creative bunch of people."
						:scroll-reveal="true"
					/>
					<text-splitter
						text="We are here to help our clients defy what is conventional, redefine their experiences and deliver unforgettable brand moments."
						:scroll-reveal="true"
					/>
				</h4>
				<h4 class="origin-h4">
					<text-splitter
						text="Since 2016, we have created meaningful impact through our physical, virtual & hybrid events, activations and brand engagements."
						:scroll-reveal="true"
					/>
					<br><br>
					<text-splitter
						text="We have proudly been a part of the growth journey of the following key clients:"
						:scroll-reveal="true"
					/>
				</h4>

				<!-- Brands -->
				<div class="brands-container">
					<div class="brands-row">
						<icon-brand-abu-dhabi class="brands-item-icon"></icon-brand-abu-dhabi>

						<icon-brand-etisalt class="brands-item-icon"></icon-brand-etisalt>

						<icon-brand-hub71 class="brands-item-icon"></icon-brand-hub71>

						<icon-brand-adgm class="brands-item-icon"></icon-brand-adgm>

						<icon-brand-savi class="brands-item-icon"></icon-brand-savi>
						<!-- </div>
					<div class="brands-row"> -->

						<icon-brand-justice class="brands-item-icon"></icon-brand-justice>

						<icon-brand-aerofarm class="brands-item-icon"></icon-brand-aerofarm>

						<icon-brand-central-bank class="brands-item-icon"></icon-brand-central-bank>

						<icon-brand-adq class="brands-item-icon"></icon-brand-adq>

						<icon-brand-miral class="brands-item-icon"></icon-brand-miral>
					</div>
				</div>
				<!-- /Brands -->

				<h4 class="impact-h4">
					<text-splitter
						text="We unite brand, tech and"
						:scroll-reveal="true"
					/>
					<br>
					<text-splitter
						text="experience to turnaround projects "
						:scroll-reveal="true"
					/>
					<br>
					<text-splitter
						text="that drive impact to your key audiences."
						:scroll-reveal="true"
					/>
				</h4>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
	h4.about-h4 {
		font-size: 58px;
		line-height: 80px;
		font-weight: 400;
		max-width: 1000px;
		width: 97%;
		margin: 120px auto 0 auto;
		font-family: 'Satoshi';
		text-align: left;

		// @include break(1425px) {
		// 	font-size: 58px;
		// 	font-weight: 500;
		// }

		@include xxl {
			font-size: 53px;
			line-height: 73px;
		}

		@include lg {
			margin-left: 0;
		}

		@include md {
			font-size: 45px;
			line-height: 62px;
		}

		@include break(690px) {
			font-size: 40px;
			line-height: 57px;
		}

		@include sm {
			font-size: 38px;
			line-height: 53px;
		}
	}

	h4.origin-h4 {
		width: 97%;
		max-width: 700px;
		font-family: Satoshi;
		font-size: 35px;
		font-weight: 400;
		line-height: 60px;
		text-align: left;
		margin: 210px 0 210px auto;

		@include xxl {
			font-size: 35px;
			line-height: 50px;
		}

		@include lg {
			margin: 130px 0 180px;
		}

		@include sm {
			font-size: 30px;
			line-height: 45px;
		}
	}

	.brands-container {
		margin: -32px auto;
		max-width: 1524px;
		width: 97%;
	}

	.brands-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		// padding: 32px 0;
		margin: -40px -15px;

		@include md {
			flex-wrap: wrap;
		}
	}

	.brands-item-icon {
		padding: 40px 15px;
		width: calc(20% - 30px);
		height: 100%;
		max-height: 85px;
		max-width: 235px;

		@include xxl {
			max-width: 170px;
		}

		@include md {
			max-width: 130px;
		}

		@include sm {
			max-width: unset;
			width: 100%;
			max-height: 50px;
			margin: 10px auto;
		}
	}

	h4.impact-h4 {
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 700;
		line-height: 71.55px;
		text-align: center;
		// margin: 276px 0 190px 0;
		margin: 276px 0 0 0;

		@include xmd {
			font-size: 45px;
			line-height: 62px;
			margin-top: 180px;
		}

		@include md {
			font-size: 32px;
			line-height: 52px;
		}

		@include sm {
			font-size: 28px;
			line-height: 45px;
			margin: 170px 5px;
		}
	}

	#about-brief {
		background: white;
		min-height: 100vh;
		// padding-top: 200px;
		color: black;
	}
</style>