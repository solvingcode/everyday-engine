import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {LoadProjectMenuItem}
 */
class LoadProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Import project (Ctrl+O)',
            stateCode: 'ACTION_LOAD_PROJECT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default LoadProjectMenuItem