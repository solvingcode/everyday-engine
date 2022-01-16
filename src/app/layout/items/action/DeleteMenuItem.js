import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class DeleteMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Delete (DEL)',
            stateCode: 'CONFIRM_ACTION_DELETE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default DeleteMenuItem