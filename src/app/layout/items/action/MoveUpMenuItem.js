import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Move up entities in z-index
 */
class MoveUpMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Move up',
            stateCode: 'ACTION_MOVE_UP',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default MoveUpMenuItem