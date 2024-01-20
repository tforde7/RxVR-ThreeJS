import Experience from "../Experience";
import BrickWall from "./BrickWall";
import Environment from "./Environment";
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

        // Resources ready event
        this.resources.on('ready', () => {
            // Setup
            this.floor = new Ground()
            // this.fox = new Fox()
            
            this.brickWall = new BrickWall()
            this.glassWall = new GlassWall()
            this.frontDoor = new FrontDoor()
            this.tourGuide = new TourGuide()
            this.environment = new Environment()


        })
    }

    update() {
        if (this.fox) {
            this.fox.update()
        }
    }
}