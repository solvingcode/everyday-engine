import ListMenuItem from '../list/ListMenuItem.js'
import OptionActionsElementMenuItem from './OptionActionsElementMenuItem.js'
import Layout from '../../Layout.js'

export default class OptionActionsListMenuItem extends ListMenuItem {
    /**
     * @param {MenuItem[]} actions
     * @param {Object} props
     */
    constructor(actions, props = {}) {
        super({
            name: '',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            ...props
        })
        this.data = actions
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return OptionActionsElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return [null]
    }

    /**
     * @override
     * @param {*} bindObject
     */
    getActions(bindObject){
        return this.data
    }
}