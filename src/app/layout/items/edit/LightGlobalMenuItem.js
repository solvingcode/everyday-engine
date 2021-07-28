import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class LightGlobalMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'sun',
            title: 'Add light global',
            stateCode: 'ACTION_ADD_LIGHT_GLOBAL',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}
