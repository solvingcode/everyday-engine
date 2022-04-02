import Runner from '../Runner.js'
import World from '../../world/World.js'
import Storage from '../../core/Storage.js'

export default class WorldGameInitializeRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const world = World.get()
        if (!world.isInitialized()) {
            world.doInit(Storage.get(), true)
        } else if (!world.isReloaded()) {
            world.reloadAllUnit()
        }
    }

}