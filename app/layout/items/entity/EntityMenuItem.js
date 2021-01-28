import MenuItem from '../../MenuItem.js'
import PropsFormMenuItem from './PropsFormMenuItem.js'
import SizeFormMenuItem from './SizeFormMenuItem.js'
import PositionFormMenuItem from './PositionFormMenuItem.js'
import Layout from '../../Layout.js'

/**
 * Entity Menu Item
 * Menu responsible for managing entity's props
 */
class EntityMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Properties',
            stateCode: '',
            type: Layout.type.PANEL,
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