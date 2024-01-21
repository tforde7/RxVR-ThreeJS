import World from "../../World";
import BrickWall from "./objects/BrickWall";
import MainEntranceEnvironment from "./MainEntranceEnvironment";
import Ground from "./objects/Ground";
import FrontDoor from "./objects/FrontDoor";
import GlassWall from "./objects/GlassWall";
import TourGuide from "./objects/TourGuide";
import * as THREE from "three";
import sources from "./_resources/mainEntranceSources";
import Resources from "../../_utils/Resources";

export default class MainEntranceScene {

    constructor() {
        this.world = new World()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.debug = this.world.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.gui.addFolder('MainEntrance')
            this.debugFolder.close()
        }

        // Resources ready event
        this.resources.on('ready', () => {
            // Setup
            this.ground = new Ground()
            this.brickWall = new BrickWall()
            this.glassWall = new GlassWall()
            this.frontDoor = new FrontDoor()
            this.tourGuide = new TourGuide()
            this.environment = new MainEntranceEnvironment()


        })
    }

    update() {
        // if (this.fox) {
        //     this.fox.update()
        // }
    }
}