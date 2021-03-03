import ConditionFormMenuItem from './ConditionFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * Condition Menu Item
 * Menu responsible for managing physics and ai conditions (when die, ...)
 */
class ConditionMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Conditions',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new ConditionFormMenuItem(this)
        ]
    }
}

export default ConditionMenuItem