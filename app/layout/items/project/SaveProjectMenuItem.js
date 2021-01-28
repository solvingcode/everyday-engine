import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Save the project
 */
class SaveProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'save',
            title: 'Save project',
            stateCode: 'ACTION_SAVE_PROJECT',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default SaveProjectMenuItem