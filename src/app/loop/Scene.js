import Loop from './Loop.js'
import ObjectRenderer from '../renderer/ObjectRenderer.js'
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
        this.objectRenderer = new ObjectRenderer()
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
        world.draw(this.objectRenderer)
        this.objectRenderer.render(world.getCamera())
    }

}

export default Scene