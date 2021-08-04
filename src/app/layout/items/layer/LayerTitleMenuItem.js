import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class LayerTitleMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Unit} unit
     */
    constructor(parent, unit) {
        super({
            name: UnitHelper.getIconName(unit),
            title: unit.getName(),
            stateCode: 'ACTION_SELECT_LAYER_ELEMENT',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {unit}
    }

    update() {
        super.update()
        const unitName = this.data.unit.getName()
        if(this.props.title !== unitName){
            this.props.title = unitName
        }
    }
}