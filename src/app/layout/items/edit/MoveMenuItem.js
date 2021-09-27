import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

export default class MoveMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'arrows-alt',
            title: 'Select/Move (G)',
            stateCode: 'DRAW_MOVE',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
        this.data = {unit: null}
    }

    /**
     * @override
     */
    isValid() {
        const selectedTab = World.get().getTabManager().getSelected()
        return super.isValid() && selectedTab && selectedTab.isProtected()
    }
}
