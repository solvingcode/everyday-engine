import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import PhysicsFormMenuItem from './PhysicsFormMenuItem.js'
import CameraFormMenuItem from './CameraFormMenuItem.js'

/**
 * @class {WorldMenuItem}
 */
export default class WorldMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'World',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PhysicsFormMenuItem(this),
            new CameraFormMenuItem(this)
        ]
    }
}