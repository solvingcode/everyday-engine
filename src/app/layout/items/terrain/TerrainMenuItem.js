import TerrainFormMenuItem from './TerrainFormMenuItem.js'
import TypeMenuItem from './type/TypeMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * Terrain Menu Item
 * Menu responsible for managing terrains
 */
class TerrainMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Terrain',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new TerrainFormMenuItem(this),
            new TypeMenuItem(this)
        ]
    }
}

export default TerrainMenuItem