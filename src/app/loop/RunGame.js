import Game from './Game.js'
import World from '../world/World.js'
import Storage from '../core/Storage.js'

/**
 * @class {RunGame}
 * @extends {Game}
 */
class RunGame extends Game {

    /**
     * @type {PreviewGame}
     */
    static instance

    /**
     * @override
     */
    async doInit() {
        await Storage.get().load(Storage.type.WORLD, EngineWorldData.world, World.get())
        await super.doInit()
    }

}

export default RunGame