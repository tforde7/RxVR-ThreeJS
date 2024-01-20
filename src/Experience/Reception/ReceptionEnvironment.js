import Experience from "../Experience";
import * as THREE from "three";

export default class ReceptionEnvironment {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.gui.addFolder('ReceptionEnvironment')
        }

        this.setSunlight()
        this.setEnvironmentMap()
        this.setRectAreaLight()
    }

    setSunlight() {
        this.sunlight = new THREE.DirectionalLight(0xffffff, 3)
        this.sunlight.castShadow = true
        this.sunlight.shadow.mapSize.set(1024, 1024)
        this.sunlight.shadow.camera.far = 15
        this.sunlight.shadow.normalBias = 0.05
        this.sunlight.position.set(3, 3, 3)
        this.scene.add(this.sunlight)

        // Debug
        if (this.debug.active) {
            this.debugFolder.add(this.sunlight, 'intensity')
                .step(0.001)
                .min(0)
                .max(10)
                .name('sunlightIntensity')

            this.debugFolder.add(this.sunlight.position, 'x')
                .step(0.001)
                .min(-5)
                .max(5)
                .name('sunlightX')

            this.debugFolder.add(this.sunlight.position, 'y')
                .step(0.001)
                .min(-5)
                .max(5)
                .name('sunlightY')
            this.debugFolder.add(this.sunlight.position, 'z')
                .step(0.001)
                .min(-5)
                .max(5)
                .name('sunlightZ')
        }

    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace

        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterial = () => {
            this.scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.envMap = this.environmentMap.texture
                    child.material.needsUpdate = true
                }
            })
        }

        this.environmentMap.updateMaterial()

        // Debug
        if (this.debug.active) {
            this.debugFolder.add(this.environmentMap, 'intensity')
                .step(0.001)
                .min(0)
                .max(4)
                .name('envIntensity')
                .onChange(this.environmentMap.updateMaterial)
        }


    }

    setRectAreaLight() {
        this.rectAreaLight = new THREE.RectAreaLight(0x0000ff, 20, 5, 7)
        this.rectAreaLight.position.set(0, 0, -10)
        this.rectAreaLight.lookAt(0, 2, 0)
        this.scene.add(this.rectAreaLight)

        // Debug
        if (this.debug.active) {
            this.debugFolder.add(this.rectAreaLight, 'intensity')
                .step(0.001)
                .min(0)
                .max(10)
                .name('rectAreaLightIntensity')
            this.debugFolder.add(this.rectAreaLight.position, 'x')
                .step(0.001)
                .min(-10)
                .max(10)
                .name('position.x')
            this.debugFolder.add(this.rectAreaLight.position, 'y')
                .step(0.001)
                .min(-10)
                .max(10)
                .name('position.y')
            this.debugFolder.add(this.rectAreaLight.position, 'z')
                .step(0.001)
                .min(-10)
                .max(10)
                .name('position.z')
        }
    }
}