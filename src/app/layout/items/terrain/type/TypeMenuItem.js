import MenuItem from '../../../MenuItem.js'
import TypePosFormMenuItem from './TypePosFormMenuItem.js'
import TypeSizeFormMenuItem from './TypeSizeFormMenuItem.js'
import TypeStyleFormMenuItem from './TypeStyleMenuItem.js'
import TypeNoiseFormMenuItem from './TypeNoiseFormMenuItem.js'
import Layout from '../../../Layout.js'

/**
 * Terrain Menu Item
 */
class TypeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
            new TypePosFormMenuItem(this),
            new TypeSizeFormMenuItem(this),
            new TypeStyleFormMenuItem(this),
            new TypeNoiseFormMenuItem(this)
        ]
    }
}

export default TypeMenuItem