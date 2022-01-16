import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class UndoMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Undo',
            stateCode: 'ACTION_UNDO',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default UndoMenuItem