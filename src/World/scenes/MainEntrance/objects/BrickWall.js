import World from "../../../World"
import * as THREE from "three";

export default class BrickWall {

    constructor() {
        this.world = new World()
        this.scene = this.world.mainEntrance.scene
        this.resources = this.world.mainEntrance.resources
        this.debug = this.world.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.world.mainEntrance.debugFolder.addFolder('BrickWall')
        }

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()

    }

    setGeometry() {
        this.geometry = new THREE.PlaneGeometry(20, 20)
    }

    setTextures() {
        this.textures = {}
        this.textures.color = this.resources.items.brickColorTexture
        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.color.repeat.set(3, 3)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.brickNormalTexture
        this.textures.normal.repeat.set(3, 3)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal,
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -10
        this.mesh.position.z = 0
        this.mesh.position.y = 10
        this.mesh.rotation.y = Math.PI / 2
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)

        // Debug
        if (this.debug.active) {
            this.debugFolder.add(this.mesh.position, 'y')
                .step(0.001)
                .min(-5)
                .max(5)
                .name('brickWallY')
            this.debugFolder.add(this.mesh.position, 'x')
                .step(0.001)
                .min(-5)
                .max(5)
                .name('brickWallX')
            this.debugFolder.add(this.mesh.position, 'z')
                .step(0.001)
                .min(-5)
                .max(5)
                .name('brickWallZ')
            // this.debugFolder.add(this.mesh.rotation, 'y')
            //     .step(Math.PI * 0.0625)
            //     .min(Math.PI * -2)
            //     .max(Math.PI * 2)
            //     .name('rotationY')
        }
    }
}