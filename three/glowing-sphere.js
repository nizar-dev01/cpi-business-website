import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	SphereGeometry,
	MeshBasicMaterial,
	Mesh,
	ShaderMaterial,
	AdditiveBlending,
	BackSide
} from "three"

import vertexShader from './shaders/halo.vert.glsl'
import fragmentShader from './shaders/halo.frag.glsl'

export class SpheresArt {
	canvas
	renderer
	scene
	camera
	options
	animationStepFunctions = []

	constructor(canvas) {
		this.canvas = canvas

		const { scene, camera } = this.initScene()
		const renderer = this.initRenderer(canvas)

		camera.position.z = 15;


		// creating a halo
		const halo = this.drawHalo()

		//creating a sphere
		const sphere = this.drawSphere()

		function animate () {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
			sphere.rotation.y += 0.003;
		}

		animate();
	}

	initRenderer (canvas) {
		const renderer = new WebGLRenderer({ canvas, alpha: true })
		// renderer.setClearColor(0x000000, 0)
		renderer.setSize(document.body.clientWidth, window.innerHeight)
		return this.renderer = renderer
	}

	initScene () {
		const scene = this.scene = new Scene();
		const camera = this.camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

		return { scene, camera }
	}

	drawSphere () {
		const geometry = new SphereGeometry(5, 50, 50)
		const material = new MeshBasicMaterial(
			{
				color: 0xffffff
			}
		)
		const sphere = new Mesh(geometry, material);
		this.addToScene(sphere);
		return sphere
	}

	drawHalo () {
		const material = new ShaderMaterial({
			vertexShader,
			fragmentShader,
			blending: AdditiveBlending,
			side: BackSide
		})
		const s_geometry = new SphereGeometry(5, 50, 50)
		const halo = new Mesh(
			s_geometry,
			material
		)
		halo.scale.set(1.2, 1.2, 1.2);
		this.addToScene(halo);
		return halo
	}

	// Helper Methods
	addToScene (obj) {
		return this.scene.add(obj)
	}

	initDevTools () {
		const axesHelper = new AxesHelper(3)
		this.addToScene(axesHelper)

		const gridHelper = new GridHelper(30, 10)
		this.addToScene(gridHelper)
	}
}