import Layout from '../../Layout.js'
import CameraFormMenuItem from './CameraFormMenuItem.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import ResolutionFormMenuItem from './ResolutionFormMenuItem.js'

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
            new CameraFormMenuItem(this),
            new ResolutionFormMenuItem(this)
        ]
    }
}