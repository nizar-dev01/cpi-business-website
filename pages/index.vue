<template>
	<index-hero />
	<index-spheres-old
		uid="fwd"
		start="top 90%"
		end="bottom top+=10%"
		:pin="false"
		:pin-for-finish="true"
	/>
	<index-about-brief />
	<index-snap-slider />
	<index-spheres-old
		direction="reverse"
		uid="bwd"
		start="top top"
		end="bottom center"
		:pin="true"
	/>
	<horizontal-text duration="100">
		<div class="h-slide-text white">
			<span>EVENTS</span> <span class="center-dot"></span>
			<span>CONTENT</span> <span class="center-dot"></span>
			<span>DIGITAL</span> <span class="center-dot"></span>
			<span>MEDIA</span> <span class="center-dot"></span>
			<span>EXPERIENCES</span> <span class="center-dot"></span>
		</div>
	</horizontal-text>
	<index-events-showcase :show-view-more="true" />
	<index-library-showcase />
</template>
