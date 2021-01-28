import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class DuplicateMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'copy',
            title: 'Duplicate',
            stateCode: 'ACTION_DUPLICATE',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default DuplicateMenuItem