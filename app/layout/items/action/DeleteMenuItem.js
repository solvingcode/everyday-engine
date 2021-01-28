import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class DeleteMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'trash-alt',
            title: 'Delete',
            stateCode: 'ACTION_DELETE',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default DeleteMenuItem