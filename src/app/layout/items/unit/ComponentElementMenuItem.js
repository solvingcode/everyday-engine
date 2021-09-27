import ComponentFormMenuItem from './ComponentFormMenuItem.js'
import ComponentDeleteMenuItem from './ComponentDeleteMenuItem.js'
import ListElementPanelMenuItem from '../list/ListElementPanelMenuItem.js'

export default class ComponentElementMenuItem extends ListElementPanelMenuItem{
    constructor(parent, data) {
        super(parent, data, {
            name: data.bind.getName()
        })
        this.items = [
            new ComponentDeleteMenuItem(this, data),
            new ComponentFormMenuItem(this)
        ]
        this.collapsed = true
    }

    /**
     * @override
     * Must override the method, else the parent's implementation will erase the items defined in the constructor
     */
    setData(data) {
        this.data = data
    }

}