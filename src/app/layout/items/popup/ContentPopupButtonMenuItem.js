import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ContentPopupButtonMenuItem extends MenuItem {
    /**
     * @param {string} title
     * @param {MenuItem} menuItem
     */
    constructor(title, menuItem) {
        super({
            name: 'plus',
            title: title,
            stateCode: 'ACTION_CONTENT_POPUP',
            type: Layout.type.ICON_TEXT,
            zone: Layout.zone.WINDOW
        })
        this.data = {contentMenuItem: menuItem}
    }
}
