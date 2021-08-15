import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class DuplicateMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Duplicate',
            stateCode: 'ACTION_DUPLICATE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default DuplicateMenuItem