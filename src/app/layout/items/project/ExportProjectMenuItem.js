import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import OpenDialogExportProjectAction from '../../../runner/action/project/OpenDialogExportProjectAction.js'

/**
 * @class {ExportProjectMenuItem}
 */
class ExportProjectMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Export project (Ctrl+B)',
            stateCode: OpenDialogExportProjectAction.STATE,
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default ExportProjectMenuItem