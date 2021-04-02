import World from '../../../world/World.js'
import ListMenuItem from '../list/ListMenuItem.js'
import Layout from '../../Layout.js'
import UnitElementMenuItem from './UnitElementMenuItem.js'
import GUIPendingComponent from '../../../component/internal/gui/GUIPendingComponent.js'

export default class UnitListMenuItem extends ListMenuItem {

    constructor(parent, props) {
        super({
            zone: Layout.zone.RIGHT,
            ...props
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return UnitElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getUnitManager().getUnits().filter(unit => !unit.getComponent(GUIPendingComponent))
    }

    /**
     * @override
     * @param {Unit} bindObject
     */
    getActions(bindObject){
        return []
    }
}