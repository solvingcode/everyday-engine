import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ErrorTitleMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'exclamation-circle',
            title: 'Error',
            stateCode: '',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
    }
}