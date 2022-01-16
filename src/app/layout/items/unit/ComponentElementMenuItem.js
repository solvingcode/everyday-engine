import ComponentFormMenuItem from './ComponentFormMenuItem.js'
import ComponentDeleteMenuItem from './ComponentDeleteMenuItem.js'
import ListElementPanelMenuItem from '../list/ListElementPanelMenuItem.js'

export default class ComponentElementMenuItem extends ListElementPanelMenuItem{
    constructor(parent, data) {
        super(parent, data, {})
        this.collapsed = true
    }

    /**
     * @override
     */
    doUpdate() {
        if(this.props.name !== this.data.bind.getName()){
            this.props.name = this.data.bind.getName()
            return true
        }
    }

    /**
     * @override
     */
    doSetData(data) {
        this.items = [
            new ComponentDeleteMenuItem(this, data),
            new ComponentFormMenuItem(this, data)
        ]
    }

}