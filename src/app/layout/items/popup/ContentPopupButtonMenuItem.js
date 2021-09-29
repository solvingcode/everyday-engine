import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ContentPopupButtonMenuItem extends MenuItem {
    /**
     * @param {string} title
     * @param {MenuItem} menuItem
     * @param {MenuItem} parent
     * @param {*} bindObject
     */
    constructor(title, menuItem, parent = null, bindObject = null) {
        super({
            name: 'plus',
            title: title,
            stateCode: 'ACTION_CONTENT_POPUP',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.data = {contentMenuItem: menuItem, bindObject}
    }
}
