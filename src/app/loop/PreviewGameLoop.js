import GameLoop from './GameLoop.js'
import World from '../world/World.js'
import Storage from '../core/Storage.js'
import ClassLoader from '../compiler/ClassLoader.js'

/**
 * @class {PreviewGameLoop}
 * @extends {GameLoop}
 */
class PreviewGameLoop extends GameLoop {

    /**
     * @type {PreviewGameLoop}
     */
    static instance

    /**
     * @override
     */
    async doInit() {
        await Storage.get().loadLocal(Storage.type.WORLD, World.get())
        await super.doInit()
        const world = World.get()
        world.disableGuides(true)
        ClassLoader.init(world)
    }

}

export default PreviewGameLoop