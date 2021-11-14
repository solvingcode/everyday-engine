import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import IconHelper from '../../../utils/IconHelper.js'

export default class LayerTitleMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Unit|Scene} object
     */
    constructor(parent, object) {
        super({
            name: IconHelper.getIconName(object),
            title: object.getName(),
            stateCode: 'ACTION_SELECT_LAYER_ELEMENT',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {object}
    }

    /**
     * @override
     */
    doUpdate() {
        const objectName = this.data.object.getName()
        if(this.props.title !== objectName){
            this.props.title = objectName
            return true
        }
    }

    doSetData(data) {
    }
}