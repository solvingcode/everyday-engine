import Loop from './Loop.js'
import MeshRenderer from '../renderer/MeshRenderer.js'
import World from '../world/World.js'

/**
 * @class {Scene}
 * @extends {Loop}
 */
class Scene extends Loop {

    /**
     * @type {Scene}
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
        this.meshRenderer.render(world.getCamera())
    }

}

export default Scene