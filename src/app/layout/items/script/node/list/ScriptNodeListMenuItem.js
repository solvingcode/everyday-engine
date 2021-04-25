import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import ScriptNodeElementMenuItem from './ScriptNodeElementMenuItem.js'

export default class ScriptNodeListMenuItem extends ListMenuItem{

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
        return ScriptNodeElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const script = World.get().getScriptManager().getSelected()
        return script && script.getNodes()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}