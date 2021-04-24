import Layout from '../../../Layout.js'
import ScriptNodeNameMenuItem from './ScriptNodeNameMenuItem.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'

export default class ScriptNodeElementMenuItem extends ListSelectElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        this.items = [
            new ScriptNodeNameMenuItem(this, data.bind)
        ]
    }

}