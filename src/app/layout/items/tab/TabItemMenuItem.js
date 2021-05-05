import ListElementMenuItem from '../list/ListElementMenuItem.js'
import Layout from '../../Layout.js'
import TabCloseItemMenuItem from './TabCloseItemMenuItem.js'
import World from '../../../world/World.js'

export default class TabItemMenuItem extends ListElementMenuItem{

    constructor(parent, data) {
        super(parent, data, {
            stateCode: 'ACTION_SELECT_TAB',
            name: data.bind.getName(),
            zone: parent.zone,
            type: Layout.type.TAB_ITEM
        })
    }

    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        if(!data.bind.isProtected()){
            this.items = [
                new TabCloseItemMenuItem(this, data)
            ]
        }
    }

    /**
     * @return {boolean}
     */
    isValid() {
        return super.isValid() && !!World.get().getTabManager().findById(this.data.bind.getId())
    }

    /**
     * @override
     */
    update() {
        super.update()
        const tabName = this.data.bind.getName()
        if(this.props.name !== tabName){
            this.props.name = tabName
        }
    }

}