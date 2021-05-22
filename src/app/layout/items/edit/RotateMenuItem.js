import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

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
        this.data = {unit: null}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && World.get().getTabManager().getSelected().isProtected()
    }
}