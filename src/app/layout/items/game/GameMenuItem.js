import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import MaskMenuItem from '../mask/MaskMenuItem.js'
import GameInputMenuItem from '../input/GameInputMenuItem.js'
import TagMenuItem from '../tag/TagMenuItem.js'
import LayerGroupMenuItem from '../layergroup/LayerGroupMenuItem.js'
import World from '../../../world/World.js'

export default class GameMenuItem extends PanelMenuItem {

    constructor() {
        super({
            name: 'game',
            title: 'Game Preference',
            zone: Layout.zone.RIGHT
        }, null)
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new MaskMenuItem(this),
            new LayerGroupMenuItem(this),
            new TagMenuItem(this),
            new GameInputMenuItem(this)
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