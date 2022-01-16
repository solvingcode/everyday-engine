import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

export default class CreateUnitInstantMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Create Instant',
            stateCode: 'ACTION_CREATE_UNIT_INSTANT',
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