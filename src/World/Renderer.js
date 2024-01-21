import World from "./World"
import * as THREE from "three";

export default class Renderer {

    constructor() {
        this.world = new World()
        this.sizes = this.world.sizes
        this.time = this.world.time
        this.mainEntranceScene = this.world.mainEntrance.scene
        this.receptionScene = this.world.reception.scene
        this.camera = this.world.camera

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.world.canvas,
            antialias: true,
        })
        this.instance.physicallyCorrectLights = true
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
        this.instance.outputColorSpace = THREE.SRGBColorSpace
        this.instance.toneMapping = THREE.ACESFilmicToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')


    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    update() {
        this.instance.render(this.mainEntranceScene, this.camera.instance)
        this.instance.render(this.receptionScene, this.camera.instance)

    }
}