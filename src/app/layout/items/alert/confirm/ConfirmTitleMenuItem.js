import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class ConfirmTitleMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'exclamation-circle',
            title: 'Confirm',
            stateCode: '',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
    }
}