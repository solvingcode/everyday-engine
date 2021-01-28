import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Lock entities for modification (move, attach, ...)
 */
class UnlockMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'unlock',
            title: 'Unlock',
            stateCode: 'ACTION_UNLOCK',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default UnlockMenuItem