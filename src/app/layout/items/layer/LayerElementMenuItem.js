import ListElementMenuItem from '../list/ListElementMenuItem.js'
import Layout from '../../Layout.js'
import LayerListMenuItem from './LayerListMenuItem.js'
import LayerTitleMenuItem from './LayerTitleMenuItem.js'

export default class LayerElementMenuItem extends ListElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            stateCode: '',
            type: Layout.type.LAYER_ELEMENT
        })
    }

    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        this.items = [
            new LayerTitleMenuItem(this, data.bind),
            new LayerListMenuItem(this, this.parent.props, data.bind)
        ]
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

}