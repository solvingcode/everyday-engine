import PropsFormMenuItem from './PropsFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * Menu responsible for managing camera properties
 */
class CameraSceneMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Scene',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PropsFormMenuItem(this)
        ]
    }
}

export default CameraSceneMenuItem