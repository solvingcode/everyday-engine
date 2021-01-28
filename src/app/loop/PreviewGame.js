import Game from './Game.js'
import World from '../world/World.js'
import Storage from '../core/Storage.js'

/**
 * @class {PreviewGame}
 * @extends {Game}
 */
class PreviewGame extends Game {

    /**
     * @type {PreviewGame}
     */
    static instance

    /**
     * @override
     */
    async init() {
        const world = World.get()
        await Storage.get().loadLocal(Storage.type.WORLD, world)
        await super.init()
    }

}

export default PreviewGame