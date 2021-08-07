import MainCameraPositionFormMenuItem from './MainCameraPositionFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import GridFormMenuItem from './GridFormMenuItem.js'

/**
 * Menu responsible for managing scene properties
 */
class MainCameraMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Camera',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new MainCameraPositionFormMenuItem(this),
            new GridFormMenuItem(this)
        ]
    }
}

export default MainCameraMenuItem