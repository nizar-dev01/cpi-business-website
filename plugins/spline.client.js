export default defineNuxtPlugin(() => {
	[
		{
			src: "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js",
			type: "module"
		},
		// {
		// 	src: "https://prod.spline.design/LEvjG3OETYd2GsRw/scene.splinecode"
		// },
		// {
		// 	src: "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.6/lottie.min.js"
		// }
	].forEach(({ src, type }) => {
		const script = document.createElement('script');
		script.src = src
		if (type) {
			script.type = 'module'
		}
		document.body.appendChild(script);
	})
})