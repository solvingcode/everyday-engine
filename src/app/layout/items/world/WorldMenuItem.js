import Layout from '../../Layout.js'
import PhysicsFormMenuItem from './PhysicsFormMenuItem.js'
import CameraFormMenuItem from './CameraFormMenuItem.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @class {WorldMenuItem}
 */
export default class WorldMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'World',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PhysicsFormMenuItem(this),
            new CameraFormMenuItem(this)
        ]
    }
}