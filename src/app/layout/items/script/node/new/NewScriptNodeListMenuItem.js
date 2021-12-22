import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import NewScriptNodeElementMenuItem from './NewScriptNodeElementMenuItem.js'
import StringHelper from '../../../../../utils/StringHelper.js'

export default class NewScriptNodeListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {NewScriptNodeForm} form
     * @param {Object} props
     */
    constructor(parent, form, props = {}) {
        super({
            name: '',
            zone: parent.zone,
            ...props
        }, parent)
        this.data = form
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return NewScriptNodeElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const valueSearch = this.data.getValue()
        if (valueSearch) {
            const regex = new RegExp(`${StringHelper.escapeRegex(valueSearch)}`, 'gi')
            const world = World.get()
            const functionRegistry = world.getFunctionRegistry()
            return functionRegistry.getInstances().filter(value => value.getName().match(regex))
        }
        return []
    }

    /**
     * @override
     */
    getActions(bindObject) {
        return []
    }

}