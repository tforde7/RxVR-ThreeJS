import Experience from "../Experience";
import BrickWall from "./BrickWall";
import Environment from "./Environment";
import Floor from "./Floor";
import Fox from "./Fox";
import FrontDoor from "./FrontDoor";
import GlassWall from "./GlassWall";

export default class World {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Resources ready event
        this.resources.on('ready', () => {
            // Setup
            this.floor = new Floor()
            this.fox = new Fox()
            
            this.brickWall = new BrickWall()
            this.glassWall = new GlassWall()
            this.frontDoor = new FrontDoor()
            this.environment = new Environment()


        })
    }

    update() {
        if (this.fox) {
            this.fox.update()
        }
    }
}