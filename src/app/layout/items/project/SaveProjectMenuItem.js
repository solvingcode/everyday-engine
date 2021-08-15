import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Save the project
 */
class SaveProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Save project',
            stateCode: 'ACTION_SAVE_PROJECT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default SaveProjectMenuItem