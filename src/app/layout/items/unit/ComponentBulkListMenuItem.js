import World from '../../../world/World.js'
import ListMenuItem from '../list/ListMenuItem.js'
import Layout from '../../Layout.js'
import ComponentBulkElementMenuItem from './ComponentBulkElementMenuItem.js'

export default class ComponentBulkListMenuItem extends ListMenuItem {

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
        return ComponentBulkElementMenuItem
    }

    /**
     * @override
     */
    setupItems() {
        super.setupItems()
        const selectedUnits = this.getUnits()
        const bulkComponents = _.intersection(...selectedUnits.map(selectedUnit =>
            selectedUnit.getComponents().filter(component => !component.isHidden())
                .map(component => component.constructor)))
        this.data.bindList = bulkComponents.map(componentClass => new componentClass())
        this.data.units = selectedUnits
    }

    /**
     * @override
     */
    doUpdate() {
        if (!_.isEqual(this.data.units, this.getUnits())) {
            this.setupItems()
        }
        return super.doUpdate()
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.bindList
    }

    /**
     * @override
     * @param {Unit} bindObject
     */
    getActions(bindObject) {
        return []
    }

    /**
     * @return {Unit[]}
     */
    getUnits() {
        return World.get().getUnitManager().getAllSelected()
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.getUnits().length > 1
    }
}