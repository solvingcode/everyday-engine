import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import EditScriptContent from '../../../content/script/EditScriptContent.js'
import EditScriptMenuItem from './editscript/xml/EditScriptMenuItem.js'
import EditGraphScriptContent from '../../../content/script/EditGraphScriptContent.js'
import EditGraphScriptMenuItem from './editscript/graph/EditGraphScriptMenuItem.js'
import EditScriptCodeContent from '../../../content/script/EditScriptCodeContent.js'
import EditScriptCodeMenuItem from './editscript/code/EditScriptCodeMenuItem.js'
import World from '../../../world/World.js'
import EditAnimationContent from '../../../content/animation/EditAnimationContent.js'
import EditAnimationMenuItem from './animation/EditAnimationMenuItem.js'

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
    doUpdate() {
        const selectedTab = World.get().getTabManager().getSelected()
        const actualContentItem = this.items[0]
        if (selectedTab && (!actualContentItem || actualContentItem.data !== selectedTab.getContent())) {
            const contentTab = selectedTab.getContent()
            let items = []
            if (contentTab) {
                const contentItemType = this.getContentType(contentTab)
                items = [
                    new contentItemType(this, contentTab)
                ]
            }
            if (!_.isEqual(this.items, items)) {
                this.items = items
                return true
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
            case EditGraphScriptContent:
                return EditGraphScriptMenuItem
            case EditScriptCodeContent:
                return EditScriptCodeMenuItem
            case EditAnimationContent:
                return EditAnimationMenuItem
            default:
                throw new TypeError(`ContentMenuItem: ${content.constructor.name} not supported`)
        }
    }

    doSetData(data) {
    }
}