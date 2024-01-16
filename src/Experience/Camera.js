import Experience from "./Experience";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import * as THREE from "three";

export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.sizes = this.experience.sizes
        this.camvas = this.experience.canvas

        this.setInstance()
        this.setOrbitControls()

    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            75, 
            this.sizes.width / this.sizes.height, 
            0.1, 
            100
        )
        this.instance.position.set(6, 4, 8)
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.camvas)
        this.controls.enableDamping = true

    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }   

    update() {
        this.controls.update()
    }
}