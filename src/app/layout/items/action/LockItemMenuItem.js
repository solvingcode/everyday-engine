import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

/**
 * @class {LockItemMenuItem}
 */
export default class LockItemMenuItem extends MenuItem {

    /**
     * @param {Unit} unit
     */
    constructor(unit) {
        super({
            name: 'Lock',
            stateCode: 'ACTION_LOCK_ITEM',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
        this.data = {unit}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !this.data.unit.getComponent(GUIPropertyComponent).isLocked()
    }
}