import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class UndoMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'reply',
            title: 'Undo',
            stateCode: 'ACTION_UNDO',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default UndoMenuItem