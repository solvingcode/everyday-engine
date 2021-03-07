import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ScaleMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'expand-arrows-alt',
            title: 'Select/Scale',
            stateCode: 'DRAW_SCALE',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
    }
}