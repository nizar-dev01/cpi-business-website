<template>
	<section id="contact-main-section">
		<div class="layout-box">
			<div class="container">
				<div class="row">
					<div class="col cf-col"></div>
					<div class="col ci-col">
						<img
							src="@/assets/images/contact-img.png"
							alt=""
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	useHead({
		title: "CPI Business | Contact Us"
	})
</script>
<style lang="scss">
	#contact-main-section {
		width: 100vw;
		overflow: hidden;
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
		}

		&.ci-col {
			width: 60%;

			img {
				width: auto;
				height: 100vh;
				display: block;
			}
		}
	}
</style>