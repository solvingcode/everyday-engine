import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {LockItemMenuItem}
 */
export default class LockItemMenuItem extends MenuItem {

    /**
     * @param {Entity} entity
     */
    constructor(entity) {
        super({
            name: 'lock',
            title: 'Lock',
            stateCode: 'ACTION_LOCK_ITEM',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
        this.data = {entity}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !this.data.entity.isLocked()
    }
}