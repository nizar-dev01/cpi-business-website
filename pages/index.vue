<template>
	<client-only>
		<index-hero />
		<index-spheres-old uid="fwd" />
		<index-about-brief />
		<!-- <index-snap-slider /> -->
		<index-spheres-old
			direction="reverse"
			uid="bwd"
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
	</client-only>
</template>
