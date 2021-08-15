import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {ExportProjectMenuItem}
 */
class ExportProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Export project',
            stateCode: 'ACTION_EXPORT_PROJECT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default ExportProjectMenuItem