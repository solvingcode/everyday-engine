import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class LightGlobalMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Light Global',
            stateCode: 'ACTION_ADD_LIGHT_GLOBAL',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}
