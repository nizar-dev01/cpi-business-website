<template>
	<header class="layout-header">
		<div class="layout-box header-box">
			<nuxt-link
				to="/"
				class="logo-link"
			>
				<img
					src="@/assets/images/logo.png"
					alt="Logo Image"
					class="logo-img"
				/>
			</nuxt-link>
			<ul class="header-nav-ul strip-list">
				<li
					v-for="link in headerLinks"
					class="header-nav-li"
				>
					<nuxt-link
						:to="link.to"
						class="header-nav-a flex-center"
					>
						<span class="header-nav-text">
							{{ link.text }}
						</span>
						<icon-arrow-down-circle
							class="header-nav-icon"
							v-if="link.icon"
						/>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<script setup>
	const headerLinks = [
		{
			to: "/",
			text: "About"
		},
		{
			to: "/",
			text: "Services",
			icon: true
		},
		{
			to: "/",
			text: "Our Portfolio"
		},
		{
			to: "/",
			text: "Blog"
		},
		{
			to: "/",
			text: "Contact Us"
		},
		{
			to: "/",
			text: "Careers"
		}
	]
</script>
<style lang="scss">
	.layout-header {
		// padding-top: 130px;
		padding-top: 30px;
	}

	.logo-link {
		height: 48px;
		width: auto;
		display: inline-block;

		img.logo-img {
			height: 100%;
			width: auto;
		}
	}

	.header-box {
		display: flex;
		justify-content: space-between;
	}

	.header-nav-ul {
		display: flex;
		justify-content: space-between;
	}

	.header-nav-li {
		margin: 0 25px;

		&:first-of-type {
			margin-left: 0;
		}

		&:last-of-type {
			margin-right: 0;
		}
	}

	.header-nav-a {
		font-size: 15px;
		font-family: 'Satoshi';
		font-weight: 500;
		text-transform: uppercase;
	}

	.header-nav-icon {
		margin-left: 15px;
	}
</style>