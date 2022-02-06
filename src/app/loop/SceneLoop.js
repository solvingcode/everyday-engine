import Loop from './Loop.js'
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

    /**
     * @override
     */
    async doInit() {
        //not needed
    }

    loop() {
        const world = World.get()
        world.update()
        world.getMeshRenderer().render()
    }

}

export default SceneLoop