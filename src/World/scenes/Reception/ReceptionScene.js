import World from "../../World";
import * as THREE from 'three'
import Resources from "../../_utils/Resources";
import receptionSources from "./_resources/receptionSources";
import ReceptionBox from "./objects/ReceptionBox";

export default class ReceptionScene {

    constructor() {
        this.world = new World()
        this.scene = new THREE.Scene()
        this.resources = new Resources(receptionSources)
        this.debug = this.world.debug



        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.gui.addFolder('Reception')
            this.debugFolder.close()
        }

        this.resources.on('ready', () => {
            console.log('reception ready')
        })

    }
}