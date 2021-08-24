import World from '../../world/World.js'
import DrawerRunner from './DrawerRunner.js'
import SelectionUnitInstant from '../../unit/instant/type/internal/edit/SelectionUnitInstant.js'

export default class UnitDrawerRunner extends DrawerRunner {

    /**
     * @override
     */
    getDrawStateTypes(){
        return {
            SELECT: {
                instance: SelectionUnitInstant
            },
            MOVE: {
                instance: SelectionUnitInstant
            },
            SCALE: {
                instance: SelectionUnitInstant
            },
            ROTATE: {
                instance: SelectionUnitInstant
            }
        }
    }

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
        World.get().deleteUnit(this.getDrawUnit())
    }

    /**
     * @override
     */
    createUnit(instance, position, size) {
        return World.get().createChildUnitInstant(instance, null, position, size)
    }

    /**
     * @override
     */
    hasToRestartDrawState(){
        return true
    }
}