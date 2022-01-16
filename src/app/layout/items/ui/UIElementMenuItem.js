import MenuItem from '../../MenuItem.js'
import World from '../../../world/World.js'
import UIContainerUnitInstant from '../../../unit/instant/type/internal/ui/UIContainerUnitInstant.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'
import UIEmptyUnitInstant from '../../../unit/instant/type/internal/ui/UIEmptyUnitInstant.js'
import UIButtonUnitInstant from '../../../unit/instant/type/internal/ui/UIButtonUnitInstant.js'
import UITextUnitInstant from '../../../unit/instant/type/internal/ui/UITextUnitInstant.js'

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
            selectedUnit instanceof UIEmptyUnitInstant ||
            selectedUnit instanceof UIButtonUnitInstant ||
            selectedUnit instanceof UITextUnitInstant
    }
}