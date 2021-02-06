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
        await Storage.get().loadLocal(Storage.type.WORLD, World.get())
        await super.init()
    }

}

export default PreviewGame