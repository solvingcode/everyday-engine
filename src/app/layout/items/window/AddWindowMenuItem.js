import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddWindowMenuItem extends MenuItem {
    /**
     * @param {string} label
     * @param {string} window
     */
    constructor(label, window) {
        super({
            id: 1,
            name: label,
            stateCode: 'ACTION_ADD_WINDOW',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
        this.data = {window}
    }
}