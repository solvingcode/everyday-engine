import ListMenuItem from '../list/ListMenuItem.js'
import Layout from '../../Layout.js'
import LayerElementMenuItem from './LayerElementMenuItem.js'
import World from '../../../world/World.js'
import GUIPendingComponent from '../../../component/internal/gui/GUIPendingComponent.js'

export default class LayerListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {Unit} unit
     */
    constructor(parent, props = {}, unit = null) {
        super({
            zone: Layout.zone.RIGHT,
            ...props
        })
        this.data = unit
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return LayerElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return !this.data ?
            World.get().getUnitManager().getUnits().filter(unit => !unit.getComponent(GUIPendingComponent)) : []
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}