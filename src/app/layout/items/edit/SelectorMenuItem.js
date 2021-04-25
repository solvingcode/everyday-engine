import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import TabManager from '../../../manager/TabManager.js'

class SelectorMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'mouse-pointer',
            title: 'Select',
            stateCode: 'DRAW_SELECT',
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

export default SelectorMenuItem