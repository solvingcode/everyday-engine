import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

export default class ScaleOriginMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Scale to original size',
            stateCode: 'ACTION_SCALE_ORIGIN',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        return !!World.get().getUnitManager().getSelected()
    }
}