<template>
	<header
		class="layout-header"
		ref="headerElement"
	>
		<div class="layout-box header-box">
			<nuxt-link
				to="/"
				class="logo-link"
				@click.stop="() => {
					toggleSubMenu(false)
					toggleNavMenu(false)
				}"
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
					:class="{ 'submenu-parent': !!link.sub_menu }"
					ref="fallInElements"
				>
					<nuxt-link
						:to="link.to"
						class="header-nav-a"
						@mouseenter="() => {
							if (!!link.sub_menu) {
								toggleSubMenu(true, link)
							} else if (isSubmenuActive) {
								toggleSubMenu(false)
							}
						}"
						@click="() => {
							if (isSubmenuActive) {
								toggleSubMenu(false)
							}
						}"
					>
						<text-roll :text="link.text" />
						<icon-arrow-down-circle
							class="header-nav-icon"
							v-if="!!link.sub_menu"
						/>
					</nuxt-link>
				</li>
			</ul>
			<button
				class="nav-toggler"
				:class="{ 'toggle': toggleMenuVisibility }"
				@click.prevent="toggleNavMenu()"
			>
				MENU
			</button>
		</div>
	</header>
	<div
		class="submenu-container"
		:class="{ active: isSubmenuActive }"
	>
		<div
			class="submenu-box"
			ref="submenuBox"
		>
			<div class="smb-spacer"></div>
			<div class="layout-box">
				<div class="sm-container">
					<div class="sm-row">
						<div class="sm-col title">
							<div class="sm-item">
								<h2
									class="submenu-title"
									ref="submenuServicesHeader"
								>
									Our Services
								</h2>
							</div>
						</div>
						<div class="sm-col list">
							<div class="sm-item">
								<ul class="sm-list strip-list">
									<li
										v-for="(item, i) in submenuItems"
										@mouseenter="activateSubmenuItem(i)"
										class="smli"
										:class="{ active: item.is_active }"
										ref="submenuElements"
									>
										{{ item.text }}
									</li>
								</ul>
							</div>
						</div>
						<div class="sm-col display">
							<div
								class="sm-item"
								ref="submenuImageBox"
							>
								<img
									v-for="item in submenuItems"
									:src="item.image"
									:alt="item.text"
									class="smimg"
									:class="{ active: item.is_active }"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="submenu-bg"
			@mouseenter="toggleSubMenu(false)"
		></div>
	</div>
</template>
<script setup>
	const {
		$gsap,
		$lenis
	} = useNuxtApp()

	const headerLinks = [
		{
			to: "/about",
			text: "About"
		},
		{
			to: "/services",
			text: "Services",
			sub_menu: []
		},
		{
			to: "/portfolio",
			text: "Our Portfolio"
		},
		{
			to: "/blog",
			text: "Blog"
		},
		{
			to: "/contact",
			text: "Contact Us"
		},
		// {
		// 	to: "/careers",
		// 	text: "Careers"
		// }
	]

	const fallInElements = ref()

	const fallInLogo = ref()

	const toggleMenuVisibility = ref(false)

	const toggleNavMenu = (value) => {
		toggleMenuVisibility.value = (value !== undefined)
			? value : !toggleMenuVisibility.value
		console.log(value)
	}

	const submenuItems = ref([
		{
			is_active: true,
			image: "img/services/bespoke.png",
			text: 'IP Creation & Strategic Thinking'
		},
		{
			is_active: false,
			image: "img/services/events.png",
			text: 'Event Production'
		},
		{
			is_active: false,
			image: "img/services/consultancy.png",
			text: 'Concept Development & Management'
		},
		{
			is_active: false,
			image: "img/services/content.png",
			text: 'Content Creation'
		},
		{
			is_active: false,
			image: "img/services/design.png",
			text: 'Design & Branding'
		},
		{
			is_active: false,
			image: "img/services/digital.png",
			text: 'Digital Solutions'
		}
	])
	const isSubmenuActive = ref(false)

	let toggle_menu_tl;
	const submenuBoxHeight = ref(0)
	const activateSubmenuItem = (index) => {
		submenuItems.value.forEach((item, i) => {
			if (i === index) {
				item.is_active = true
			} else {
				item.is_active = false
			}
		})
	}
	const toggleSubMenu = (value) => {
		if (window.innerWidth < 1151) return
		isSubmenuActive.value = value === undefined ? !isSubmenuActive.value : value
		if (isSubmenuActive.value) {
			toggle_menu_tl.play()
			$lenis.instance.stop()
		} else {
			toggle_menu_tl.reverse()
			$lenis.instance.start()
		}
	}

	const submenuBox = ref()
	const submenuElements = ref()
	const submenuServicesHeader = ref()
	const submenuImageBox = ref()

	const headerElement = ref()
	const headerHeight = ref(0)

	onMounted(() => {
		headerHeight.value = headerElement.value.getBoundingClientRect().height

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

		// Toggle Menu

		const _smels = submenuElements.value
		const _smh = submenuServicesHeader.value
		const _smb = submenuBox.value
		const _smib = submenuImageBox.value

		toggle_menu_tl = $gsap.timeline({
			paused: true,
			defaults: {
				duration: 0.5
			}
		})
		const _smbh = _smb.clientHeight
		submenuBoxHeight.value = _smbh

		const label_s = "begin"
		toggle_menu_tl
			.add(label_s)
			.to(_smb, {
				height: _smbh
			}, label_s)
			.to(_smels, {
				y: 0,
				stagger: 0.03
			}, label_s)
			.to(_smh, {
				y: 0
			}, label_s)
			.to(_smib, {
				y: 0
			}, label_s)

		$gsap.set(
			_smb,
			{
				height: 0
			}
		)

		$gsap.set(_smels, {
			y: 100
		})

		$gsap.set(_smh, {
			y: 100
		})

		$gsap.set(_smib, {
			y: 100
		})

	})

	defineExpose({
		headerHeight
	})
</script>
<style lang="scss">
	.layout-header {
		padding-top: 30px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
	}

	.logo-link {
		height: 48px;
		width: auto;
		display: inline-block;
		position: relative;

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
		align-items: center;
		line-height: 25px;

		@include xl {
			line-height: inherit;
		}
	}

	.header-nav-icon {
		margin-left: 15px;
	}

	.nav-toggler {
		display: none;
		cursor: pointer;
		padding: 0;

		@include xl {
			display: block;
			background: none;
			border: none;
			color: transparent;
			height: 30px;
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
				top: 50%;
				transform: translate(0, -5px);
			}

			&::after {
				bottom: 50%;
				transform: translate(0, 5px);
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

	.submenu-container {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 9;
		pointer-events: none;

		.submenu-bg {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			background: #0000007b;
			z-index: 1;
			opacity: 0;
			visibility: hidden;
			transition: all 0.5s ease-in-out;
		}

		.submenu-box {
			background: #141414;
			z-index: 2;
			position: relative;
			overflow: hidden;
			box-shadow: 0 10px 30px -10px black;

			.smb-spacer {
				padding: 100px 0 0;
				margin-bottom: 55px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.065);
			}
		}

		&.active {
			pointer-events: all;

			.submenu-bg {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	.sm-container {
		width: 100%;
		overflow: hidden;

		.sm-row {
			margin: 0 -10px;
			display: flex;

			.sm-col {
				margin: 0 10px;

				.sm-item {
					position: relative;
					height: 100%;
					width: 100%;
				}

				&.title {
					width: 20%;
				}

				&.list {
					width: 40%;
				}

				&.display {
					width: 40%;

					.smimg {
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translate(-50%, 0);
						width: 100%;
						height: auto;
						max-height: 100%;
						object-fit: contain;
						opacity: 0;
						transition: all 0.5s ease-in-out;

						&.active {
							opacity: 1;
						}
					}
				}
			}
		}

		.sm-list {
			margin: 0;
			padding-bottom: 45px;

			.smli {
				margin: 0 0 15px;
				font-size: 30px;
				font-weight: 700;
				cursor: pointer;
				user-select: none;
				transition: opacity 0.4s ease-in-out;
				line-height: 45px;
				max-width: 430px;

				&.active {
					opacity: 1;
				}
			}

			&:hover {
				.smli {
					opacity: 0.2;

					&.active {
						opacity: 1;
					}
				}
			}
		}

		h2.submenu-title {
			font-family: 'Newyork';
			font-size: 20px;
			font-weight: 500;
			line-height: 19.88px;
			letter-spacing: 0.05em;
			text-align: left;
			margin: 0;
		}
	}

</style>