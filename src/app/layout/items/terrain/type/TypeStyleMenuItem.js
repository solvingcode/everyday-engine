import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

/**
 * Terrain style Menu Item
 */
class TypeStyleMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
        ]
    }
}

export default TypeStyleMenuItem