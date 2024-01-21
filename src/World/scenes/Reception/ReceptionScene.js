import World from "../../World";
import * as THREE from 'three'
import Resources from "../../_utils/Resources";
import receptionSources from "./_resources/receptionSources";

export default class ReceptionScene {

    constructor() {
        this.world = new World()
        this.scene = new THREE.Scene()
        this.resources = new Resources(receptionSources)

        // Resources ready event
        this.resources.on('ready', () => {
            // Setup


        })
    }
}