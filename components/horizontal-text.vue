<template>
	<div class="rollingText-track">
		<div
			class="rollingText"
			ref="rollingText"
		>
			<slot></slot>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps(['duration'])
	const rollingText = ref(null)
	onMounted(() => {
		const {
			$Observer: Observer,
			$gsap: gsap,
			$ScrollTrigger: ScrollTrigger
		} = useNuxtApp()

		let direction = 1; // 1 = forward, -1 = backward scroll

		const roll_tl = roll(
			rollingText.value,
			{
				duration: props.duration || 10
			}
		)

		// const scroll =
		ScrollTrigger.create({
			trigger: rollingText.value,
			onUpdate (self) {
				if (self.direction !== direction) {
					direction *= -1;
					// Reset the animation
					gsap.to(
						roll_tl,
						{
							timeScale: direction,
							overwrite: true
						}
					);
				}
			}
		});

		Observer.create({
			onChangeY (self) {
				let factor = 2.5
				let operator = 2.5

				if (self.deltaY < 0) {
					factor *= -1;
				}

				gsap.timeline({
					defaults: {
						ease: "none",
					}
				})
					.to(
						roll_tl,
						{
							timeScale: factor * operator,
							duration: 0.2
						}
					).to(
						roll_tl,
						{
							timeScale: factor / operator,
							duration: 1
						}
					)
			}
		});

		// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
		function roll (targets, vars, reverse) {
			const tl = gsap.timeline({
				repeat: -1,
				onReverseComplete () {
					this.totalTime(
						this.rawTime() + this.duration() * 10
					); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
				}
			});
			vars = vars || {};
			vars.ease || (vars.ease = "none");

			// Manage the cloning of the child elements (For keeping the track filled with content)
			gsap.utils.toArray(targets).forEach(el => {
				let clone1 = el.cloneNode(true);
				let clone2 = el.cloneNode(true);
				let clone3 = el.cloneNode(true);
				el.parentNode.appendChild(clone1);
				el.parentNode.appendChild(clone2);
				el.parentNode.appendChild(clone3);
				gsap.set(
					clone1,
					{
						position: "absolute",
						top: el.offsetTop,
						left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
					}
				);
				gsap.set(
					clone2,
					{
						position: "absolute",
						top: clone1.offsetTop,
						left: clone1.offsetLeft + (reverse ? -clone1.offsetWidth : clone1.offsetWidth)
					}
				);
				gsap.set(
					clone3,
					{
						position: "absolute",
						top: clone2.offsetTop,
						left: clone2.offsetLeft + (reverse ? -clone2.offsetWidth : clone2.offsetWidth)
					}
				);
				tl.to([el, clone1, clone2, clone3], { xPercent: reverse ? 100 : -100, ...vars }, 0);
			});
			return tl;
		}
	})
</script>
<style lang="scss" scoped>
	.rollingText-track {
		overflow: hidden;
		position: relative;
	}

	.wrapperRollingText {
		white-space: nowrap;
	}

	.rollingText {
		display: inline-block;
		padding-left: 10px;
		white-space: nowrap;
		position: relative
	}
</style>