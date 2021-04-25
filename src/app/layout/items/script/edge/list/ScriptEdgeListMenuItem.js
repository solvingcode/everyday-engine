import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import ScriptEdgeElementMenuItem from './ScriptEdgeElementMenuItem.js'

export default class ScriptEdgeListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     */
    constructor(parent, props = {}) {
        super({
            name: '',
            zone: parent.zone,
            ...props
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return ScriptEdgeElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const script = World.get().getScriptManager().getSelected()
        return script && script.getInputs()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}