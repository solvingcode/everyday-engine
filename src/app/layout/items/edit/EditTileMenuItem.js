import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import TileMapComponent from '../../../component/internal/tile/TileMapComponent.js'

export default class EditTileMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'pencil-alt',
            title: 'Edit Tile (E)',
            stateCode: 'DRAW_EDIT_TILE_MAP',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const selectedTab = world.getTabManager().getSelected()
        const selectedUnit = world.getUnitManager().getSelected()
        return super.isValid() && selectedTab && selectedTab.isProtected() &&
            selectedUnit && selectedUnit.getComponent(TileMapComponent)
    }
}