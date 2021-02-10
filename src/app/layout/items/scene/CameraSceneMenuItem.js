import MenuItem from '../../MenuItem.js'
import PropsFormMenuItem from './PropsFormMenuItem.js'
import Layout from '../../Layout.js'

/**
 * Menu responsible for managing camera properties
 */
class CameraSceneMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Scene',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PropsFormMenuItem(this)
        ]
    }
}

export default CameraSceneMenuItem