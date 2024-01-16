import Experience from "../Experience";
import * as THREE from "three";

export default class Environment {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setSunlight()
        this.setEnvironmentMap()
    }

    setSunlight() {
        this.sunlight = new THREE.DirectionalLight(0xffffff, 4)
        this.sunlight.castShadow = true
        this.sunlight.shadow.mapSize.set(1024, 1024)
        this.sunlight.shadow.camera.far = 15
        this.sunlight.shadow.normalBias = 0.05
        this.sunlight.position.set(3, 3, - 2.25)
        this.scene.add(this.sunlight)

    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace

        this.scene.environment = this.environmentMap.texture

        this.setEnvironmentMap.updateMaterial = () => {
            this.scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.envMap = this.environmentMap.texture
                    child.material.needsUpdate = true
                }
            })
        }

        this.setEnvironmentMap.updateMaterial()

        
    }
}