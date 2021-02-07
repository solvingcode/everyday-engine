import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import PhysicsPropsFormMenuItem from './PhysicsPropsFormMenuItem.js'

/**
 * @class {PhysicsMenuItem}
 */
export default class PhysicsMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Physics',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PhysicsPropsFormMenuItem(this)
        ]
    }
}