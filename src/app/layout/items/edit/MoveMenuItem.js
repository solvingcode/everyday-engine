import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import TabManager from '../../../manager/TabManager.js'

export default class MoveMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'arrows-alt',
            title: 'Select/Move',
            stateCode: 'DRAW_MOVE',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && TabManager.get().getSelected().isProtected()
    }
}
