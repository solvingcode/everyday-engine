import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ButtonMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {string} label
     * @param {string} stateCode
     * @param {*} data
     */
    constructor(parent, label, stateCode, data) {
        super({
            name: label,
            stateCode,
            type: Layout.type.BUTTON,
            zone: parent.zone
        })
        this.data = {data}
    }
}
