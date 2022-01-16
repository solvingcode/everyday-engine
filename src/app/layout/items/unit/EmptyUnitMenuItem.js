import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class EmptyUnitMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'New Empty',
            stateCode: 'ACTION_ADD_EMPTY_UNIT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}
