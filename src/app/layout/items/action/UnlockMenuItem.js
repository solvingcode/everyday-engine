import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

/**
 * Lock entities for modification (move, attach, ...)
 */
export default class UnlockMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Unlock',
            stateCode: 'ACTION_UNLOCK',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit && selectedUnit.getComponent(GUIPropertyComponent).isLocked()
    }
}