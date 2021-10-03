import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class TileGridMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Tile Grid',
            stateCode: 'ACTION_ADD_TILE_GRID',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}
