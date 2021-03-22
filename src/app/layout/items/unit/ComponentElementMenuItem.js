import ListElementMenuItem from '../list/ListElementMenuItem.js'
import ComponentFormMenuItem from './ComponentFormMenuItem.js'

export default class ComponentElementMenuItem extends ListElementMenuItem{
    constructor(parent, data) {
        super(parent, data, {
            name: data.bind.getName()
        })
        this.items = [
            new ComponentFormMenuItem(this)
        ]
    }
}