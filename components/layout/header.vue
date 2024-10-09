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
					ref="fallInLogo"
				/>
			</nuxt-link>
			<ul
				class="header-nav-ul strip-list"
				:class="{ 'toggle-header-nav': toggleMenuVisibility }"
			>
				<li
					v-for="link in headerLinks"
					class="header-nav-li"
					ref="fallInElements"
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

	const fallInElements = ref()

	const fallInLogo = ref()

	const toggleMenuVisibility = ref(false)

	const toggleNavMenu = () => {
		toggleMenuVisibility.value = !toggleMenuVisibility.value
	}

	onMounted(() => {
		const {
			$gsap
		} = useNuxtApp()

		$gsap.set(fallInElements.value, {
			y: -40,
			opacity: 0
		})

		$gsap.set(fallInLogo.value, {
			opacity: 0,
			y: -40
		})

		$gsap.to(fallInElements.value, {
			y: 0,
			opacity: 1,
			duration: 0.4,
			stagger: 0.08,
			delay: 3.7
		})
		// logo
		$gsap.to(fallInLogo.value, {
			y: 0,
			opacity: 1,
			duration: 0.4,
			// stagger: 0.08,
			delay: 3.7
		})
	})
</script>
<style lang="scss">
	.layout-header {
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

	$li-height: 80px;
	$li-count: 6;

	.header-nav-ul {
		display: flex;
		justify-content: space-between;

		@include xl {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			flex-direction: column;
			background: #1B1B1B;
			transition: opacity 0.4s ease-in-out, height 0.5s ease-in-out;
			border-radius: 10px;
			box-shadow: 0 20px 30px -10px #000;
			overflow: hidden;
			height: 0px;
			opacity: 0;
			z-index: 1;
		}

		&.toggle-header-nav {
			height: calc($li-height * $li-count);
			opacity: 1;
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
			height: $li-height;
			line-height: $li-height;
			z-index: 2;
			padding: 0 20px;
			border-bottom: 1px solid #ffffff09;
			box-sizing: border-box;
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
				top: 0%;
			}

			&::after {
				bottom: 0%;
			}

			&.toggle {
				&::before {
					top: 50%;
					transform: translate(0, -50%) rotateZ(45deg);
				}

				&::after {
					bottom: 50%;
					transform: translate(0, 50%) rotateZ(-45deg);
				}
			}

		}
	}
</style>