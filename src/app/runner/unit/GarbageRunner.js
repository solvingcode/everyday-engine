import Runner from '../Runner.js'
import World from '../../world/World.js'
import GarbageManager from '../../manager/GarbageManager.js'

export class GarbageRunner extends Runner {

    /**
     * @type {GarbageRunner}
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
    execute() {
        const garbageManager = GarbageManager.get()
        this.cleanUnits(garbageManager)
        garbageManager.clear()
    }

    /**
     * @param {GarbageManager} garbageManager
     */
    cleanUnits(garbageManager) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const unitIds = garbageManager.getUnitIds()
        unitIds.forEach(unitId => {
            if (unitManager.findUnitById(unitId)) {
                unitManager.deleteUnitById(unitId)
            }
        })
    }
}