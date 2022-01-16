import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class DeleteCrudMenuItem extends MenuItem {
    constructor(parent, bindObject = null) {
        super({
            name: 'minus',
            title: 'Delete',
            stateCode: 'CONFIRM_ACTION_DELETE_CRUD',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
        this.data = {bind: bindObject}
    }

    /**
     * @override
     */
    isEnabled() {
        return super.isValid() && this.data
    }
}
