import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import ScriptFunctionElementMenuItem from './ScriptFunctionElementMenuItem.js'

export default class ScriptFunctionListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     */
    constructor(parent, props = {}) {
        super({
            name: 'Functions',
            zone: parent.zone,
            ...props
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return ScriptFunctionElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        return script && script.getFunctions()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}