import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {ShowItemMenuItem}
 */
export default class ShowItemMenuItem extends MenuItem {

    /**
     * @param {Entity} entity
     */
    constructor(entity) {
        super({
            name: 'eye',
            title: 'Show',
            stateCode: 'ACTION_SHOW_ITEM',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
        this.data = {entity}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !this.data.entity.isVisible()
    }
}