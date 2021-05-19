import World from '../../world/World.js'
import DrawerRunner from './DrawerRunner.js'

export default class UnitDrawerRunner extends DrawerRunner {

    /**
     * @override
     */
    getCamera(){
        return World.get().getCamera()
    }

    /**
     * @override
     */
    deleteUnit() {
        World.get().deleteUnit(this.currentUnit)
    }

    /**
     * @override
     */
    createUnit(instance, position, size) {
        return World.get().getUnitManager().createUnitInstant(instance, position, size)
    }
}