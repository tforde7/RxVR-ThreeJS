import EventEmitter from "./EventEmitter";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Resources extends EventEmitter {
    constructor(sources) {

        super()

        // Options
        this.sources = sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()

    }

    setLoaders() {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading() {

        // Load each source
        this.sources.forEach((source) => {
            switch (source.type) {
                case "gltfModel":
                    this.loaders.gltfLoader.load(
                        source.path,
                        (gltf) => {
                            this.sourceLoaded(source, gltf)
                        }
                    )
                    break

                case "texture":
                    this.loaders.textureLoader.load(
                        source.path,
                        (texture) => {
                            this.sourceLoaded(source, texture)
                        }
                    )
                    break
                    
                case "cubeTexture":
                    this.loaders.cubeTextureLoader.load(
                        source.path,
                        (cubeTexture) => {
                            this.sourceLoaded(source, cubeTexture)
                        }
                    )
                    break
                default:
                    console.log("Unknown source type: ", source.type)
                    break;
            }
        })

    }

    sourceLoaded(source, file) {
        this.items[source.name] = file
        this.loaded++

        if (this.loaded === this.toLoad) {
            this.trigger("ready")
        }
    }
}