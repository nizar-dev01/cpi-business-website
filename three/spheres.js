import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	AxesHelper,
	GridHelper,
	SphereGeometry,
	Mesh,
	AmbientLight,
	SpotLight,
	PointLight,
	MeshStandardMaterial,
	MeshBasicMaterial,
	MeshPhongMaterial,
	Group
} from "three"

// import * as dat from "dat.gui"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export class SpheresArt {
	canvas
	renderer
	scene
	camera
	options
	animationStepFunctions = []

	constructor(canvas) {
		this.canvas = canvas
		const renderer = this.initRenderer(canvas)
		const { scene, camera } = this.initScene(canvas)

		// this.initDevTools()

		this.drawSpheres()
		this.addLight()

		// renderer.render(scene, camera)
		const animate = () => renderer.render(scene, camera)
		renderer.setAnimationLoop(animate)
	}

	initRenderer (canvas) {
		const renderer = new WebGLRenderer({ canvas, alpha: true })
		renderer.setClearColor(0x000000, 0)
		renderer.setSize(document.body.clientWidth, window.innerHeight)
		return this.renderer = renderer
	}

	initScene (canvas = this.canvas) {
		const scene = this.scene = new Scene()
		const camera = this.camera = new PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)

		camera.position.z = 20
		camera.position.y = 3

		// const orbit = new OrbitControls(camera, this.canvas)
		// orbit.update()

		return { scene, camera }
	}

	drawSpheres () {
		const whs = 20
		const s_radius = 2

		const sphereMaterial = new MeshStandardMaterial({
			// const sphereMaterial = new MeshBasicMaterial({
			color: "#dddddd",
			wireframe: false
		})

		const glowMaterial = new MeshPhongMaterial({
			color: 0xffffff,
			emissive: 0xffffff, // Emissive color (red)
			emissiveIntensity: 10 // Brightness of the emissive color
		})

		const darkMaterial = new MeshBasicMaterial({
			color: 0x000000,
			toneMapped: false
		});

		const spheres_config = [
			// White @ Center
			// {
			// 	radius: s_radius,
			// 	position: {
			// 		x: 0,
			// 		y: 0,
			// 		z: -2
			// 	},
			// 	material: glowMaterial
			// },
			// {
			// 	radius: s_radius,
			// 	position: {
			// 		x: 2,
			// 		y: 0,
			// 		z: -2
			// 	},
			// 	material: glowMaterial
			// },
			// {
			// 	radius: s_radius,
			// 	position: {
			// 		x: -2,
			// 		y: 0,
			// 		z: -2
			// 	},
			// 	material: glowMaterial
			// },
			// {
			// 	radius: s_radius,
			// 	position: {
			// 		x: 0,
			// 		y: 2,
			// 		z: -2
			// 	},
			// 	material: glowMaterial
			// },
			// {
			// 	radius: s_radius,
			// 	position: {
			// 		x: 0,
			// 		y: -2,
			// 		z: -2
			// 	},
			// 	material: glowMaterial
			// },
			// Spheres in the front
			{
				radius: s_radius * 0.8,
				position: {
					x: 0,
					y: 0,
					z: 1.5
				}
			},
			{
				radius: s_radius * .7,
				position: {
					x: -2.1,
					y: 2.2,
					z: 1
				}
			},
			{
				radius: s_radius,
				position: {
					x: 3,
					y: -3,
					z: 0
				}
			},
			{
				radius: s_radius,
				position: {
					x: 3,
					y: 3,
					z: 0
				}
			},
		]

		const spheres = spheres_config.map(sc => {
			const radius = sc.radius
			const sphereGeometry = new SphereGeometry(radius, whs, whs)
			const material = sc.material || sphereMaterial

			const sphere = new Mesh(sphereGeometry, material)
			sphere.position.set(
				sc.position.x,
				sc.position.y,
				sc.position.z
			)

			this.addToScene(sphere)

			sphere.geometry.computeVertexNormals(true)

			return sphere

		})

		// return spheres
	}

	addLight () {
		const ambientLight = new AmbientLight(0xffffff, 0.08)
		this.addToScene(ambientLight)

		const pointLights = [
			{
				x: 0,
				y: 0,
				z: 2
			},
			{
				x: 0,
				y: 3,
				z: 2
			},
			{
				x: 0,
				y: -3,
				z: 2
			},
			{
				x: 2,
				y: 0,
				z: 2
			},
			{
				x: -2,
				y: 0,
				z: 0
			}
		].map(lc => {
			const pointLight = new PointLight(0xffffff, 1, 10)
			pointLight.position.set(lc.x, lc.y, lc.z)
			this.addToScene(pointLight)
		})


		return {
			// ambientLight,
			pointLights
		}
	}

	// Helper methods
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