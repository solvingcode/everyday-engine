import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Create new project
 */
class NewProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'file',
            title: 'New project',
            stateCode: 'ACTION_NEW_PROJECT',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default NewProjectMenuItem