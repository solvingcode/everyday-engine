import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import UnitFormMenuItem from './UnitFormMenuItem.js'
import ComponentListMenuItem from './ComponentListMenuItem.js'
import ComponentAddWrapperMenuItem from './ComponentAddWrapperMenuItem.js'
import World from '../../../world/World.js'
import ComponentBulkListMenuItem from './ComponentBulkListMenuItem.js'

export default class UnitsWrapperMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'units-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        }, parent)
        this.items = [
            new UnitFormMenuItem(this),
            new ComponentListMenuItem(this),
            new ComponentBulkListMenuItem(this),
            new ComponentAddWrapperMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const selectedTab = World.get().getTabManager().getSelected()
        return super.isValid() && selectedTab && selectedTab.isProtected()
    }
}