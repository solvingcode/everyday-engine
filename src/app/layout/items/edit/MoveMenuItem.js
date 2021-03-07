import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class MoveMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'arrows-alt',
            title: 'Select/Move',
            stateCode: 'DRAW_MOVE',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
    }
}