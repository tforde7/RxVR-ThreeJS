import * as THREE from 'three';
import Sizes from "./_utils/Sizes"
import Time from "./_utils/Time"
import Camera from './Camera';
import Renderer from './Renderer';
import MainEntranceScene from './scenes/MainEntrance/MainEntranceScene';
import Debug from './_utils/Debug';
import ReceptionScene from "./scenes/Reception/ReceptionScene";

let instance = null

export default class World {

    constructor(canvas) {

        // Ensure World is a singleton
        if (instance) {
            return instance
        }
        instance = this

        // Global access
        window.world = this

        // Options
        this.canvas = canvas

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.camera = new Camera()
        this.mainEntrance = new MainEntranceScene()
        this.reception = new ReceptionScene()
        this.renderer = new Renderer()



        // Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })  
        
        
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()

    }

    update() {
        this.camera.update()
        this.mainEntrance.update()
        this.renderer.update()
    }

    destroy() {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse through all the objects in the scene and dispose of all meshes
        this.mainEntrance.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose()
                for (const key in child.material) {
                    const value = child.material[key]
                    if (value && typeof value.dispose === 'function') {
                        value.dispose()
                    }
                }
            }
        })

        this.renderer.instance.dispose()
        this.camera.controls.dispose()

        if (this.debug.active) {
            this.debug.gui.destroy()
        }


    }
}