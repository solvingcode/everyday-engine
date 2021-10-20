import Runner from '../Runner.js'
import World from '../../world/World.js'
import Storage from '../../core/Storage.js'

export default class WorldInitializeRunner extends Runner {

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
        if(!world.isInitialized()){
            world.doInit(Storage.get())
        }
    }

}