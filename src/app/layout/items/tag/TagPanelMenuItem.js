import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import TagListMenuItem from './list/TagListMenuItem.js'
import AddTagPopupButtonMenuItem from './add/AddTagPopupButtonMenuItem.js'

export default class TagPanelMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'tag',
            title: 'Tag',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new AddTagPopupButtonMenuItem(this),
            new TagListMenuItem(this)
        ]
        this.collapsed = true
    }

    /**
     * @override
     */
    isSection() {
        return true
    }
}