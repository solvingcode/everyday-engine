import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import TileGridUnitInstant from '../../../unit/instant/type/internal/tile/TileGridUnitInstant.js'

export default class TileMapMenuItem extends MenuItem {

    constructor() {
        super({
            id: 1,
            name: 'Tile Map',
            stateCode: 'ACTION_ADD_TILE_MAP',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit instanceof TileGridUnitInstant
    }

}
