import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class HideItemMenuItem extends MenuItem {

    /**
     * @param {Unit} unit
     */
    constructor(unit) {
        super({
            name: 'eye-slash',
            title: 'Hide',
            stateCode: 'ACTION_HIDE_ITEM',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
        this.data = {unit}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.data.unit.isVisible()
    }
}