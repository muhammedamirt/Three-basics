import * as THREE from 'three'
import './style.css'

// creating a scene 

const scene = new THREE.Scene()

// create an 3d object

const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83'
})
// for companied the geometry and material
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
// sizes 
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
// light 
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(10, 10, 10)
scene.add(light)
// camera 
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)
// render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)