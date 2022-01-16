import MainCameraPositionFormMenuItem from './MainCameraPositionFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import World from '../../../world/World.js'

/**
 * Menu responsible for managing scene properties
 */
class MainCameraMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Camera',
            zone: Layout.zone.RIGHT
        })
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new MainCameraPositionFormMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isValid() && !script
    }
}

export default MainCameraMenuItem