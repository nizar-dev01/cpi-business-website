<template>
	<section id="contact-main-section">
		<div class="layout-box">
			<div class="container">
				<div class="row">
					<div class="col cf-col">
						<contact-form />
					</div>
				</div>
			</div>
		</div>

		<div class="bimg-box">
			<div class="bimg-col">
				<img
					src="@/assets/images/contact-img.png"
					alt="Background Image"
				/>
			</div>
		</div>
	</section>
</template>
<script setup>
	useHead({
		title: "CPI Business | Contact Us"
	})
</script>
<style lang="scss" scoped>
	.bimg-box {
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		display: flex;

		.bimg-col {
			width: 60%;
			margin-left: auto;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	#contact-main-section {
		width: 100vw;
		overflow: hidden;
		position: relative;
	}

	.container {
		width: 100%;
	}

	.row {
		display: flex;
	}

	.col {
		&.cf-col {
			width: 40%;
			display: flex;
			align-items: center;
			padding: 150px 0;
		}
	}
</style>