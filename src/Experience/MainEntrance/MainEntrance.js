import Experience from "../Experience";
import BrickWall from "./BrickWall";
import MainEntranceEnvironment from "./MainEntranceEnvironment";
import Ground from "./Ground";
// import Fox from "./Fox";
import FrontDoor from "./FrontDoor";
import GlassWall from "./GlassWall";
import TourGuide from "./TourGuide";

export default class MainEntrance {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.gui.addFolder('MainEntrance')
        }

        // Resources ready event
        this.resources.on('ready', () => {
            // Setup
            this.floor = new Ground()
            // this.fox = new Fox()
            
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