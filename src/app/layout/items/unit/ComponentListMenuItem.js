import World from '../../../world/World.js'
import ListMenuItem from '../list/ListMenuItem.js'
import Layout from '../../Layout.js'
import ComponentElementMenuItem from './ComponentElementMenuItem.js'
import UnitSelector from '../../../selector/UnitSelector.js'

export default class ComponentListMenuItem extends ListMenuItem {

    constructor(parent, props) {
        super({
            zone: Layout.zone.RIGHT,
            ...props
        }, parent)
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return ComponentElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const selectedUnit = UnitSelector.get().getFirstSelected(World.get())
        return (selectedUnit && selectedUnit.getComponents().filter(component => !component.isHidden())) || []
    }

    /**
     * @override
     * @param {Unit} bindObject
     */
    getActions(bindObject){
        return []
    }
}