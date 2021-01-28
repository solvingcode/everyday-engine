import MenuItem from '../../MenuItem.js'
import PropsFormMenuItem from './PropsFormMenuItem.js'
import Layout from '../../Layout.js'

/**
 * Menu responsible for managing camera properties
 */
class CameraMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Camera',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PropsFormMenuItem(this)
        ]
    }
}

export default CameraMenuItem