import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

/**
 * Hide selected entities
 */
export default class HideMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Hide',
            stateCode: 'ACTION_HIDE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit && selectedUnit.isVisible()
    }
}