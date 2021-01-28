import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Lock entities for modification (move, attach, ...)
 */
class LockMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'lock',
            title: 'Lock',
            stateCode: 'ACTION_LOCK',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default LockMenuItem