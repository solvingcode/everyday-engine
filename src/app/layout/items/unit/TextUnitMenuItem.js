import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class TextUnitMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Text',
            stateCode: 'ACTION_ADD_TEXT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}
