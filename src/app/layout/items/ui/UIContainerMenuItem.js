import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class UIContainerMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'UI Container',
            stateCode: 'ACTION_ADD_UI_CONTAINER',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}