import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class DeleteMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Delete',
            stateCode: 'ACTION_DELETE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default DeleteMenuItem