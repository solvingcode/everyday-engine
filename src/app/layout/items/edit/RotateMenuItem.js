import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import TabManager from '../../../manager/TabManager.js'

export default class RotateMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'redo',
            title: 'Select/Rotate',
            stateCode: 'DRAW_ROTATE',
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