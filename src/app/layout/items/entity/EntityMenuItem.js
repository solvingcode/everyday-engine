import PropsFormMenuItem from './PropsFormMenuItem.js'
import SizeFormMenuItem from './SizeFormMenuItem.js'
import PositionFormMenuItem from './PositionFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * Entity Menu Item
 * Menu responsible for managing entity's props
 */
class EntityMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Properties',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PropsFormMenuItem(this),
            new PositionFormMenuItem(this),
            new SizeFormMenuItem(this)
        ]
    }
}

export default EntityMenuItem