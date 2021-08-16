import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

export default class AlignViewMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Align view',
            stateCode: 'ACTION_ALIGN_VIEW',
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