<template>
	<Transition
		name="rise-transition"
		@before-enter="onBeforeAnimationEnter"
		@enter="onAnimationEnter"
		:css="false"
		appear
		mode="in-out"
	>
		<slot></slot>
	</Transition>
</template>
<script setup>
	const props = defineProps(['duration', 'delay'])
	const {
		$gsap: gsap
	} = useNuxtApp()
	const onBeforeAnimationEnter = el => {
		gsap.set(el, {
			y: 150,
			opacity: 0
		})
		const br = el.getBoundingClientRect()
	}
	const onAnimationEnter = el => {
		gsap.to(el, {
			y: 0,
			opacity: 1,
			duration: props.duration || 1,
			delay: props.delay === undefined ? 0 : props.delay
		})
	}
</script>