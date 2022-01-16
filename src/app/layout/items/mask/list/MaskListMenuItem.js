import ListMenuItem from '../../list/ListMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import MaskElementMenuItem from './MaskElementMenuItem.js'

export default class MaskListMenuItem extends ListMenuItem {

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
        return MaskElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getPreference().getMaskGroup().getMasks()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}