import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'

export default class ContentPopupElementMenuItem extends MenuItem {
    /**
     * @param {MenuItem} menuItem
     * @param {Vector} position
     * @param {Size} size
     */
    constructor(menuItem, position, size) {
        super({
            name: 'content-popup-wrapper',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            type: Layout.type.WRAPPER
        })
        this.items = [menuItem]
        this.position = position
        this.size = size
    }
}