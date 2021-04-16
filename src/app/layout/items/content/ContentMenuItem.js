import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import TabManager from '../../../manager/TabManager.js'
import ContentItemMenuItem from './ContentItemMenuItem.js'

export default class ContentMenuItem extends MenuItem{

    /**
     * @type {ContentItemMenuItem[]}
     */
    items

    constructor() {
        super({
            stateCode: '',
            name: '',
            zone: Layout.zone.BODY,
            type: Layout.type.BODY_CONTAINER
        })
        this.items = []
    }

    /**
     * @override
     */
    update() {
        super.update()
        const selectedTab = TabManager.get().getSelected()
        const item = this.items[0]
        if(selectedTab && (!item || item.data !== selectedTab.getContent())){
            this.items = [
                new ContentItemMenuItem(this, selectedTab.getContent())
            ]
        }
    }

}