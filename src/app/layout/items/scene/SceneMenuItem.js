import PositionFormMenuItem from './PositionFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import GridFormMenuItem from './GridFormMenuItem.js'

/**
 * Menu responsible for managing scene properties
 */
class SceneMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Scene',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new PositionFormMenuItem(this),
            new GridFormMenuItem(this)
        ]
    }
}

export default SceneMenuItem