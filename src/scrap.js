// // Cursor
// const cursor = {
//     x: 0,
//     y: 0,
// }
// window.addEventListener('mousemove', (e) => {
//     const x = e.clientX / window.innerWidth;
//     const y = e.clientY / window.innerHeight;
//     cursor.x = x;
//     cursor.y = y;
// });

// Textures
// const textureLoader = new THREE.TextureLoader()
// const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
// const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
// const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')
// const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
// const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
// const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
// const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
// const matcapTexture = textureLoader.load('./textures/matcaps/1.png')
// const gradientTexture = textureLoader.load('./textures/gradients/3.jpg')

// matcapTexture.colorSpace = THREE.SRGBColorSpace
// doorColorTexture.colorSpace = THREE.SRGBColorSpace

// Materials
// const materials = {
//     basic: new THREE.MeshBasicMaterial({ map: doorColorTexture }),
//     lambert: new THREE.MeshLambertMaterial({ color: 0xff0000 }),
//     phong: new THREE.MeshPhongMaterial({ color: 0xff0000 }),
//     normal: new THREE.MeshNormalMaterial(),
//     depth: new THREE.MeshDepthMaterial(),
//     wireframe: new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }),
//     wireframeDepth: new THREE.MeshDepthMaterial({ wireframe: true }),
//     matCap: new THREE.MeshMatcapMaterial({ matcap: matcapTexture }),
//     standard: new THREE.MeshStandardMaterial(),
//     physical: new THREE.MeshPhysicalMaterial(),
// }

// materials.physical.metalness = 0
// materials.physical.roughness = 0
// materials.physical.map = doorColorTexture
// materials.physical.aoMap = doorAmbientOcclusionTexture
// materials.physical.aoMapIntensity = 1
// materials.physical.displacementMap = doorHeightTexture
// materials.physical.displacementScale = 0.1
// materials.physical.metalnessMap = doorMetalnessTexture
// materials.physical.roughnessMap = doorRoughnessTexture
// materials.physical.normalMap = doorNormalTexture
// materials.physical.normalScale.set(0.5, 0.5)
// materials.physical.alphaMap = doorAlphaTexture
// materials.physical.transparent = true

// materials.physical.transmission = 1
// materials.physical.ior = 1.5
// materials.physical.thickness = 0.5

// Geometries
// const geometries = {
//     cube: new THREE.BoxGeometry(1, 1, 1),
//     sphere: new THREE.SphereGeometry(0.5, 32, 32),
//     cylinder: new THREE.CylinderGeometry(1, 1, 1, 32),
//     plane: new THREE.PlaneGeometry(1, 1, 32, 32),
//     torus: new THREE.TorusGeometry(0.3, 0.2, 32, 32),
// }

// gui.add(materials.physical, 'transmission').min(0).max(1).step(0.0001)
// gui.add(materials.physical, 'ior').min(1).max(2).step(0.0001)
// gui.add(materials.physical, 'thickness').min(0).max(1).step(0.0001)

// Meshes
// const meshes = {
//     sphere: new THREE.Mesh(geometries.sphere, materials.physical),
//     plane: new THREE.Mesh(geometries.plane, materials.physical),
//     torus: new THREE.Mesh(geometries.torus, materials.physical),
// }

// meshes.sphere.position.x = -2
// meshes.torus.position.x = 2

// scene.add(meshes.sphere, meshes.plane, meshes.torus)

// // DEBUG

// const debugObject = {}
// gui.add(materials.physical, 'metalness').min(0).max(1).step(0.0001)
// gui.add(materials.physical, 'roughness').min(0).max(1).step(0.0001)

// Light
// const pointLight = new THREE.PointLight(0xffffff, 10)
// pointLight.position.set(2, 3, 4)
// scene.add(pointLight)

// const ambientLight = new THREE.AmbientLight(0xffffff, 1)
// scene.add(ambientLight)

//Environment map
// const rgbeLoader = new RGBELoader()
// rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) => {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping
//     scene.background = environmentMap
//     scene.environment = environmentMap

// })

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// Axes Helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);