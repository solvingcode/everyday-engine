import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class UnfocusMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'UnFocus',
            stateCode: 'ACTION_UNFOCUS',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit && !selectedUnit.getComponent(GUIPropertyComponent).isIgnored()
    }
}