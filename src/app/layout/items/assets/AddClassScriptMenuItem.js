import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddClassScriptMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Create class script',
            stateCode: 'ACTION_ADD_SCRIPT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}