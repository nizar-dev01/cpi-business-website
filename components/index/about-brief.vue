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
						text="Our journey isn’t marked by chasing the next big breakthrough, but rather by powerful collaborations with partners, people and projects who share our passion for bringing extraordinary visions to life."
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/>
					<text-splitter
						text="We are here to help our clients defy what is conventional, redefine their experiences and deliver unforgettable brand moments."
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/>
				</h4>
				<h4 class="origin-h4">
					<text-splitter
						text="Since 2016, we have been on a mission to create meaningful impact and unforgettable experiences through our work. We are storytellers at heart and love crafting content narratives across the mediums of events, digital, brand activations and beyond."
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/>
					<br><br>
					<text-splitter
						text="We are proud to have collaborated with the following partners:"
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/>
				</h4>

				<!-- Brands -->
				<brands-tiles sm-horizontal-reveal />
				<!-- /Brands -->

				<h4 class="impact-h4">
					<text-splitter
						text="We believe in continuously and simultaneously enhancing existing creative models while creating new capabilities to respond to future opportunities using technology, design and content."
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/>
					<br>
					<!-- <text-splitter
						text="experience to turnaround projects "
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/>
					<br>
					<text-splitter
						text="that drive impact to your key audiences."
						:scroll-reveal="false"
						:stagger="false"
						:duration="1"
					/> -->
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
		margin: 50px 0 0;
	}

	@include break(690px) {
		font-size: 40px;
		line-height: 57px;
	}

	@include sm {
		font-size: 25px;
		line-height: 130%;
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

	@include md {
		margin: 50px 0 150px 0;
	}

	@include sm {
		font-size: 20px;
		line-height: 130%;
		opacity: 0.9;
	}
}

h4.impact-h4 {
	font-family: Satoshi;
	font-size: 53px;
	font-weight: 700;
	line-height: 71.55px;
	text-align: center;
	// margin: 276px 0 190px 0;
	margin: 276px auto 0;
	max-width: 1300px;

	@include xmd {
		font-size: 45px;
		line-height: 62px;
		margin-top: 180px;
	}

	@include md {
		font-size: 32px;
		line-height: 130%;
		font-weight: 500;

		br {
			display: none;
		}

		span {
			display: inline;
		}
	}

	@include sm {
		font-size: 25px;
		line-height: 130%;
		margin: 150px 0px 0;
		text-align: left;
	}
}

#about-brief {
	background: white;
	min-height: 100vh;
	// padding-top: 200px;
	color: black;
	padding-bottom: 200px;
	margin-top: -2px;

	@include md {
		padding-bottom: 100px;
	}
}
</style>