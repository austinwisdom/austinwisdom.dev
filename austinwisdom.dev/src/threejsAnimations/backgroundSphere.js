import './style.css'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//need scene, camera, renderer
//scene is container
const scene = new THREE.Scene()

//camera shows us inside the scene/container
//perspective cam mimics human eye
//1st arg is fov
//2nd arg is aspect ratio
//last args are view frustum = which things are visible from the camera, .1, 1000 shows almost everything
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const canvas = document.querySelector('canvas.webgl')
//renderer makes it all visible/happen
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setPixelRatio(window.devicePixelRatio)
//make full-screen canvas
renderer.setSize(window.innerWidth, window.innerHeight)

//move camera from center
camera.position.setZ(30)
camera.position.setX(-3)

//call renderer with args
renderer.render(scene, camera)

//allows for movement on scroll
const controls = new OrbitControls(camera, renderer.domElement)

// const pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.set(20, 20, 20)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

// const addStar = () => {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24)
//   const material = new THREE.MeshStandardMaterial( { color: 0xffffff} )
//   const star = new THREE.Mesh(geometry, material)

//   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

//   star.position.set(x, y, z)
//   scene.add(star)
// }
// Array(200).fill().forEach(addStar)

//add object
//need 1. geometry w set of vectors
//2. material
//3. mesh, combine geometry and material
const geometry = new THREE.SphereGeometry(13, 16, 16)
const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true})
const sphere = new THREE.Mesh(geometry, material)

scene.add(sphere)

//game loop to constantly animate
const animate = () => {
  requestAnimationFrame(animate)

  sphere.rotation.x += 0.005
  sphere.rotation.y += 0.005
  sphere.rotation.z += 0.005

  controls.update()

  renderer.render(scene, camera)
}

animate()