import ListMenuItem from '../../list/ListMenuItem.js'
import Layout from '../../../Layout.js'
import CrudElementMenuItem from './CrudElementMenuItem.js'

export default class CrudListMenuItem extends ListMenuItem {

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
        return CrudElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return this.parent.getList()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}