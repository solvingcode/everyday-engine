import GameLoop from './GameLoop.js'
import World from '../world/World.js'
import Storage from '../core/Storage.js'

/**
 * @class {RunGame}
 * @extends {GameLoop}
 */
class RunGame extends GameLoop {

    /**
     * @type {RunGame}
     */
    static instance

    /**
     * @override
     */
    async doInit() {
        await Storage.get().load(Storage.type.WORLD, EngineWorldData.world, World.get())
        await super.doInit()
        World.get().disableGuides()
    }

}

export default RunGame