import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import Unit from '../../../unit/Unit.js'

export default class HideItemMenuItem extends MenuItem {

    /**
     * @param {Unit} unit
     */
    constructor(unit) {
        super({
            name: 'Hide',
            stateCode: 'ACTION_HIDE_ITEM',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
        this.data = {unit}
    }

    /**
     * @override
     */
    isValid() {
        const unit = this.data.unit
        return super.isValid() && unit instanceof Unit && unit.isVisible()
    }
}