import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class FocusMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Focus',
            stateCode: 'ACTION_FOCUS',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit && selectedUnit.getComponent(GUIPropertyComponent).isIgnored()
    }
}