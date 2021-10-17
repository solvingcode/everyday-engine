import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class CloseWindowMenuItem extends MenuItem {
    /**
     * @param {string} window
     * @param {MenuItem} parent
     */
    constructor(window, parent) {
        super({
            name: 'times',
            title: 'Close',
            stateCode: 'ACTION_CLOSE_WINDOW',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {window}
    }
}