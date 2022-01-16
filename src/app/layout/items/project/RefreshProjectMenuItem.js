import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class RefreshProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Refresh',
            stateCode: 'ACTION_REFRESH',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}