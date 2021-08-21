import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import UIContainerUnitInstant from '../../../unit/instant/type/internal/ui/UIContainerUnitInstant.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'

export default class UIImageMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Image',
            stateCode: 'ACTION_ADD_UI_IMAGE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit instanceof UIContainerUnitInstant || selectedUnit instanceof UIImageUnitInstant
    }
}