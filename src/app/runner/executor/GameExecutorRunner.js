import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'

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
        const units = world.getUnitManager().getUnits()
        const camera = world.getCamera()
        const lights = world.getLightsNotGenerated()
        units.forEach(unit => {
            ExecutorRegistry.get().execute(unit, {camera, deltaTime, lights})
        })
    }

}