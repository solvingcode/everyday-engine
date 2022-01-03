import ComponentFormMenuItem from './ComponentFormMenuItem.js'
import World from '../../../world/World.js'

export default class ComponentBulkFormMenuItem extends ComponentFormMenuItem {

    /**
     * @override
     */
    preUpdate(value, menuItem) {
        return true
    }

    /**
     * @override
     */
    postUpdate(value, menuItem) {
        const formObject = this.getFormObject()
        const selectedUnits = World.get().getUnitManager().getAllSelected()
        const bindName = menuItem.getDataBind().bind
        selectedUnits.forEach(selectedUnit => {
            const component = selectedUnit.getComponent(formObject.constructor)
            component.setValue(bindName, value)
            this.postUpdateUnit(component, selectedUnit)
        })
    }

}