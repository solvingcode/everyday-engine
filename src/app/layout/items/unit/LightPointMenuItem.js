import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class LightPointMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Light Point',
            stateCode: 'ACTION_ADD_LIGHT_POINT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}
