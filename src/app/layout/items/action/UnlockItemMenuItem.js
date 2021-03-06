import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {UnlockItemMenuItem}
 */
export default class UnlockItemMenuItem extends MenuItem {

    /**
     * @param {Entity} entity
     */
    constructor(entity) {
        super({
            name: 'unlock',
            title: 'Unlock',
            stateCode: 'ACTION_UNLOCK_ITEM',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
        this.data = {entity}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.data.entity.isLocked()
    }
}