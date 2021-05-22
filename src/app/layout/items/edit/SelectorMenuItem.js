import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

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
        this.data = {unit: null}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && World.get().getTabManager().getSelected().isProtected()
    }
}

export default SelectorMenuItem