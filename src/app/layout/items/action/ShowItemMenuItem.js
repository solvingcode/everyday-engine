import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import Unit from '../../../unit/Unit.js'

/**
 * @class {ShowItemMenuItem}
 */
export default class ShowItemMenuItem extends MenuItem {

    /**
     * @param {Unit} unit
     */
    constructor(unit) {
        super({
            name: 'Show',
            stateCode: 'ACTION_SHOW_ITEM',
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
        return super.isValid() && unit instanceof Unit && !unit.isVisible()
    }
}