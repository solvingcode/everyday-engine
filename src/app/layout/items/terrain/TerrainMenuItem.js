import MenuItem from '../../MenuItem.js'
import TerrainFormMenuItem from './TerrainFormMenuItem.js'
import TypeMenuItem from './type/TypeMenuItem.js'
import Layout from '../../Layout.js'

/**
 * Terrain Menu Item
 * Menu responsible for managing terrains
 */
class TerrainMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Terrain',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new TerrainFormMenuItem(this),
            new TypeMenuItem(this)
        ]
    }
}

export default TerrainMenuItem