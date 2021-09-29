import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class DeleteMaskMenuItem extends MenuItem {
    constructor(parent, bindObject = null) {
        super({
            name: 'minus',
            title: 'Delete mask',
            stateCode: 'CONFIRM_ACTION_DELETE_MASK',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
        this.data = bindObject
    }

    /**
     * @override
     */
    isEnabled() {
        return super.isValid() && this.data
    }
}
