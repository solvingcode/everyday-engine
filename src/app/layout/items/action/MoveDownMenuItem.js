import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Move down entities in z-index
 */
class MoveDownMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'arrow-down',
            title: 'Move down',
            stateCode: 'ACTION_MOVE_DOWN',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default MoveDownMenuItem