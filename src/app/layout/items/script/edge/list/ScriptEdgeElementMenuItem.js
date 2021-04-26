import Layout from '../../../../Layout.js'
import ListSelectElementMenuItem from '../../../list/ListSelectElementMenuItem.js'
import ScriptEdgeNameMenuItem from './ScriptEdgeNameMenuItem.js'
import DeleteScriptEdgeMenuItem from '../delete/DeleteScriptEdgeMenuItem.js'

export default class ScriptEdgeElementMenuItem extends ListSelectElementMenuItem {
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
            new ScriptEdgeNameMenuItem(this, data.bind),
            new DeleteScriptEdgeMenuItem(this, data.bind)
        ]
    }

}