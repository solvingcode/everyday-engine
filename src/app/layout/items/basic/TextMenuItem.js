import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class TextMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {string} text
     */
    constructor(parent, text) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: parent.zone
        })
        this.text = [text]
    }
}