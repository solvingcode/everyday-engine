import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddScriptMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'project-diagram',
            title: 'Create script',
            stateCode: 'ACTION_ADD_SCRIPT',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}