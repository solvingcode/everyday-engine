import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'
import Storage from '../../core/Storage.js'

export class GameExecutorRunner extends Runner {

    /**
     * @type {GameExecutorRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute(deltaTime) {
        const world = World.get()
        const units = world.getUnitManager().getEnabledUnits()
        const camera = world.getCamera()
        const lights = world.getLightsNotGenerated()
        const storage = Storage.get()
        units.forEach((unit, index) => {
            ExecutorRegistry.get().execute(unit, {camera, deltaTime, lights, storage, unitIndex: index, units})
        })
    }

}