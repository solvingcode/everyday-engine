import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import SceneListMenuItem from './SceneListMenuItem.js'
import SceneFormMenuItem from './SceneFormMenuItem.js'
import World from '../../../world/World.js'

export default class SceneMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Scenes',
            zone: Layout.zone.RIGHT
        })
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new SceneListMenuItem(this),
            new SceneFormMenuItem(this)
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