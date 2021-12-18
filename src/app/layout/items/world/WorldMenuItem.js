import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import ResolutionFormMenuItem from './ResolutionFormMenuItem.js'
import World from '../../../world/World.js'

/**
 * @class {WorldMenuItem}
 */
export default class WorldMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'World',
            zone: Layout.zone.RIGHT
        })
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new ResolutionFormMenuItem(this)
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