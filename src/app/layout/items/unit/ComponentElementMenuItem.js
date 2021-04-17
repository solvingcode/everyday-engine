import ListElementActionsMenuItem from '../list/ListElementActionsMenuItem.js'
import ComponentFormMenuItem from './ComponentFormMenuItem.js'

export default class ComponentElementMenuItem extends ListElementActionsMenuItem{
    constructor(parent, data) {
        super(parent, data, {
            name: data.bind.getName()
        })
        this.items = [
            new ComponentFormMenuItem(this)
        ]
    }

    /**
     * @override
     * Must override the method, else the parent's implementation will erase the items defined in the constructor
     */
    setData(data) {
        this.data = data
    }

}