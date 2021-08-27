import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class UIEmptyMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Empty',
            stateCode: 'ACTION_ADD_UI_EMPTY',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}