import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddCodeScriptMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'file-code',
            title: 'Create code script',
            stateCode: 'ACTION_ADD_CODE_SCRIPT',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}