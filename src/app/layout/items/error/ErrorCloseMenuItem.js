import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ErrorCloseMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'times',
            title: 'Close',
            stateCode: 'ACTION_CLOSE_ERROR_POPUP',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
    }
}