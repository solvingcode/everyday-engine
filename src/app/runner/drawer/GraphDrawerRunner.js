import World from '../../world/World.js'
import DrawerRunner from './DrawerRunner.js'
import SelectionUnitInstant from '../../unit/instant/type/internal/edit/SelectionUnitInstant.js'
import LineUnitInstant from '../../unit/instant/type/internal/primitive/LineUnitInstant.js'

export default class GraphDrawerRunner extends DrawerRunner {

    /**
     * @override
     */
    isHandle(window) {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isHandle(window) && script
    }

    /**
     * @override
     */
    getCamera(){
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return script && script.getCamera()
    }

    /**
     * @override
     */
    deleteUnit() {
        World.get().getGraphManager().deleteUnit(this.getDrawUnit())
    }

    /**
     * @override
     */
    createUnit(instance, position, size) {
        return World.get().getGraphManager().createUnitInstant(instance, position, size)
    }

    /**
     * @override
     */
    getDrawStateTypes() {
        return {
            SELECT_GRAPH: {
                instance: SelectionUnitInstant
            },
            NODE_EDGE: {
                instance: LineUnitInstant
            }
        }
    }

    /**
     * @override
     */
    hasToRestartDrawState(){
        return false
    }

}