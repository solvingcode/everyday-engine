import ListElementMenuItem from '../list/ListElementMenuItem.js'
import Layout from '../../Layout.js'
import TabCloseItemMenuItem from './TabCloseItemMenuItem.js'

export default class TabItemMenuItem extends ListElementMenuItem{

    constructor(parent, data) {
        super(parent, data, {
            stateCode: 'ACTION_SELECT_TAB',
            name: data.bind.getName(),
            zone: parent.zone,
            type: Layout.type.TAB_ITEM
        })
        if(data.bind.getContent()){
            this.items = [
                new TabCloseItemMenuItem(this, data)
            ]
        }
    }

}