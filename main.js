import * as THREE from 'three'
import './style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

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


// controls
const controls=new OrbitControls(camera,canvas)
// resizing

window.addEventListener('resize', () => {
  //update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  // update camera 
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height)
})

const loop = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

