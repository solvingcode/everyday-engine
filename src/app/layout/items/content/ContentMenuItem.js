import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import TabManager from '../../../manager/TabManager.js'
import EditScriptContent from '../../../content/EditScriptContent.js'
import EditScriptMenuItem from './editscript/EditScriptMenuItem.js'

export default class ContentMenuItem extends MenuItem {

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
        const actualContentItem = this.items[0]
        if (selectedTab && (!actualContentItem || actualContentItem.data !== selectedTab.getContent())) {
            const contentTab = selectedTab.getContent()
            if (contentTab) {
                const contentItemType = this.getContentType(contentTab)
                this.items = [
                    new contentItemType(this, contentTab)
                ]
            } else {
                this.items = []
            }
        }
    }

    /**
     * @param {Content} content
     * @return {Function}
     */
    getContentType(content) {
        switch (content.constructor) {
            case EditScriptContent:
                return EditScriptMenuItem
            default:
                throw new TypeError(`ContentMenuItem: ${content.constructor} not supported`)
        }
    }

}