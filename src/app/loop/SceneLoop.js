import Loop from './Loop.js'
import MeshRenderer from '../renderer/MeshRenderer.js'
import World from '../world/World.js'

/**
 * @class {SceneLoop}
 * @extends {Loop}
 */
class SceneLoop extends Loop {

    /**
     * @type {SceneLoop}
     */
    static instance

    constructor() {
        super()
        this.meshRenderer = MeshRenderer.get()
    }

    /**
     * @override
     */
    async doInit() {
        //not needed
    }

    loop() {
        const world = World.get()
        world.update()
        this.meshRenderer.render()
    }

}

export default SceneLoop