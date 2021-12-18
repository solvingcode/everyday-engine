import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import LayerTreeMenuItem from './LayerTreeMenuItem.js'
import World from '../../../world/World.js'

export default class LayerMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'layer',
            title: 'Layer',
            zone: Layout.zone.RIGHT
        })
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new LayerTreeMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isSection() {
        return true
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isValid() && !script
    }
}