import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {HideItemMenuItem}
 */
export default class HideItemMenuItem extends MenuItem {

    /**
     * @param {Entity} entity
     */
    constructor(entity) {
        super({
            name: 'eye-slash',
            title: 'Hide',
            stateCode: 'ACTION_HIDE_ITEM',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
        this.data = {entity}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.data.entity.isVisible()
    }
}