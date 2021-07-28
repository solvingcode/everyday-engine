import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class LightPointMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'lightbulb',
            title: 'Add light point',
            stateCode: 'ACTION_ADD_LIGHT_POINT',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}
