import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class DeleteGameInputMenuItem extends MenuItem {
    constructor(parent, bindObject = null) {
        super({
            name: 'minus',
            title: 'Delete game input',
            stateCode: 'CONFIRM_ACTION_DELETE_GAME_INPUT',
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
