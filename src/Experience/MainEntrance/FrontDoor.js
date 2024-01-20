import Experience from "../Experience"
import * as THREE from "three";


export default class FrontDoor {
    constructor() {
        this.experience = new Experience
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.gui.addFolder('FrontDoor')
        }

        // Setup
        this.resource = this.resources.items.frontDoorModel

        this.setModel()
        this.setDebug()

    }

    setModel() {
        this.model = this.resource
        this.model.scale.set(0.04, 0.04, 0.04)
        this.model.position.z = -9.7
        this.model.rotation.y = Math.PI

        this.scene.add(this.model)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh ) {
                child.castShadow = true
            }
        })
    }

    setDebug() {
        if (this.debug.active) {
            this.debugFolder.add(this.model.position, 'x')
                .step(0.001)
                .name('position.x')
                .min(-10)
                .max(10)
            this.debugFolder.add(this.model.position, 'y')
                .step(0.001)
                .name('position.y')
                .min(-10)
                .max(10)
            this.debugFolder.add(this.model.position, 'z')
                .step(0.001)
                .name('position.z')
                .min(-10)
                .max(10)
            this.debugFolder.add(this.model.rotation, 'y')
                .step(Math.PI / 180)
                .name('rotation.y')
                .min(-10)
                .max(10)
        }
    }
}