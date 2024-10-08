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
			<ul
				class="header-nav-ul strip-list"
				:class="{ 'toggle-header-nav': toggleMenuVisibility }"
			>
				<li
					v-for="link in headerLinks"
					class="header-nav-li"
				>
					<nuxt-link
						:to="link.to"
						class="header-nav-a"
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
			<button
				class="nav-toggler"
				:class="{ 'toggle': toggleMenuVisibility }"
				@click.prevent="toggleNavMenu"
			>
				MENU
			</button>
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

	const toggleMenuVisibility = ref(false)

	const toggleNavMenu = () => {
		toggleMenuVisibility.value = !toggleMenuVisibility.value
	}
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

		@include xl {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			flex-direction: column;
			background: #1c1c1c;
			transition: max-height 1s ease-in-out;
			max-height: 0;
			overflow: hidden;
			height: auto;
			z-index: 1;
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 0 10px 20px -10px #000;
		}

		&.toggle-header-nav {
			max-height: 50vh;
		}
	}

	.header-nav-li {
		margin: 0 25px;

		&:first-of-type {
			margin-left: 0;
		}

		&:last-of-type {
			margin-right: 0;

			@include xl {
				border-bottom: 0;
			}
		}

		@include xl {
			margin: 0;
			height: 50px;
			line-height: 50px;
			z-index: 2;
			padding: 0 20px;
			border-bottom: 1px solid #ffffff09;
		}
	}

	.header-nav-a {
		font-size: 15px;
		font-family: 'Satoshi';
		font-weight: 500;
		text-transform: uppercase;
		display: flex;
		align-items: center
	}

	.header-nav-icon {
		margin-left: 15px;
	}

	.nav-toggler {
		display: none;
		cursor: pointer;

		@include xl {
			display: block;
			background: none;
			border: none;
			color: transparent;
			height: 10px;
			width: 30px;
			position: relative;
			margin: auto 0;

			&::after,
			&::before {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				height: 2px;
				width: 100%;
				display: block;
				background: white;
				border-radius: 1px;
				transition: all 0.3s ease-in-out;
				transform-origin: center;
			}

			&::before {
				bottom: 100%;
			}

			&::after {
				top: 100%;
			}

			&.toggle {
				&::before {
					bottom: 50%;
					transform: translate(0, 50%) rotateZ(45deg);
				}

				&::after {
					top: 50%;
					transform: translate(0, -50%) rotateZ(-45deg);
				}
			}

		}
	}
</style>