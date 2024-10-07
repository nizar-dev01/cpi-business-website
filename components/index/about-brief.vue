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
		<div class="layout-box">
			<div class="flex-col">
				<h4 class="about-h4">
					<text-splitter
						text="We are an ambitious, optimistic and creative bunch of people."
						:scroll-reveal="true"
					/>
					<br />
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
						<icon-brand-abu-dhabi></icon-brand-abu-dhabi>

						<icon-brand-etisalt></icon-brand-etisalt>

						<icon-brand-hub71></icon-brand-hub71>

						<icon-brand-adgm></icon-brand-adgm>

						<icon-brand-savi></icon-brand-savi>
					</div>
					<div class="brands-row">

						<icon-brand-justice></icon-brand-justice>

						<icon-brand-aerofarm></icon-brand-aerofarm>

						<icon-brand-central-bank></icon-brand-central-bank>

						<icon-brand-adq></icon-brand-adq>

						<icon-brand-miral></icon-brand-miral>
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
		font-size: 93px;
		font-weight: 400;
		max-width: 1412px;
		width: 97%;
		margin: 120px auto 0 auto;
		font-family: 'Satoshi';
		line-height: 113px;
		text-align: left;
	}

	h4.origin-h4 {
		width: 97%;
		max-width: 843px;
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 400;
		line-height: 71.55px;
		text-align: left;
		margin: 210px 0 210px auto;
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
		flex-wrap: nowrap;
		padding: 32px 0;
	}

	h4.impact-h4 {
		font-family: Satoshi;
		font-size: 53px;
		font-weight: 700;
		line-height: 71.55px;
		text-align: center;
		margin: 276px 0 190px 0;
	}

	#about-brief {
		background: white;
		min-height: 100vh;
		padding-top: 200px;
		color: black;
	}
</style>