import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Hide selected entities
 */
class HideMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'eye-slash',
            title: 'Hide',
            stateCode: 'ACTION_HIDE',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default HideMenuItem