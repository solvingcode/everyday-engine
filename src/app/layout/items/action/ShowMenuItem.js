import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

/**
 * Show selected entities
 */
export default class ShowMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Show',
            stateCode: 'ACTION_SHOW',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit && !selectedUnit.getComponent(GUIPropertyComponent).isVisible()
    }
}