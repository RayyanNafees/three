import { PerspectiveCamera, Mesh, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Scene } from "three";

const scene = new Scene()

// Mesh

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 'blue' })
const mesh = new Mesh(geometry, material)
scene.add(mesh)

// Camera

interface Size {
    width: 800,
    height: 600
}

const size: Size = {
    width: 800,
    height: 600
}

const camera = new PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1

// Renderer

const canvas: any = document.querySelector('canvas.webgl')
const renderer = new WebGLRenderer({ canvas })
renderer.setSize(size.width, size.height)
renderer.render(scene, camera);



/*
// Alternate

const canvas: any = document.querySelector('#app')
const renderer = new WebGLRenderer({antialias:true}) //({ canvas })
renderer.setSize(size.width, size.height)
renderer.render(scene, camera);

canvas.appendChild(renderer.domElement)
*/