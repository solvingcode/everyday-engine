import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'

export class GameExecutorRunner extends Runner {

    /**
     * @type {GameRenderRunner}
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
    execute(mouse) {
        const units = World.get().getUnitManager().getUnits()
        units.forEach(unit => {
            ExecutorRegistry.get().execute(unit)
        })
    }

}