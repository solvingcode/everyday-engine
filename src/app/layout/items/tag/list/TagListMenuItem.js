import ListMenuItem from '../../list/ListMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import TagElementMenuItem from './TagElementMenuItem.js'

export default class TagListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            zone: Layout.zone.RIGHT
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return TagElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getPreference().getTag().getTags()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}