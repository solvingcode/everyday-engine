import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

class SelectorMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'mouse-pointer',
            title: 'Select (A)',
            stateCode: 'DRAW_SELECT',
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

export default SelectorMenuItem