import './styles.css'
import Experience from './Experience/Experience'

const canvas = document.querySelector('canvas.webgl')
const experience = new Experience(canvas)

// import * as THREE from 'three';
// import { PointerLockControls } from 'three/addons/controls/PointerLockControls';
// import { OrbitControls } from 'three/addons/controls/OrbitControls';
// // import GUI from 'lil-gui';
// import { createGround } from './ground';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// const gltfLoader = new GLTFLoader()
// let door = null
// gltfLoader.load('/models/sliding_door/scene.gltf', 
// (gltf) => {
//     console.log(gltf)
//     door = gltf.scene
//     door.scale.set(2, 2, 2)
//     scene.add(door)
// })

// // Debug gui
// // const gui = new GUI()
// // const groundTweaks = gui.addFolder('Ground')
// // const controlsTweaks = gui.addFolder('Controls')
// // const glassBoxTweaks = gui.addFolder('Glass Box')
// // const brickBoxTweaks = gui.addFolder('Brick Box')

// // const gltfLoader = new GLTFLoader()
// // gltfLoader.load('/models/doors/scene.bin', 
// // (gltf) => {
// //     console.log('success')

// //     // console.log(gltf)
// // },
// // () => {
// //     console.log('progress')

// // },
// // (error) => {
// //     console.log(error)

// // })

// // const fbxLoader = new FBXLoader()
// // fbxLoader.load(
// //     'sliding-door.fbx',
// //     () => {console.log('success')},
// //     () => {console.log('progress')},
// //     () => {console.log('error')})
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// window.addEventListener('dblclick', () => {
//     // Browser compatibility
//     const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;

//     if (!fullscreenElement) {
//         if (canvas.requestFullscreen) {
//             canvas.requestFullscreen();
//         }
//         else if (canvas.webkitRequestFullscreen) {
//             canvas.webkitRequestFullscreen();
//         }
//         else if (canvas.mozRequestFullScreen) {
//             canvas.mozRequestFullScreen();
//         }
//     } else {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         }
//         else if (document.webkitExitFullscreen) {
//             document.webkitExitFullscreen();
//         }
//         else if (document.mozCancelFullScreen) {
//             document.mozCancelFullScreen();
//         }
//     }
//     }
// );

// window.addEventListener('keydown', (e) => {
//     switch (e.key) {
//         case 'w':
//             pointerLockControls.moveForward(1);
//             break;
//         case's':
//             pointerLockControls.moveForward(-1);
//             break;
//         case 'a':
//             pointerLockControls.moveRight(-1);
//             break;
//         case 'd':
//             pointerLockControls.moveRight(1);
//             break;
//     }
// });

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 1
// camera.position.y = 1
// camera.position.z = 10
// scene.add(camera)

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 10)
// pointLight.position.set(2, 10, 4)
// scene.add(pointLight)

// const ambientLight = new THREE.AmbientLight(0xffffff, 1)
// scene.add(ambientLight)

// // Controls
// const pointerLockControls = new PointerLockControls(camera, canvas);
// scene.add(pointerLockControls.getObject());


// const orbitControls = new OrbitControls(camera, canvas)
// // orbitControls.enableDamping = true
// // const orbitControlsTweaks = controlsTweaks.addFolder('OrbitControls')
// // orbitControlsTweaks.add(orbitControls, 'enabled')

// // const textureLoader = new THREE.TextureLoader()



// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// // Ground
// const ground = createGround(scene, 25, 10)

// // groundTweaks.add(ground.geometry.parameters, 'width')
// // .min(25)
// // .max(50)
// // .step(1)
// // .onFinishChange((width) => {
// //     const height = ground.geometry.parameters.height
// //     ground.geometry.dispose()
// //     ground.geometry = new THREE.PlaneGeometry(width, height)

// // });

// // groundTweaks.add(ground.geometry.parameters, 'height')
// // .min(10)
// // .max(20)
// // .step(1)
// // .onFinishChange((height) => {
// //     const width = ground.geometry.parameters.width
// //     ground.geometry.dispose()
// //     ground.geometry = new THREE.PlaneGeometry(width, height)

// // })

// // groundTweaks.add(ground.position, 'x')
// // .min(-10)
// // .max(10)
// // .step(0.1)

// // groundTweaks.add(ground.position, 'y')
// // .min(-10)
// // .max(10)
// // .step(0.1)

// // groundTweaks.add(ground.position, 'z')
// // .min(-10)
// // .max(10)
// // .step(0.1)

// const textureLoader = new THREE.TextureLoader()
// const brickColorTexture = textureLoader.load('/textures/Brick_Wall_019/Brick_Wall_019_SD/Brick_Wall_019_basecolor.jpg')

// const brickBoxDepth = ground.geometry.parameters.height
// const brickBoxWidth = 2.5
// const brickBoxHeight = 10
// const brickBoxGeometry = new THREE.BoxGeometry(brickBoxWidth, brickBoxHeight, brickBoxDepth);
// const brickBoxMaterial = new THREE.MeshBasicMaterial({ map: brickColorTexture });
// const brickBox = new THREE.Mesh(brickBoxGeometry, brickBoxMaterial);
// const brickBoxXPosition = - (ground.geometry.parameters.width / 2) + brickBoxWidth / 2
// const brickBoxZPosition = - (ground.geometry.parameters.height / 2) + brickBoxGeometry.parameters.height / 2
// const brickBoxYPosition = brickBox.geometry.parameters.height / 2
// brickBox.position.set(brickBoxXPosition, brickBoxYPosition, brickBoxZPosition);
// scene.add(brickBox);

// // Glass box
// const glassBoxWidth = ground.geometry.parameters.width - brickBoxWidth
// const glassBoxDepth = 2.5
// const glassBoxHeight = 10
// const glassBoxGeometry = new THREE.BoxGeometry(glassBoxWidth, glassBoxHeight, glassBoxDepth);

// const glassBoxColorTexture = textureLoader.load('/textures/Glass_Window_002/Glass_Window_002_SD/Glass_Window_002_basecolor.jpg')
// const glassBoxMaterial = new THREE.MeshBasicMaterial({ map: glassBoxColorTexture });
// const glassBox = new THREE.Mesh(glassBoxGeometry, glassBoxMaterial);

// const glassBoxXPosition = brickBoxXPosition + (brickBoxWidth / 2) + (glassBoxWidth / 2)
// const glassBoxYPosition = glassBoxHeight / 2
// const glassBoxZPosition =  - (ground.geometry.parameters.height / 2)

// glassBox.position.set(glassBoxXPosition, glassBoxYPosition, glassBoxZPosition);
// scene.add(glassBox);


// // const doorColorTexture = textureLoader.load('/textures/Door_001/Door_001_SD/Door_001_basecolor.jpg')


// /**
//  * Animate
//  */
// // const clock = new THREE.Clock()

// const tick = () =>
// {
//     // const elapsedTime = clock.getElapsedTime()

//     // Update controls

//     if (door && door.position) {
//         door.position.z = - (ground.geometry.parameters.height / 2) + (glassBoxDepth / 2) + 0.15
//     }

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)


// }

// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

// tick()
