import MenuItem from '../../MenuItem.js'
import World from '../../../world/World.js'
import UIContainerUnitInstant from '../../../unit/instant/type/internal/ui/UIContainerUnitInstant.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'
import UIEmptyUnitInstant from '../../../unit/instant/type/internal/ui/UIEmptyUnitInstant.js'

/**
 * @abstract
 */
export default class UIElementMenuItem extends MenuItem {
    constructor(props) {
        super(props)
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit instanceof UIContainerUnitInstant ||
            selectedUnit instanceof UIImageUnitInstant ||
            selectedUnit instanceof UIEmptyUnitInstant
    }
}