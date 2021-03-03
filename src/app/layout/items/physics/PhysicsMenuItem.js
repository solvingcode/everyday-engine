import Layout from '../../Layout.js'
import PhysicsPropsFormMenuItem from './PhysicsPropsFormMenuItem.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @class {PhysicsMenuItem}
 */
export default class PhysicsMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Physics',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PhysicsPropsFormMenuItem(this)
        ]
    }
}