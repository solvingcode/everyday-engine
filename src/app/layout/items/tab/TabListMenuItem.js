import Layout from '../../Layout.js'
import ListMenuItem from '../list/ListMenuItem.js'
import TabItemMenuItem from './TabItemMenuItem.js'
import World from '../../../world/World.js'

export default class TabListMenuItem extends ListMenuItem{

    constructor() {
        super({
            stateCode: '',
            type: Layout.type.TAB_LIST,
            zone: Layout.zone.TOP_TAB
        })
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return TabItemMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getTabManager().getTabs()
    }

    /**
     * @override
     * @param {Tab} bindObject
     */
    getActions(bindObject){
        return []
    }

}