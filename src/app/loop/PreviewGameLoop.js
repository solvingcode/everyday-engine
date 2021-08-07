import GameLoop from './GameLoop.js'
import World from '../world/World.js'
import Storage from '../core/Storage.js'

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
    }

}

export default PreviewGameLoop